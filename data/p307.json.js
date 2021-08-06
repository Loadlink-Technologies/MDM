window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p307","name":"usp_MatchLoadPosting2","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_MatchLoadPosting2"},{"field":"Type","value":"Procedure"}],"script":"-- #2\r\nCREATE PROCEDURE [dbo].[usp_MatchLoadPosting2] \r\n  @LoadToken    int\r\n ,@CustCd        varchar(10) = ''\r\n ,@UserID        int         = 0\r\n                 \r\n ,@SrceID        int         = 0\r\n ,@SrceSt        char(2)     = ''\r\n ,@SrceLong      float       = ''\r\n ,@SrceLat       float       = ''\r\n ,@SrceCountry   int         = 0\r\n ,@SrceRadius    int         = 0\r\n                 \r\n ,@DestID        int         = 0\r\n ,@DestSt        char(2)     = ''\r\n ,@DestLong      float       = ''\r\n ,@DestLat       float       = ''\r\n ,@DestCountry   int         = 0\r\n ,@DestRadius    int         = 0\r\n                 \r\n ,@DateAvail     datetime    = NULL\r\n ,@VSize         int         = 0\r\n ,@VType         bigint      = 0\r\n ,@PAttrib       bigint      = 0\r\n                 \r\n ,@PostMode      char(1)     = 'A' \r\n ,@GlobalExclude bit         = 0\r\n ,@NetworkId     int         = 0 \r\n ,@OriginalToken int         = 0 \r\n\r\n \r\n-- Disable the native compiled stored procedures \r\n\r\nAS BEGIN \r\n--------------------------------------------------------------------------\r\n--PROCEDURE NAME : usp_MatchLoadPosting\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Perform Load Matching\r\n--\r\n-- CALLED BY      : LoadMatching Web API \r\n-- EXECUTION FREQUENCY : \r\n-- \r\n-- INPUT PARAMS   : @LoadToken     = Newly created Load Posting's Token\r\n--                  @CustCD        = Customer Code        \r\n--                  @DateAvail     = Availab\r\n--                                 \r\n--                  @SrceID        = Source Point ID from Point table        \r\n--                  @SrceCity      = Source City\r\n--                  @SrceSt        = Source State      \r\n--                  @SrceLong      = Source Longitude      \r\n--                  @SrceLat       = Source Latitude       \r\n--                  @SrceRadius    = Source Radius    \r\n--                                 \r\n--                  @DestID        = Destination City      \r\n--                  @DestCity      = Destination State          \r\n--                  @DestSt        = Destination Longitude      \r\n--                  @DestLong      = Destination Longitude       \r\n--                  @DestLat       = Destination Latitude       \r\n--                  @DestRadius    = Destination Radius\r\n--                                 \r\n--                  @VSize         = Vehicle Size in numeric form      \r\n--                  @VType         = Vehilce Type in numeric form  \r\n--                  @Comment       = Commment\r\n--                  @PostMode      = A(default): Visible to all, P: Private Network\r\n--                  @ClientRefNum  = Client internal Reference Number \r\n--                  @ProductName   = Caller's Product Name\r\n--                  @PAttrib       = Posting Attribute in numeric form\r\n--                  @CreatedBy     = UserId of caller\r\n--                  @NetworkId     = When @PostMode is P then NetworkID otherwise 0\r\n--                  @OriginalToken = 0(default): If non zero then it will contain Token value from Legacy system \r\n--                 \r\n-- OUTPUT PARAMS  :\r\n-- STATUS RETURN  : \r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR    DATE       DESCRIPTION\r\n-- Hiro      2017.11.27 Initial Development\r\n-- Hiro      2018.04.11 Added Private Network Logic for Equipment \r\n-- Hiro      2018.07.17 Changed the CreatedOn as UTC Time\r\n-- Hiro      2018.09.07 OriginalToken input parameter will have Token from Legacy system if exist.\r\n-- Hiro      2018.09.12 Posting Status PStatus has to be Open (O)\r\n-- Hiro      2018.09.12 Ignore Legacy Posting from Secondary (livelead) matching \r\n-- Hiren     2019.06.03 Removing attribute based filtering from match\r\n-- Vevian\t 2019.08.09\tLLSIM-3111: Implement Global exclude logic in Matching process\r\n-- Nesrin    2019.12.17 LLSIM-3730: Update the stored procedure to match the load with equipment postings with Corridor search enabled\r\n--------------------------------------------------------------------------\r\n--SET NOCOUNT ON\r\n\r\n--DECLARE @MemMatchTable dbo.MatchTable\r\nDECLARE @MemMatchTable TABLE (\r\n    [LCustCd] [varchar](10) NOT NULL,\r\n\t[LToken] [int] NULL,\r\n\t[EToken] [int] NULL,\r\n\t[ECustCd] [varchar](10) NULL,\r\n\t[LeadType] [char](1) NULL,\r\n\t[Corridor] [char](1) NULL,\r\n\t[OriginalToken] [int] NULL,\r\n\t[SrceLong] [float] NULL,\r\n\t[SrceLat] [float] NULL,\r\n\t[SrceRadius] [int] NULL,\r\n\t[DestLong] [float] NULL,\r\n\t[DestLat] [float] NULL,\r\n\t[DestRadius] [int] NULL,\r\n\t[CreatedOn] [datetime] NULL,\r\n\t[CreatedBy] [varchar](30) NULL\r\n);\r\n\r\nDECLARE @fCosSrceLat     float\r\nDECLARE @fSinSrceLat     float\r\nDECLARE @fCosDestLat     float\r\nDECLARE @fSinDestLat     float\r\nDECLARE @fPo2            float\r\n\r\nDECLARE @GetDate       datetime  \r\nSET @GetDate           = GETUTCDATE()\r\n\r\nDECLARE\t@SecondaryMatch\tchar(1) = 'S'\r\nDECLARE\t@PrimaryMatch\tchar(1) = 'P'\r\n\r\nDECLARE @AllVSize       int = 15 -- Full Truckload, 3/4 Truckload, Half Truckload, 1/4 Truckload\r\n-----------------------------------------------------------------------------------------------\r\n-- Setup constant values for range calculations -- revised 10/27/99 JAM\r\n-----------------------------------------------------------------------------------------------\r\nSET @fPo2        = 90.0  --DEGREES(pi()/2)\r\n\r\nSET @fCosSrceLat = cos(radians(@fPo2-@SrceLat))\r\nSET @fSinSrceLat = sin(radians(@fPo2-@SrceLat))\r\nSET @fCosDestLat = cos(radians(@fPo2-@DestLat))\r\nSET @fSinDestLat = sin(radians(@fPo2-@DestLat))\r\n\r\n\r\n\r\n-----------------------------------------------------------------------------------------------\r\n-- If EquipToken is not 0 then retrieve the posting information from database\r\n-----------------------------------------------------------------------------------------------\r\nIF (@LoadToken <> 0)\r\nBEGIN\r\n    SELECT\r\n      @CustCd        = CustCd\r\n     ,@UserID        = CreatedBy     \r\n                                 \r\n     ,@SrceID        = SrceID     \r\n     ,@SrceSt        = SrceSt     \r\n     ,@SrceLong      = SrceLong   \r\n     ,@SrceLat       = SrceLat    \r\n     ,@SrceCountry   = SrceCountry\r\n     ,@SrceRadius    = SrceRadius \r\n                                 \r\n     ,@DestID        = DestID     \r\n     ,@DestSt        = DestSt     \r\n     ,@DestLong      = DestLong   \r\n     ,@DestLat       = DestLat    \r\n     ,@DestCountry   = DestCountry\r\n     ,@DestRadius    = DestRadius \r\n                                 \r\n     ,@DateAvail     = DateAvail  \r\n     ,@VSize         = VSize      \r\n     ,@VType         = VType      \r\n     ,@PAttrib       = PAttrib      \r\n                                 \r\n     ,@PostMode      = PostMode   \r\n     ,@NetworkId     = NetworkId   \r\n     ,@OriginalToken = OriginalToken   \r\n\r\n    FROM dbo.LoadPosting\r\n    WHERE Token = @LoadToken\r\nEND \r\n\r\n-----------------------------------------------------------------------------------------------\r\n-- If equip and load are at the same point, and not at zero longitude, \r\n-- THEN nudge the destination just a little so the math doesn't blow up (divide by zero).\r\n-----------------------------------------------------------------------------------------------\r\nIF ( (@SrceLong = @DestLong) AND \r\n     (@SrceLat  = @DestLat ) AND \r\n     (@SrceLong <> 0.0       )\r\n   )\r\n   BEGIN\r\n      SET @DestLong = @DestLong + 0.0001\r\n      SET @DestLat  = @DestLat  + 0.0001\r\n   END\r\n\r\n-----------------------------------------------------------------------------------------------\r\n-- PART 0 If OriginalToken is 0 then it was created by Platform user, otherwise Posting came from Legacy system\r\n-----------------------------------------------------------------------------------------------\r\nIF (@OriginalToken = 0)     \r\n    BEGIN\r\n\r\n    -----------------------------------------------------------------------------------------------\r\n    -- PART 1 Insert Load matches for my posting\r\n    -----------------------------------------------------------------------------------------------\r\n    \r\n    -----------------------------------------------------------------------------------------------\r\n    --  Broker MATCH First - match equipment for my load\r\n    -----------------------------------------------------------------------------------------------\r\n        INSERT INTO @MemMatchTable\r\n    \t (\r\n    \t\tLCustCd,\r\n\t\t\tLToken,\r\n\t\t\tEToken,\r\n\t\t\tECustCd,\r\n\t\t\tLeadType,\r\n\t\t\tCorridor,\r\n\t\t\tOriginalToken,\r\n\t\t\tSrceLong,\r\n\t\t\tSrceLat,\r\n\t\t\tSrceRadius,\r\n\t\t\tDestLong,\r\n\t\t\tDestLat,\r\n\t\t\tDestRadius,\r\n\t\t\tCreatedOn,\r\n    \t\tCreatedBy\r\n    \t)\r\n        SELECT @CustCd\r\n              ,@LoadToken\r\n              ,e.Token\r\n\t\t\t  ,e.CustCd\r\n    \t\t  ,@PrimaryMatch\r\n\t\t\t  ,e.Corridor\r\n\t\t\t  ,e.OriginalToken\r\n\t\t\t  ,e.SrceLong\r\n\t\t\t  ,e.SrceLat\r\n\t\t\t  ,e.SrceRadius\r\n\t\t\t  ,e.DestLong\r\n\t\t\t  ,e.DestLat\r\n\t\t\t  ,e.DestRadius\r\n\t\t\t  ,@GetDate\r\n              ,@UserID\r\n          FROM dbo.EquipmentPosting e \r\n    \r\n          -----------------------------------------------------------\r\n          -- Common lead filtering\r\n          -----------------------------------------------------------\r\n                 -- Available date matches\r\n          WHERE (e.DateAvail >= @DateAvail)\r\n    \r\n            -- Vehicle size matches (Mask out only the first two bits - no corridor bit)\r\n            AND ((@VSize & e.VSize & @AllVSize) > 0) \r\n        \r\n            -- Vechicle Type match\r\n            AND ((@VType & e.VType) > 0) \r\n    \r\n            -- Posting Attribute match (Broker)\r\n\t\t\t--Commented by Hiren \r\n            --AND (@PAttrib = 0 OR ((@PAttrib & e.PAttrib) >= @PAttrib))\r\n    \r\n            -- Country Border restriction conditions for equipment\r\n            AND (    \r\n                       e.SrceCountry = @SrceCountry   AND\r\n                       e.DestCountry = @DestCountry \r\n                ) -- .... END of country border closing tests\r\n           \r\n           -- Ignore the Removed posting.\r\n           AND (e.DeletedOn IS NULL)\r\n    \r\n           --Check if Equipment Posting is Private Network \r\n           AND (e.PostMode = 'A' OR (EXISTS(SELECT 'X' FROM dbo.NetworkMembers \r\n                                                    WHERE NetworkId = e.NetworkId \r\n                                                    AND MemberCustCD = @CustCd)))\r\n     \r\n           --Check if Load Posting is Private Network \r\n           AND (@PostMode = 'A' OR (EXISTS(SELECT 'X' FROM dbo.NetworkMembers \r\n                                                    WHERE NetworkId = @NetworkId \r\n                                                    AND MemberCustCD = e.CustCd)))\r\n           -- Posting Status has to be Open\r\n           AND (e.PStatus = 'O')\r\n\r\n\t\t   \r\n\r\n    END -- End @OriginalToken\r\n\r\n\tINSERT INTO dbo.LoadLead\r\n    \t (\r\n    \t [CustCd] \r\n    \t,[LToken]\r\n    \t,[EToken] \r\n    \t,[CreatedOn]\r\n    \t,[CreatedBy]\r\n    \t,[LeadType]\r\n    \t)\r\n        SELECT @CustCd\r\n              ,@LoadToken\r\n              ,e.EToken\r\n              ,@GetDate\r\n              ,@UserID\r\n    \t\t  ,@PrimaryMatch\r\n          FROM @MemMatchTable e \r\n\t\t  WHERE\r\n\t-- Source Point Conditions\r\n               (  (@SrceLong <> 0.0 AND @SrceLong = e.SrceLong AND @SrceLat = e.SrceLat) \r\n                  OR\r\n                  (@SrceLong <> 0.0 AND  @SrceRadius >= dbo.udf_GetDistance( @SrceLat, @SrceLong, e.SrceLat, e.SrceLong)\r\n                  )       \r\n               )\r\n    \r\n           --Destination Point conditions\r\n           AND (  (@DestLong <> 0.0 AND @DestLong = e.DestLong AND @DestLat=e.DestLat) \r\n                  OR\r\n                  (@DestLong <> 0.0 AND @DestRadius >= dbo.udf_GetDistance( @DestLat, @DestLong, e.DestLat, e.DestLong)\r\n                  )\r\n                )\r\n\t\t   -- Exclude matches from Globally-Excluded customers\r\n\t\t   AND (e.ECustCd NOT IN (SELECT CustCd FROM dbo.AccountInMem WHERE GlobalExcluded = 1))\r\n-----------------------------------------------------------------------------------------------\r\n-- PART 2a Insert Load matches for broker load posting\r\n-- ONLY DO THIS PART IF the CustCd is NOT in the GLOBAL excludes. -- Check once here\r\n--                      This will save in inserts and filtering later in getleads\r\n-----------------------------------------------------------------------------------------------\r\nIF (@GlobalExclude = 0)\r\n   BEGIN\r\n     INSERT INTO dbo.EquipmentLead \r\n\t(\r\n\t [CustCd] \r\n\t,[LToken]\r\n\t,[EToken] \r\n\t,[CreatedOn]\r\n\t,[CreatedBy]\r\n\t,[LeadType]\r\n\t)\r\n     SELECT e.ECustCd\r\n           ,@LoadToken\r\n           ,e.EToken\r\n           ,@GetDate\r\n\t\t   ,@UserID\r\n\t\t   ,@SecondaryMatch\r\n      FROM @MemMatchTable e \r\n      \r\n      -----------------------------------------------------------\r\n      -- Common lead filtering\r\n      -----------------------------------------------------------\r\n             -- Available date matches\r\n      WHERE (e.Corridor = 'R') \r\n\r\n       -- Source Point Conditions\r\n       AND (  (e.SrceLong <> 0.0 AND @SrceLong = e.SrceLong AND @SrceLat=e.SrceLat)\r\n              OR\r\n              (e.SrceLong <> 0.0 AND  e.SrceRadius >=  dbo.udf_GetDistance( @SrceLat, @SrceLong, e.SrceLat, e.SrceLong)\r\n              )     \r\n            )\r\n\r\n        -- Destination Point conditions\r\n       AND (  (e.DestLong <> 0.0 AND @DestLong = e.DestLong AND @DestLat = e.DestLat)\r\n              OR\r\n              (e.DestLong <> 0.0 AND e.DestRadius >= dbo.udf_GetDistance( @DestLat, @DestLong, e.DestLat, e.DestLong)\r\n              )\r\n            )\r\n\r\n       -- Ignore Legacy Posting from Secondary (livelead) matching \r\n       AND (e.OriginalToken = 0)\r\n   END\r\n\r\n   -----------------------------------------------------------------------------------------------\r\n-- PART 2b Insert Load matches for broker load posting with the equipment postings that have corridor search selected\r\n-- ONLY DO THIS PART IF the CustCd is NOT in the GLOBAL excludes. -- Check once here\r\n--                      This will save in inserts and filtering later in getleads\r\n-----------------------------------------------------------------------------------------------\r\nIF (@GlobalExclude = 0)\r\n   BEGIN\r\n     INSERT INTO dbo.EquipmentLead \r\n\t(\r\n\t [CustCd] \r\n\t,[LToken]\r\n\t,[EToken] \r\n\t,[CreatedOn]\r\n\t,[CreatedBy]\r\n\t,[LeadType]\r\n\t)\r\n     SELECT e.ECustCd\r\n           ,@LoadToken\r\n           ,e.EToken\r\n           ,@GetDate\r\n\t\t   ,@UserID\r\n\t\t   ,@SecondaryMatch\r\n      FROM @MemMatchTable e INNER JOIN [dbo].[EquipmentPostingCorridor] ec\r\n\t\tON e.EToken = ec.Token\r\n      \r\n      -----------------------------------------------------------\r\n      -- Common lead filtering\r\n      -----------------------------------------------------------\r\n             -- Available date matches\r\n      WHERE (e.Corridor = 'C') \r\n\t    \r\n       -- Source Point Conditions\r\n   \r\n          AND (  (ec.uABx*( @DestLong - @SrceLong)  +  ec.uABy*( @DestLat - @SrceLat)  ) > 0  )\r\n\t\t\t\r\n            \r\n            AND (  --  GEOGRAPHIC CONDITIONS ... one of 4 must be satisfied:  All recoded 2/28/2001 JAM\r\n                   --    1a) {in previous INSERT} Load source in truck source Range Circle AND LDest in truck's dest Range Circle    OR \r\n                   --    1b) Load source in truck source Range Circle AND LDest in truck's corridor AND Load going in same general direction as truck          OR\r\n                   --    2a) LSource in truck's Corridor AND LDest in Truck's dest Range Circle AND Load going in same general direction as truck      OR\r\n                   --    2b) LSource in truck's Corridor AND LDest in truck's corridor AND Load going in general direction as truck\r\n                   --        Changed 2-25-01 JAM\r\n                   (    (  (e.SrceLong <> 0.0 AND @SrceLong = e.SrceLong AND @SrceLat=e.SrceLat)\r\n\t\t\t\t\t\t  OR\r\n\t\t\t\t\t\t  (e.SrceLong <> 0.0 AND  e.SrceRadius >=  dbo.udf_GetDistance( @SrceLat, @SrceLong, e.SrceLat, e.SrceLong)\r\n\t\t\t\t\t\t  )     \r\n\t\t\t\t\t\t)\r\n\r\n\t\t\t\t\t-- Destination Point conditions\r\n\t\t\t\t   AND (  (e.DestLong <> 0.0 AND @DestLong = e.DestLong AND @DestLat = e.DestLat)\r\n\t\t\t\t\t\t  OR\r\n\t\t\t\t\t\t  (e.DestLong <> 0.0 AND e.DestRadius >= dbo.udf_GetDistance( @DestLat, @DestLong, e.DestLat, e.DestLong)\r\n\t\t\t\t\t\t  )\r\n\t\t\t\t\t\t)\r\n\t\t\t\t\t)\r\n\t\t\t\tOR\r\n                   ( --  1b  condition: \r\n                     -- Load source is in truck source Range Circle AND destination is in truck's dest Range Circles respectively\r\n                        \r\n                       (  -- 1b i Load source in truck source Range Circle \r\n                          (e.SrceLat <> 0.0 AND @SrceLong = e.SrceLong AND @SrceLat = e.SrceLat) \r\n                          OR\r\n                          (e.SrceLat <> 0.0 AND e.SrceRadius >= dbo.udf_GetDistance( @SrceLat, @SrceLong, e.SrceLat, e.SrceLong)                              \r\n                           )\r\n                        ) -- END of 1b i conditions: source point conditions.\r\n                         \r\n                        AND\r\n                        ( -- 1b ii condition:  LDest in truck's corridor\r\n                           (  --  We are testing one load, and all truck corridors.                                --  Load source is at Long= @pfSrceLong and Lat= @pfSrceLat and Load Dest is at: Long= @pfDestLong and Lat= @pfDestLat\r\n                              --  Is the load DESTINATION in the truck corridors?\r\n                             \r\n                              ( ( (ec.Nx - ec.Mx)*( @DestLat - ec.My) - ( @DestLong - ec.Mx)*(ec.Ny - ec.My)  ) >= 0.00)  -- load destination is left of MN\r\n                              AND\r\n                              ( ( (ec.Ox - ec.Nx)*( @DestLat - ec.Ny) - ( @DestLong - ec.Nx)*(ec.Oy - ec.Ny)  ) >= 0.00)  -- load destination is left of NO\r\n                              AND\r\n                              ( ( (ec.Px - ec.Ox)*( @DestLat - ec.Oy) - ( @DestLong - ec.Ox)*(ec.Py - ec.Oy)  ) >= 0.00)  -- load destination is left of OP\r\n                              AND\r\n                              ( ( (ec.Mx - ec.Px)*( @DestLat - ec.Py) - ( @DestLong - ec.Px)*(ec.My - ec.Py)  ) >= 0.00)  -- load destination is left of PM\r\n                           ) -- .. END of destination corridor conditions\r\n                         \r\n                        ) --. END of 1b ii condition\r\n                   ) --......... END of 1b conditions.\r\n                         \r\n                   OR\r\n                   ( -- 2  2a Load source point in corridor AND LDest in Truck's dest Range Circle\r\n                        ( -- 2a i. Load source point in corridor \r\n                          --  We are testing one load, and all truck corridors.  \r\n                          --  Load source is at Long= @pfSrceLong and Lat= @pfSrceLat and Load Dest is at: Long= @pfDestLong and Lat= @pfDestLat\r\n                         \r\n                          --  Is the load SOURCE point in the corridor?\r\n                          ( ( (ec.Nx - ec.Mx)*( @SrceLat - ec.My) - ( @SrceLong - ec.Mx)*(ec.Ny - ec.My)  ) >= 0.00)  -- load source is left of MN\r\n                          AND\r\n                          ( ( (ec.Ox - ec.Nx)*( @SrceLat - ec.Ny) - ( @SrceLong - ec.Nx)*(ec.Oy - ec.Ny)  ) >= 0.00)  -- load source is left of NO\r\n                          AND\r\n                          ( ( (ec.Px - ec.Ox)*( @SrceLat - ec.Oy) - ( @SrceLong - ec.Ox)*(ec.Py - ec.Oy)  ) >= 0.00)  -- load source is left of OP\r\n                          AND\r\n                          ( ( (ec.Mx - ec.Px)*( @SrceLat - ec.Py) - ( @SrceLong - ec.Px)*(ec.My - ec.Py)  ) >= 0.00)  -- load source is left of PM\r\n                        )\r\n                        \r\n                        AND\r\n                        ( -- EITHER 2a ii or 2b ii conditions.\r\n                          (  -- 2a ii.  Load dest in corridor also.\r\n                             --  Is the load DESTINATION in the corridor?\r\n                             ( ( (ec.Nx - ec.Mx)*( @DestLat - ec.My) - ( @DestLong - ec.Mx)*(ec.Ny - ec.My)  ) >= 0.00)  -- load destination is left of MN\r\n                             AND\r\n                             ( ( (ec.Ox - ec.Nx)*( @DestLat - ec.Ny) - ( @DestLong - ec.Nx)*(ec.Oy - ec.Ny)  ) >= 0.00)  -- load destination is left of NO\r\n                             AND\r\n                             ( ( (ec.Px - ec.Ox)*( @DestLat - ec.Oy) - ( @DestLong - ec.Ox)*(ec.Py - ec.Oy)  ) >= 0.00)  -- load destination is left of OP\r\n                             AND\r\n                             ( ( (ec.Mx - ec.Px)*( @DestLat - ec.Py) - ( @DestLong - ec.Px)*(ec.My - ec.Py)  ) >= 0.00)  -- load destination is left of PM\r\n                          )  -- END of 2a\r\n                                \r\n                          OR\r\n                          (  -- 2b ii.  Load dest is in the Truck's destination range circle.\r\n                             (e.DestLat <> 0.0 AND  @DestLong=e.DestLong AND  @DestLat=e.DestLat) \r\n                             OR\r\n                             (e.DestLat <> 0.0 AND e.DestRadius >=  dbo.udf_GetDistance( @DestLat, @DestLong, e.DestLat, e.DestLong)\r\n                              )\r\n                            \r\n                           ) -- END of 2b ii\r\n                               \r\n                        ) --....END of either 2a ii or 2b ii\r\n                           \r\n                   ) --........END of 2 \r\n                    \r\n                )  --...........END of GEOGRAPHIC conditions\r\n       \r\n       -- Ignore Legacy Posting from Secondary (livelead) matching \r\n       AND (e.OriginalToken = 0)\r\n   END\r\n\r\nEND","parameters":[{"name":"LoadToken","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"CustCd","description":null,"mode":"IN","data_type":"varchar(10)","custom_fields":{}},{"name":"UserID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"SrceID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"SrceSt","description":null,"mode":"IN","data_type":"char(2)","custom_fields":{}},{"name":"SrceLong","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"SrceLat","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"SrceCountry","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"SrceRadius","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"DestID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"DestSt","description":null,"mode":"IN","data_type":"char(2)","custom_fields":{}},{"name":"DestLong","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"DestLat","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"DestCountry","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"DestRadius","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"DateAvail","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"VSize","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"VType","description":null,"mode":"IN","data_type":"bigint","custom_fields":{}},{"name":"PAttrib","description":null,"mode":"IN","data_type":"bigint","custom_fields":{}},{"name":"PostMode","description":null,"mode":"IN","data_type":"char(1)","custom_fields":{}},{"name":"GlobalExclude","description":null,"mode":"IN","data_type":"bit","custom_fields":{}},{"name":"NetworkId","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"OriginalToken","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
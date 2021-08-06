window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p301","name":"usp_MatchDATLoadPosting","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_MatchDATLoadPosting"},{"field":"Type","value":"Procedure"}],"script":"CREATE PROCEDURE [dbo].[usp_MatchDATLoadPosting] \r\n  @LoadToken    int\r\n ,@CustCd       varchar(10) = ''\r\n ,@UserID       int         = 0\r\n  \r\n ,@SrceID       int         = 0\r\n ,@SrceSt       char(2)     = ''\r\n ,@SrceLong     float       = ''\r\n ,@SrceLat      float       = ''\r\n ,@SrceCountry  int         = 0\r\n ,@SrceRadius   int         = 0\r\n\r\n ,@DestID       int         = 0\r\n ,@DestSt       char(2)     = ''\r\n ,@DestLong     float       = ''\r\n ,@DestLat      float       = ''\r\n ,@DestCountry  int         = 0\r\n ,@DestRadius   int         = 0\r\n\r\n ,@DateAvail    datetime    = NULL\r\n ,@VSize        int         = 0\r\n ,@VType        INT      = 0\r\n\r\n ,@GlobalExclude bit        = 0\r\n\r\nAS\r\nBEGIN\r\n\r\n--------------------------------------------------------------------------\r\n--PROCEDURE NAME : usp_MatchDATLoadPosting\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Perform Load Matching\r\n--\r\n-- CALLED BY      : LoadMatching Web API \r\n-- EXECUTION FREQUENCY : \r\n-- \r\n-- INPUT PARAMS   : @LoadToken    = Newly created Load Posting's Token\r\n--                  @CustCD       = Customer Code        \r\n--                  @DateAvail    = Availab\r\n--                  \r\n--                  @SrceID       = Source Point ID from Point table        \r\n--                  @SrceCity     = Source City\r\n--                  @SrceSt       = Source State      \r\n--                  @SrceLong     = Source Longitude      \r\n--                  @SrceLat      = Source Latitude       \r\n--                  @SrceRadius   = Source Radius    \r\n--                  \r\n--                  @DestID       = Destination City      \r\n--                  @DestCity     = Destination State          \r\n--                  @DestSt       = Destination Longitude      \r\n--                  @DestLong     = Destination Longitude       \r\n--                  @DestLat      = Destination Latitude       \r\n--                  @DestRadius   = Destination Radius\r\n--                  \r\n--                  @VSize        = Vehicle Size in numeric form      \r\n--                  @VType        = Vehilce Type in numeric form  \r\n--                  @Comment      = Commment\r\n--                  @CreatedBy    = UserId of caller\r\n--                 \r\n-- OUTPUT PARAMS  :\r\n-- STATUS RETURN  : \r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR    DATE       DESCRIPTION\r\n-- Hiro      2018.08.23 Initial Development\r\n-- Hiro      2018.09.14 Posting Status PStatus has to be Open (O)\r\n-- Hiro      2018.09.14 Ignore Legacy Posting from DAT matching \r\n-- Hiren     2019.06.03 Removing attribute based filtering from match\r\n--------------------------------------------------------------------------\r\n--SET NOCOUNT ON\r\n\r\nDECLARE @fCosSrceLat     float\r\nDECLARE @fSinSrceLat     float\r\nDECLARE @fCosDestLat     float\r\nDECLARE @fSinDestLat     float\r\nDECLARE @fPo2            float\r\n\r\nDECLARE @GetDate       datetime  \r\nSET @GetDate           = GETUTCDATE()\r\n\r\nDECLARE\t@SecondaryMatch\tchar(1) = 'S'\r\nDECLARE\t@PrimaryMatch\tchar(1) = 'P'\r\n\r\nDECLARE @AllVSize       int = 15 -- Full Truckload, 3/4 Truckload, Half Truckload, 1/4 Truckload\r\n       ,@PostMode       char(1)     = 'A' \r\n       ,@PAttrib        INT      = 0\r\n       ,@NetworkId      int         = 0 \r\n-----------------------------------------------------------------------------------------------\r\n-- Setup constant values for range calculations -- revised 10/27/99 JAM\r\n-----------------------------------------------------------------------------------------------\r\nSET @fPo2        = 90.0  --DEGREES(pi()/2)\r\n\r\nSET @fCosSrceLat = cos(radians(@fPo2-@SrceLat))\r\nSET @fSinSrceLat = sin(radians(@fPo2-@SrceLat))\r\nSET @fCosDestLat = cos(radians(@fPo2-@DestLat))\r\nSET @fSinDestLat = sin(radians(@fPo2-@DestLat))\r\n\r\n\r\n\r\n-----------------------------------------------------------------------------------------------\r\n-- If EquipToken is not 0 then retrieve the posting information from database\r\n-----------------------------------------------------------------------------------------------\r\nIF (@LoadToken <> 0)\r\nBEGIN\r\n    SELECT\r\n      @CustCd       = CustCd\r\n     ,@UserID       = CreatedBy     \r\n                                \r\n     ,@SrceID       = SrceID     \r\n     ,@SrceSt       = SrceSt     \r\n     ,@SrceLong     = SrceLong   \r\n     ,@SrceLat      = SrceLat    \r\n     ,@SrceCountry  = SrceCountry\r\n     ,@SrceRadius   = SrceRadius \r\n                                \r\n     ,@DestID       = DestID     \r\n     ,@DestSt       = DestSt     \r\n     ,@DestLong     = DestLong   \r\n     ,@DestLat      = DestLat    \r\n     ,@DestCountry  = DestCountry\r\n     ,@DestRadius   = DestRadius \r\n                                \r\n     ,@DateAvail    = DateAvail  \r\n     ,@VSize        = VSize      \r\n     ,@VType        = VType      \r\n\r\n    FROM dbo.DATLoadPosting\r\n    WHERE Token = @LoadToken\r\nEND \r\n\r\n-----------------------------------------------------------------------------------------------\r\n-- If equip and load are at the same point, and not at zero longitude, \r\n-- THEN nudge the destination just a little so the math doesn't blow up (divide by zero).\r\n-----------------------------------------------------------------------------------------------\r\nIF ( (@SrceLong = @DestLong) AND \r\n     (@SrceLat  = @DestLat ) AND \r\n     (@SrceLong <> 0.0       )\r\n   )\r\n   BEGIN\r\n      SET @DestLong = @DestLong + 0.0001\r\n      SET @DestLat  = @DestLat  + 0.0001\r\n   END\r\n\r\n-----------------------------------------------------------------------------------------------\r\n-- PART 1 Insert Load matches for broker load posting\r\n-- ONLY DO THIS PART IF the CustCd is NOT in the GLOBAL excludes. -- Check once here\r\n--                      This will save in inserts and filtering later in getleads\r\n-----------------------------------------------------------------------------------------------\r\nIF (@GlobalExclude = 0)\r\n   BEGIN\r\n     INSERT INTO dbo.DATEquipmentLead \r\n\t(\r\n\t [CustCd] \r\n\t,[EToken] \r\n\t,[LToken]\r\n\t,[CreatedOn]\r\n\t,[CreatedBy]\r\n\t,[LeadType]\r\n\t)\r\n     SELECT p.CustCd\r\n           ,p.Token\r\n           ,@LoadToken\r\n           ,@GetDate\r\n\t\t   ,@UserID\r\n\t\t   ,@SecondaryMatch\r\n      FROM dbo.EquipmentPosting p \r\n      \r\n      -----------------------------------------------------------\r\n      -- Common lead filtering\r\n      -----------------------------------------------------------\r\n             -- Available date matches\r\n      WHERE (@DateAvail >= p.DateAvail)\r\n\r\n        -- Vehicle size matches\r\n        AND ((@VSize & p.VSize & @AllVSize) > 0) \r\n    \r\n        -- Vechicle Type match\r\n        AND ((@VType & p.VType) > 0) \r\n\r\n        -- Posting Attribute match (Broker)\r\n\t\t--Commented by Hiren on 04Jun19\r\n        --AND (@PAttrib = 0 OR ((@PAttrib & p.PAttrib) >= @PAttrib))\r\n\r\n         -- Country Border restriction conditions for equipment\r\n        AND (    \r\n                   p.SrceCountry = @SrceCountry   AND\r\n                   p.DestCountry = @DestCountry \r\n            ) -- .... END of country border closing tests\r\n\r\n       -- Used the Removed column instead of Removed table.\r\n       AND (p.DeletedOn IS NULL)\r\n\r\n       -- Source Point Conditions\r\n       AND (  (p.SrceLong <> 0.0 AND @SrceLong = p.SrceLong AND @SrceLat=p.SrceLat)\r\n              OR\r\n              (p.SrceLong <> 0.0 AND  p.SrceRadius >=  dbo.udf_GetDistance( @SrceLat, @SrceLong, p.SrceLat, p.SrceLong)\r\n              )     \r\n            )\r\n\r\n       -- Destination Point conditions\r\n       AND (  (p.DestLong <> 0.0 AND @DestLong = p.DestLong AND @DestLat = p.DestLat)\r\n              OR\r\n              (p.DestLong <> 0.0 AND p.DestRadius >= dbo.udf_GetDistance( @DestLat, @DestLong, p.DestLat, p.DestLong)\r\n              )\r\n            )\r\n\r\n       -- Check if Equipment Posting is Private Network \r\n       AND (p.PostMode = 'A' OR (EXISTS(SELECT 'X' FROM dbo.NetworkMembers \r\n                                                WHERE NetworkId = p.NetworkId \r\n                                                AND MemberCustCD = @CustCd)))\r\n\r\n       -- Check if Load Posting is Private Network \r\n       AND (@PostMode = 'A' OR (EXISTS(SELECT 'X' FROM dbo.NetworkMembers \r\n                                                WHERE NetworkId = @NetworkId \r\n                                                AND MemberCustCD = p.CustCd)))\r\n       -- Posting Status has to be Open\r\n       AND (p.PStatus = 'O')\r\n\r\n       -- Ignore Legacy Posting from DAT matching \r\n       AND (p.OriginalToken = 0)\r\n   END\r\nEND","parameters":[{"name":"LoadToken","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"CustCd","description":null,"mode":"IN","data_type":"varchar(10)","custom_fields":{}},{"name":"UserID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"SrceID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"SrceSt","description":null,"mode":"IN","data_type":"char(2)","custom_fields":{}},{"name":"SrceLong","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"SrceLat","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"SrceCountry","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"SrceRadius","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"DestID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"DestSt","description":null,"mode":"IN","data_type":"char(2)","custom_fields":{}},{"name":"DestLong","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"DestLat","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"DestCountry","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"DestRadius","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"DateAvail","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}},{"name":"VSize","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"VType","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"GlobalExclude","description":null,"mode":"IN","data_type":"bit","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
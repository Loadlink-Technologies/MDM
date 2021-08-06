window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p208","name":"usp_CreateEquipmentPosting_test","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_CreateEquipmentPosting_test"},{"field":"Type","value":"Procedure"}],"script":"-- #2\r\nCREATE PROCEDURE [dbo].[usp_CreateEquipmentPosting_test]\r\n    @CustCD         varchar(10) ,\r\n    @DateAvail      date          = null, \r\n\r\n    @SrceID         int           = 0,\r\n    @SrceCity       varchar(50)   = '' ,\r\n    @SrceSt         varchar(2)    = '' ,\r\n    @SrceLong       float         = 0 , \r\n    @SrceLat        float         = 0 , \r\n    --\t@SrceCoord      geography     = 0 , -- Note: The type 'sys.geography' is not supported with natively compiled modules.\r\n    @SrceRadius     int           = 0 ,\r\n\r\n    @DestID         int           = 0,\r\n    @DestCity       varchar(50)   = '' ,\r\n    @DestSt         varchar(2)    = '' ,\r\n    @DestLong       float         = 0 , \r\n    @DestLat        float         = 0 , \r\n    --\t@DestCoord      geography     = 0 , -- Note: The type 'sys.geography' is not supported with natively compiled modules.\r\n    @DestRadius     int           = 0 ,\r\n\r\n    @VSize          INT        = 0 ,\r\n    @VType          int           = 0 ,\r\n    @Comment        varchar(4096) = '' ,\r\n    @PostMode       char(1)       = 'A' ,\r\n    @ClientRefNum   varchar(256)  = '' ,\r\n    @ProductName    varchar(25)   = '' ,\r\n    @PAttrib        INT        = 0 ,\r\n    @CreatedBy      int           = 0 ,\r\n    @NetworkId      int           = 0 ,\r\n    @Corridor       char(1)       = 'R' ,  -- Default is R (Radius), C for Corridor  \r\n    @OriginalToken  int           = 0,\r\n\t@OrigPostDate\tdatetime2(7)  = null,\t-- new parameter for L to P integration job \r\n\t@CustomerTracking bit         = 0 -- New parameter for the carrier only\r\n\t \r\n\t\r\n--AS \r\n--BEGIN\r\nAS\r\nBEGIN\r\n\r\n--------------------------------------------------------------------------\r\n-- PROCEDURE NAME : usp_CreateEquipmentPosting\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Create Equipment Posting\r\n--\r\n-- CALLED BY      : LoadMatching Web API \r\n-- EXECUTION FREQUENCY : \r\n-- \r\n-- INPUT PARAMS   : @CustCD        = Customer Code        \r\n--                  @DateAvail     = Availab\r\n--                                 \r\n--                  @SrceID        = Source Point ID from Point table        \r\n--                  @SrceCity      = Source City\r\n--                  @SrceSt        = Source State      \r\n--                  @SrceLong      = Source Longitude      \r\n--                  @SrceLat       = Source Latitude       \r\n--                  @SrceRadius    = Source Radius    \r\n--                                 \r\n--                  @DestID        = Destination City      \r\n--                  @DestCity      = Destination State          \r\n--                  @DestSt        = Destination Longitude      \r\n--                  @DestLong      = Destination Longitude       \r\n--                  @DestLat       = Destination Latitude       \r\n--                  @DestRadius    = Destination Radius\r\n--                                 \r\n--                  @VSize         = Vehicle Size in numeric form      \r\n--                  @VType         = Vehilce Type in numeric form  \r\n--                  @Comment       = Commment\r\n--                  @PostMode      = A(default): Visible to all, P: Private Network\r\n--                  @ClientRefNum  = Client internal Reference Number \r\n--                  @ProductName   = Caller's Product Name\r\n--                  @PAttrib       = Posting Attribute in numeric form\r\n--                  @CreatedBy     = UserId of caller\r\n--                  @NetworkId     = When @PostMode is P then NetworkID otherwise 0\r\n--                  @Corridor      = R(default): Radius, C:Corridor mode\r\n--                  @OriginalToken = 0(default): If non zero then it will contain Token value from Legacy system \r\n--\t\t\t\t\t@OrigPostDate  = null : If null or empty, means platform posting - default it to getutcdate(). \r\n--\t\t\t\t\t\t\t\t\t\t\tIf it has a value, means coming from Legacy\r\n--                  @CustomerTracking=0(default) - value to identify if the carrier allows customer tracking for his posting\r\n--                 \r\n-- OUTPUT PARAMS  :\r\n-- STATUS RETURN  : \r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR    DATE       DESCRIPTION\r\n-- Hiro      2017.11.14 Initial Development\r\n-- Hiro      2018.04.11 Added Private Network Logic for Equipment and reworded the Corridor\r\n-- Hiro      2018.04.11 Removed Route column and input parameter\r\n-- Hiro      2018.09.07 OriginalToken input parameter will have Token from Legacy system if exist.\r\n-- Hiro      2018.10.25 Use the GETDATE() instead of GETUTCDATE() to check if Available Date is valid(Not past), LLSIM-1726\r\n-- Vevian\t 2019.02.11\tLLSIM-2245: New logic added to SPs that create new postings in Legacy which requires a small change in the output of this SP.\r\n--\t\t\t\t\t\t\t\t\trefer to JIRA ticket for full details.\r\n-- Vevian\t 2019.04.10\tLLSIM-2589: new optional parameter for legacy load postings posted date - Default to getutcdate()\r\n-- Nesrin    2019.11.12 LLSIM-3579: Update \"usp_CreateEquipment\" to save the value of the CustomerTracking field\r\n-- Nesrin    2019.12.17 LLSIM-3728: Update the stored procedures to populate the new table after creating the equipment posting\r\n--------------------------------------------------------------------------\r\n--SET NOCOUNT ON;\r\n\r\nDECLARE \r\n    @Error              int = 0\r\n   ,@RowCount           int = 0 \r\n\r\n   ,@SrceRadiusDefault  int = 0 \r\n   ,@DestRadiusDefault  int = 0\r\n   ,@Token              int = 0\r\n   ,@SrceCountry        int = 0 \r\n   ,@DestCountry        int = 0 \r\n\r\nBEGIN TRY\r\n    -------------------------------------------------------------------------------\r\n    -- Validate DateAvail passed in\r\n    -------------------------------------------------------------------------------\r\n    IF (@DateAvail IS NULL OR CONVERT(date,@DateAvail,112) < CONVERT(date,GETDATE(),112))\r\n       SET @DateAvail = CONVERT(date,GETDATE(),112)\r\n\r\n\t-------------------------------------------------------------------------------\r\n\t-- Original/Legacy PostDate default - if not coming from Legacy\r\n\t-------------------------------------------------------------------------------\r\n\tIF (@OrigPostDate = '' or @OrigPostDate IS NULL)\r\n\tBEGIN\r\n\t\tset @OrigPostDate = GETUTCDATE()\r\n\tEND\r\n\r\n    -------------------------------------------------------------------------------\r\n    -- Validate Source info\r\n    -------------------------------------------------------------------------------\r\n         \r\n    exec dbo.usp_GetValidLocation\r\n\t    @ID         = @SrceID  OUTPUT,\r\n\t    @City       = @SrceCity OUTPUT,\r\n\t    @StateCode  = @SrceSt OUTPUT,\r\n\t    @Country    = @SrceCountry OUTPUT,\r\n\t    @Long       = @SrceLong  OUTPUT, \r\n\t    @Lat        = @SrceLat  OUTPUT, \r\n\t    @Radius     = @SrceRadius  OUTPUT\r\n \r\n    -------------------------------------------------------------------------------\r\n    -- Validate Destination info\r\n    -------------------------------------------------------------------------------\r\n         \r\n    exec dbo.usp_GetValidLocation\r\n\t    @ID         = @DestID  OUTPUT,\r\n\t    @City       = @DestCity OUTPUT,\r\n\t    @StateCode  = @DestSt OUTPUT,\r\n\t    @Country    = @DestCountry OUTPUT,\r\n\t    @Long       = @DestLong  OUTPUT, \r\n\t    @Lat        = @DestLat  OUTPUT, \r\n\t    @Radius     = @DestRadius  OUTPUT\r\n\r\n    -------------------------------------------------------------------------------\r\n    INSERT INTO dbo.EquipmentPosting_test\r\n    (   \r\n        CustCd ,\r\n        DateAvail ,\r\n\r\n        SrceID ,\r\n        SrceCity ,\r\n        SrceSt ,\r\n        SrceCountry ,\r\n        SrceLong ,\r\n        SrceLat ,\r\n        SrceRadius ,\r\n\r\n        DestID ,\r\n        DestCity ,\r\n        DestSt ,\r\n        DestCountry ,\r\n        DestLong ,\r\n        DestLat ,\r\n        DestRadius ,\r\n\r\n        VSize ,\r\n        VType ,\r\n        Comment ,\r\n        PostMode ,\r\n        ClientRefNum ,\r\n        ProductName ,\r\n        PAttrib ,\r\n        CreatedBy ,\r\n        NetworkId ,\r\n        Corridor ,\r\n        OriginalToken,\r\n\t\tCreatedOn,\r\n\t\tCustomerTracking\r\n    )\r\n    VALUES        \r\n    (\r\n        @CustCd ,        \r\n        @DateAvail, \r\n\r\n        @SrceID ,         \r\n        @SrceCity ,\r\n        @SrceSt ,\r\n        @SrceCountry ,\r\n        @SrceLong , \r\n        @SrceLat  , \r\n        @SrceRadius ,\r\n\r\n        @DestID ,         \r\n        @DestCity ,\r\n        @DestSt ,\r\n        @DestCountry ,\r\n        @DestLong , \r\n        @DestLat , \r\n        @DestRadius ,\r\n\r\n        @VSize ,\r\n        @VType ,\r\n        @Comment ,\r\n        @PostMode ,\r\n        @ClientRefNum ,\r\n        @ProductName ,\r\n        @PAttrib ,\r\n        @CreatedBy ,  \r\n        @NetworkId ,\r\n        @Corridor ,\r\n        @OriginalToken,\r\n\t\t@OrigPostDate,\r\n\t\t@CustomerTracking\r\n    )\r\n\r\n    SET @Token = SCOPE_IDENTITY()\r\n\tIF(@Corridor = 'C')\r\n\t BEGIN\r\n\t   exec [dbo].[usp_CreateEquipmentPostingCorridor] @Token, @SrceLong, @SrceLat, @SrceRadius, @DestLong, @DestLat, @DestRadius\r\n\t END\r\nEND TRY\r\nBEGIN CATCH\r\n    SET @Token = -1\r\n\r\nEND CATCH\r\n-- Commented this out because it is not needed and it breaks new Logic in LLNET (refer to JIRA ticket LLSIM-2245 for full details)\r\n--SELECT @Token       Token\r\n\r\nRETURN @Token\r\n\r\nEND","parameters":[{"name":"CustCD","description":null,"mode":"IN","data_type":"varchar(10)","custom_fields":{}},{"name":"DateAvail","description":null,"mode":"IN","data_type":"date","custom_fields":{}},{"name":"SrceID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"SrceCity","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"SrceSt","description":null,"mode":"IN","data_type":"varchar(2)","custom_fields":{}},{"name":"SrceLong","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"SrceLat","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"SrceRadius","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"DestID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"DestCity","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"DestSt","description":null,"mode":"IN","data_type":"varchar(2)","custom_fields":{}},{"name":"DestLong","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"DestLat","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"DestRadius","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"VSize","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"VType","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"Comment","description":null,"mode":"IN","data_type":"varchar(4096)","custom_fields":{}},{"name":"PostMode","description":null,"mode":"IN","data_type":"char(1)","custom_fields":{}},{"name":"ClientRefNum","description":null,"mode":"IN","data_type":"varchar(256)","custom_fields":{}},{"name":"ProductName","description":null,"mode":"IN","data_type":"varchar(25)","custom_fields":{}},{"name":"PAttrib","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"CreatedBy","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"NetworkId","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"Corridor","description":null,"mode":"IN","data_type":"char(1)","custom_fields":{}},{"name":"OriginalToken","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"OrigPostDate","description":null,"mode":"IN","data_type":"datetime2(7)","custom_fields":{}},{"name":"CustomerTracking","description":null,"mode":"IN","data_type":"bit","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
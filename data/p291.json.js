window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p291","name":"usp_GetUSCarrier","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_GetUSCarrier"},{"field":"Type","value":"Procedure"}],"script":"CREATE PROCEDURE [dbo].[usp_GetUSCarrier] \r\n  @UserID      INT \r\n ,@SrceSt      VARCHAR(300) = ''\r\n ,@SrceCity    VARCHAR(50) = ''\r\n ,@SrceRadius  INT = 0    \r\n ,@DestSt      VARCHAR(300) = ''\r\n ,@DestCity    VARCHAR(50) = ''\r\n ,@DestRadius  INT = 0        \r\n ,@VType       INT = 0        \r\n ,@VSize       INT = 0        \r\n ,@CompanyName VARCHAR(50) = ''\r\n ,@GetMexico   BIT = 0\r\n\r\n--------------------------------------------------------------------------\r\n--PROCEDURE NAME : usp_GetUSCarrier\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Get US(DAT) Carrier Search\r\n--\r\n-- CALLED BY      : LoadMatching Web API \r\n-- EXECUTION FREQUENCY : \r\n-- \r\n-- INPUT PARAMS   : @UserID             - Caller UserID\r\n--                  @SrceSt             - Source State/Prov\r\n--                  @SrceCity           - Source City\r\n--                  @SrceRadius         - Source Radius\r\n--                  @DestSt             - Destination State/Prov\r\n--                  @DestCity           - Destination City\r\n--                  @DestRadius         - Destination Radius\r\n--                  @VType              - Vehicle Type Code\r\n--                  @VSize              - Vehicle Size Code\r\n--                  @CompanyName        - Name of Company to search\r\n--                  @GetMexico          - Include Data from Mexico\r\n--                 \r\n-- OUTPUT PARAMS  :\r\n-- STATUS RETURN  : \r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR       DATE        DESCRIPTION\r\n-- Hiro         2018.08.27  Initial Development\r\n-- Hiro         2018.09.06  Added SubscriberType to identify: Link-P (Platform), Link-L (Legacy), DAT\r\n-- Hiro         2018.10.22  Fixed the issue with missing condition for Radius search and Region Posting.\r\n-- Jatinder\t\t2019.03.15  LLSIM-1392 -In US Carrier Search, the results display State, City\r\n-- Vevian\t\t2020.04.13\tLLSIM-4061: Code optimization after converting memory-optimized tables to Desk-based tables\r\n--------------------------------------------------------------------------\r\nAS\r\nSET NOCOUNT ON\r\n\r\nDECLARE @SrcePointNotSet BIT = 0\r\n      , @DestPointNotSet BIT = 0\r\n      , @MaxRecords      INT = 5000\r\n      , @SrceLong        DECIMAL(9,5) = 0\r\n      , @SrceLat         DECIMAL(9,5) = 0\r\n      , @DestLong        DECIMAL(9,5) = 0\r\n      , @DestLat         DECIMAL(9,5) = 0\r\n      , @JustCompany     BIT = 0\r\n      , @ServerDate      DATETIME\r\n      , @CustCD          VARCHAR(10) = ''\r\n\r\nDECLARE @SrceTotalUsRegion  BIGINT\r\n      , @SrceTotalCDNRegion BIGINT\r\n      , @DestTotalUsRegion  BIGINT\r\n      , @DestTotalCDNRegion BIGINT\r\n\r\nIF @SrceRadius  IS NULL OR @SrceRadius < 0\r\n   SET @SrceRadius  = 0\r\nIF @DestRadius IS NULL OR @DestRadius < 0\r\n   SET @DestRadius = 0\r\nif @CompanyName IS NULL \r\n   SET @CompanyName = ''\r\n\r\nSET @ServerDate = CONVERT(Varchar(10),GETUTCDATE(),126)\r\n\r\n---- Get the CustCd from Account Table for Now \r\nSET @CustCD = dbo.udf_GetCustCd (@UserId)\r\n\r\n-----------------------------------------------------------------------------------------------\r\n--** Source Location **--\r\nIF (@SrceSt IS NULL OR @SrceSt = '') \r\n    BEGIN\r\n      SET @SrcePointNotSet = 1\r\n      SET @SrceRadius = 0\r\n      SET @SrceCity   = ''\r\n      SET @SrceSt  = ''\r\n      SET @SrceLong   = 0\r\n      SET @SrceLat    = 0\r\n    END\r\nELSE\r\n    BEGIN \r\n      IF (@SrceCity IS NULL OR @SrceCity = '')         \r\n         BEGIN\r\n           SET @SrceLat  = 0.0 \r\n           SET @SrceLong = 0.0\r\n           SET @SrceCity = ''\r\n           SET @SrceRadius = 0  -- Search is by State\r\n\r\n           -- Check if Region Search is requested\r\n           IF (LEN(@SrceSt) >= 2)\r\n             BEGIN\r\n               EXEC dbo.usp_GetDATRegionCode @SrceSt, @SrceTotalUsRegion OUTPUT ,@SrceTotalCDNRegion OUTPUT\r\n             END\r\n         END\r\n      ELSE\r\n         BEGIN\r\n\t\t\tSET @SrceCity = UPPER(@SrceCity)\r\n\t\t\tSELECT @SrceLat = Lat, @SrceLong = Long\r\n\t\t\tFROM Mileage.dbo.Point \r\n            WHERE City = @SrceCity\r\n              AND StateCode = @SrceSt\r\n           IF ((@SrceLat  IS NULL OR @SrceLat  = 0.0) AND (@SrceLong IS NULL OR @SrceLong = 0.0))\r\n              BEGIN\r\n                SET @SrceCity = ''\r\n                SET @SrceLat  = 0.0\r\n                SET @SrceLong = 0.0\r\n                SET @SrceRadius = 0  -- Search is by State\r\n              END\r\n         END\r\n    END\r\n\r\n--** Destination Location **--\r\nIF (@DestSt IS NULL OR @DestSt = '') \r\n    BEGIN\r\n      SET @DestPointNotSet = 1\r\n      SET @DestRadius = 0\r\n      SET @DestCity   = ''\r\n      SET @DestSt  = ''\r\n      SET @DestLong   = 0\r\n      SET @DestLat    = 0\r\n    END\r\nELSE \r\n    BEGIN \r\n      IF (@DestCity IS NULL OR @DestCity = '')\r\n         BEGIN\r\n           SET @DestLat  = 0.0\r\n           SET @DestLong = 0.0\r\n           SET @DestCity = ''\r\n           SET @DestRadius = 0 -- Search is by State \r\n\r\n           -- Check if Region Search is requested\r\n           IF (LEN(@DestSt) >= 2)\r\n             BEGIN\r\n               EXEC dbo.usp_GetDATRegionCode @DestSt, @DestTotalUsRegion OUTPUT ,@DestTotalCDNRegion OUTPUT\r\n             END\r\n         END\r\n      ELSE\r\n         BEGIN\r\n\t\t\tSET @DestCity = UPPER(@DestCity)\r\n\t\t\tSELECT @DestLat  = Lat, @DestLong = Long\r\n\t\t\tFROM Mileage.dbo.Point \r\n            WHERE City      = @DestCity\r\n              AND StateCode = @DestSt\r\n           IF ((@DestLat  = 0.0 OR @DestLat  IS NULL) AND (@DestLong = 0.0 OR @DestLong IS NULL))\r\n              BEGIN\r\n                SET @DestCity = ''\r\n                SET @DestLat  = 0.0\r\n                SET @DestLong = 0.0\r\n                SET @DestRadius = 0 -- Search is by State\r\n              END\r\n         END\r\n    END\r\n\r\nIF (LEN(@CompanyName)>0 AND @SrcePointNotSet = 1 AND @DestPointNotSet = 1)\r\n   SET @JustCompany = 1\r\n-----------------------------------------------------------------------------------------------\r\n\r\nSET ROWCOUNT @MaxRecords -- set total number of rows to return \r\n\t          \r\nSELECT\r\n\t\tE.CustCd, \r\n\t\tE.Token,\r\n\t\tE.DateAvail,\r\n\t\tCASE \r\n\t\t\tWHEN E.SrceRegUS = 0 AND E.SrceRegCDN = 0 THEN \r\n\t\t\t\tE.SrceCity + ',' +   E.SrceSt \r\n\t\t\tWHEN E.SrceRegUS <> 0 AND E.SrceRegCdn = 0 THEN \r\n\t\t\t\tdbo.udf_RegionCodeToRegionList (E.SrceRegUS,1) \r\n\t\t\tWHEN E.SrceRegUS = 0 AND E.SrceRegCdn <> 0 THEN \r\n\t\t\t\tdbo.udf_RegionCodeToRegionList (E.SrceRegCDN,2) \r\n\t\t\tWHEN E.SrceRegUS <> 0 AND E.SrceRegCdn <> 0 THEN \r\n\t\t\t\tdbo.udf_RegionCodeToRegionList (E.SrceRegUS,1) + ',' +\r\n\t\t\t\tdbo.udf_RegionCodeToRegionList (E.SrceRegCDN,2) \r\n\t\t\tELSE ''\r\n\t\tEND SrceStateCity,\r\n\t\tCASE \r\n            WHEN E.DestRegUS = 0 AND E.DestRegCDN = 0 THEN \r\n                  E.DestCity + ',' + E.DestSt\r\n            WHEN E.DestRegUS <> 0 AND E.DestRegCDN = 0 THEN \r\n                dbo.udf_RegionCodeToRegionList (E.DestRegUS,1) \r\n            WHEN E.DestRegUS = 0 AND E.DestRegCDN <> 0 THEN \r\n                dbo.udf_RegionCodeToRegionList (E.DestRegCDN,2) \r\n            WHEN E.DestRegUS <> 0 AND E.DestRegCDN <> 0 THEN \r\n                dbo.udf_RegionCodeToRegionList (E.DestRegUS,1) + ',' +\r\n                dbo.udf_RegionCodeToRegionList (E.DestRegCDN,2) \r\n            ELSE ''\r\n        END DestStateCity,\r\n\t\tISNULL(A.XMT_NAME,'NA') CompanyName ,\r\n\t\tE.CreatedOn PostDate,\r\n\t\tvs.Code VehicleSize,\t\t-- dbo.udf_VSizeToString(E.VSize,'E') VehicleSize ,\r\n\t\tdbo.udf_VTypeToString(E.VType) VehicleType ,\r\n\t\tE.Comment, \r\n\t\t'DAT' AS CustomerOf,\r\n\t\t-1 Equifax ,     \r\n\t\t-1 TCC ,\r\n\t\tISNULL(CAST(Idx.Analysis AS INTEGER),-1) TCUS ,\r\n\t\tIIF(Cn.EToken IS NOT NULL, 'Y', 'N') AS Contacted ,\r\n\t\tE.CreatedBy ,\r\n\t\t'DAT' SubscriberType \r\n\r\nFROM\tdbo.DATEquipmentPosting E \r\n\t\tLEFT JOIN dbo.DATCustomer A ON A.CustCD = E.CustCd\r\n\t\tLEFT JOIN dbo.Contacted Cn ON (\tCn.EToken   = E.Token AND  -- #1\r\n\t\t\t\t\t\t\t\t\t\tCn.LToken   = 0       AND \r\n\t\t\t\t\t\t\t\t\t\tCn.CustCd   = @CustCd AND \r\n\t\t\t\t\t\t\t\t\t\tCn.CnCustCd = E.CustCd)\r\n\t\tLEFT JOIN Finance.dbo.TransCredit  Idx on Idx.CustCD = A.Account_ID \r\n\t\tLEFT JOIN dbo.VehicleSize vs ON E.VSize = vs.Value AND vs.PostType = 'E'\r\n\r\nWHERE\t(E.DeletedOn IS NULL)\r\n\t\tAND (E.PStatus = 'O') -- Return only Open Posting\r\n\t\tAND (DateAvail >= @ServerDate)\r\n\t\tAND (@GetMexico = 1 OR (E.SrceSt <> 'MX' AND E.DestSt <> 'MX')) -- Exclude Mexico data if GetMexico is 0(Default)\r\n\t\tAND (@VType = 0 OR (@VType & E.VType) > 0)\r\n\t\tAND (@VSize = 0 OR (@VSize & E.VSize) > 0)\r\n\t\t--\t\tAND (A.Status = 1) -- In the future include Active Customer's Posting\r\n\t\tAND ((@JustCompany = 1 AND A.XMT_NAME like @CompanyName + '%') OR\r\n\t\t\t(@JustCompany = 0 AND ((@CompanyName = '' OR A.XMT_NAME like @CompanyName + '%')\r\n\t\t\tAND ((@SrcePointNotSet = 1) OR\r\n\t\t\t\t\t(@SrceTotalUsRegion > 0 AND ((@SrceTotalUsRegion & E.SrceRegUS) > 0)) OR\r\n\t\t\t\t\t(@SrceTotalCDNRegion > 0 AND ((@SrceTotalCDNRegion & E.SrceRegCDN) > 0)) OR\r\n\t\t\t\t\t(LEN(@SrceSt) > 2 AND (CHARINDEX(E.SrceSt,@SrceSt,1) > 0)) OR\r\n\t\t\t\t\t(@SrceSt = E.SrceSt AND @SrceCity  = '') OR\r\n\t\t\t\t\t(@SrceSt = E.SrceSt AND @SrceCity  = E.SrceCity AND @SrceRadius = 0) OR\r\n\t\t\t\t\t(@SrceRadius > 0 AND @SrceRadius >= dbo.udf_GetDistance(@SrceLat, @SrceLong, E.SrceLat, E.SrceLong))) \r\n\t\t\tAND ((@DestPointNotSet = 1) OR\r\n\t\t\t\t\t(@DestTotalUsRegion > 0 AND ((@DestTotalUsRegion & E.DestRegUS) > 0)) OR\r\n\t\t\t\t\t(@DestTotalCDNRegion > 0 AND ((@DestTotalCDNRegion & E.DestRegCDN) > 0)) OR\r\n\t\t\t\t\t(LEN(@DestSt) > 2 AND (CHARINDEX(E.DestSt,@DestSt,1) > 0)) OR\r\n\t\t\t\t\t(@DestSt = E.DestSt AND @DestCity = '') OR\r\n\t\t\t\t\t(@DestSt = E.DestSt AND @DestCity  = E.DestCity AND @DestRadius = 0) OR\r\n\t\t\t\t\t(@DestRadius > 0 AND E.DestID > 0 AND @DestRadius >= dbo.udf_GetDistance(@DestLat, @DestLong, E.DestLat, E.DestLong))))))\r\n\t\tAND (NOT EXISTS (SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = @CustCd  AND x.ExcludeCustCd = E.CustCd)) \r\n\t\tAND (NOT EXISTS (SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = E.CustCd AND x.ExcludeCustCd = @CustCd )) \r\n\r\nORDER BY PostDate DESC\r\n\r\nSET ROWCOUNT 0 -- reset","parameters":[{"name":"UserID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"SrceSt","description":null,"mode":"IN","data_type":"varchar(300)","custom_fields":{}},{"name":"SrceCity","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"SrceRadius","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"DestSt","description":null,"mode":"IN","data_type":"varchar(300)","custom_fields":{}},{"name":"DestCity","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"DestRadius","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"VType","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"VSize","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"CompanyName","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"GetMexico","description":null,"mode":"IN","data_type":"bit","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
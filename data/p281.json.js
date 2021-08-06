window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p281","name":"usp_GetMembers","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_GetMembers"},{"field":"Type","value":"Procedure"}],"script":"CREATE PROCEDURE [dbo].[usp_GetMembers] \r\n\t@CompanyName\tVARCHAR(50) = ''\r\n\t,@ProvSt\t\tCHAR(2) = ''\r\n\t,@City\t\t    VARCHAR(50) = ''\r\n\t,@Phone\t\t\tVARCHAR(15) = ''\r\n\t,@MemberType\tVARCHAR(10) = 'All'\r\n\t,@GetLinkUS\t\tBIT = 0\r\n\t,@ShowExcluded\tSmallInt = 0\r\n\t,@CustCd\t\tVARCHAR(10) = ''\r\n\r\n--------------------------------------------------------------------------\r\n-- PROCEDURE NAME : usp_GetMembers\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Get Member Search\r\n--\r\n-- CALLED BY      : Platform Web API \r\n-- INPUT PARAMS   : @CompanyName        - Name of Company/Member to search\r\n--                  @ProvSt\t\t\t\t- Member/Company State/Prov\r\n--\t\t\t\t\t@Phone\t\t\t\t- Member/Company Phone number\r\n--\t\t\t\t\t@MemberType\t\t\t- Member Type tp search (Broker, Carrier, or All)\r\n--                  @GetLinkUS          - Search both Link & US customers\r\n--\t\t\t\t\t@ShowExcluded\t\t- flag to show excluded members in the search result\r\n--\t\t\t\t\t@CustCd\t\t\t\t- CustCd of customer performing the member search\r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR\t\tDATE\t\tDESCRIPTION\r\n-- Vevian\t\t2018.07.14\tInitial Development\r\n-- Vevian\t\t2018.07.31\tChanged SP name from usp_GetMember to usp_GetMembers\r\n-- Vevian\t\t2018.08.01\t1) Added new parameter \"@ShowExcluded\" & \"@CustCd\"\r\n--\t\t\t\t\t\t\t2) Added new fields to the Select query (Excluded, DispatchNote)\r\n-- Vevian\t\t2018.08.02\tAdded logic for members that are both Carriers and Brokers (ProductType 'BC')\r\n-- Vevian\t\t2018.08.29\t@GetLinkUS is not used anymore since we have a new SP and API to return DAT/US members\r\n-- Vevian\t\t2018.10.25\tmake filtering by ProductType work in all cases (full - i.e: \"Carrier\", or 1 letter - i.e: \"C\")\r\n--\t\t\t\t\t\t\tbased on current values (U = Unknown, B = Broker, S = Shipper, F = Freight, C = Carrier, P = Private)\r\n-- Kruti\t\t2018.11.14  Strip the special character from phone numbers before comparing and do a like comparison. \r\n-- Kruti\t\t2018.11.15\tAdded City to search criteria.\r\n-- Rajesh\t\t2019.04.11\tChanging value of ShowExcluded (0=>Included, 1=> All, 2=>Exclude).\r\n-- Nesrin       2019.05.14  [LLSIM: 2661] Canceled accounts is displaying in the members search \r\n-- Nesrin       2019.11.08  [LLSIM: 3546] Display cancelled account and the Last connected date\r\n-- Nesrin       2020.02.11  [LLSIM-3937] Update GETMembers sp to display correct value of Equifax score\r\n--                                       If the value is 0 --> display as 0 instead of -1\r\n-- Vevian\t\t2020.04.08\tLLSIM-4061: Code optimization after converting memory-optimized tables to Desk-based tables\r\n--------------------------------------------------------------------------\r\nAS\r\nSET NOCOUNT ON\r\n\r\nDECLARE @MaxRecords\tINT = 5000;\r\nSET ROWCOUNT @MaxRecords\r\n \t\t     \r\nSELECT\r\n    A.CustCd, \r\n    A.AccountId,\r\n    ISNULL(A.CommonName,'NA') CompanyName,\r\n    A.Phone,\r\n    A.[SubscriberType] AS SType,\r\n\tISNULL((SELECT 1 FROM Exclude Exl WHERE Exl.ExcludeCustCd = A.CustCD AND Exl.CustCd = @CustCd), 0) AS Excluded,\r\n\tISNULL((SELECT DispatchNote FROM Member M WHERE M.MemberCustCd = A.CustCD AND M.CustCd = @CustCd), '') AS DispatchNote,\r\n    IIF(Idx.Equifax_PAYMNTINDX IS NULL, -1, Idx.Equifax_PAYMNTINDX) Equifax,     \r\n    ISNULL(CAST(Idx.TranscreditCA_Analysis AS INTEGER), -1) TCC,\r\n\tISNULL(CAST(Idx.Transcredit_Analysis AS INTEGER), -1) TCUS,\r\n\tA.StatusId, \r\n\tIIF(A.StatusId = 0, LastUsed, NULL) AS LastUsed\r\nFROM \r\n\tMain.dbo.Account A\r\n\t\tLEFT JOIN Finance.dbo.FinanceIndex Idx ON Idx.CustCD = A.CustCD \r\nWHERE \r\n\t(@CompanyName = '' OR A.CommonName LIKE @CompanyName + '%')\r\n\tAND (@ProvSt = '' OR A.MailingProvinceCode = @ProvSt)\r\n\tAND (@City = '' OR A.MailingCity = @City)\r\n\tAND (@Phone = '' OR dbo.udf_StripSpecialCharacters(A.Phone, '^0-9') LIKE dbo.udf_StripSpecialCharacters(@Phone, '^0-9') + '%' )\r\n\tAND (\r\n\t\t\t@MemberType = 'All' \r\n\t\t\tOR (A.[Type] = @MemberType OR SUBSTRING(@MemberType, 1, 1) = A.[Type])\t--full or 1 letter\r\n\t\t)\r\n\tAND (\r\n\t\t\t(@ShowExcluded = 0 \r\n\t\t\t\tAND NOT EXISTS (SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = @CustCd AND x.ExcludeCustCd = A.CustCd) \r\n\t\t\t) \r\n\t\t\tOR @ShowExcluded = 1\r\n\t\t\tOR (@ShowExcluded = 2 \r\n\t\t\t\tAND EXISTS (SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = @CustCd AND x.ExcludeCustCd = A.CustCd) \r\n\t\t\t)  \r\n\t\t)\t\t\t\r\nORDER BY \r\n\tA.CommonName DESC\r\n\r\nSET ROWCOUNT 0 -- reset","parameters":[{"name":"CompanyName","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"ProvSt","description":null,"mode":"IN","data_type":"char(2)","custom_fields":{}},{"name":"City","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"Phone","description":null,"mode":"IN","data_type":"varchar(15)","custom_fields":{}},{"name":"MemberType","description":null,"mode":"IN","data_type":"varchar(10)","custom_fields":{}},{"name":"GetLinkUS","description":null,"mode":"IN","data_type":"bit","custom_fields":{}},{"name":"ShowExcluded","description":null,"mode":"IN","data_type":"smallint","custom_fields":{}},{"name":"CustCd","description":null,"mode":"IN","data_type":"varchar(10)","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
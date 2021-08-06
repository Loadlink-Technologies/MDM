window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p275","name":"usp_GetLoadLeadsCount","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_GetLoadLeadsCount"},{"field":"Type","value":"Procedure"}],"script":"-- =============================================================================================================================\r\n\r\nCREATE PROCEDURE [dbo].[usp_GetLoadLeadsCount] \r\n  @UserID\tint         \r\n ,@LToken\tint = 0\r\n ,@GetDAT\tbit = 0\r\n\r\n--------------------------------------------------------------------------\r\n--PROCEDURE NAME : usp_GetLoadLeadsCount\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Get Load Leads count for the User\r\n--\r\n-- CALLED BY      : FREIGHTMATCHING Web API \r\n--\r\n-- INPUT PARAMS   : @UserID     - Caller UserID\r\n--                  @LToken     - Load Token is pass if retrieving the Leads Count for 1 Load Posting         \r\n--                  @GetDAT     - flag to include DAT Leads count or not (should not include DAT count if not subscribed to DAT feature)      \r\n--                 \r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR    DATE\t\t\tDESCRIPTION\r\n-- Vevian    2019.03.06     Initial Development\r\n-- Vevian\t 2019.03.06\t\tLLSIM-2419: return Leads count\r\n-- Vevian\t 2019.03.25\t\tUse UNION ALL instead of UNION\r\n--\t\t\t\t\t\t\t+ Exclude any leads with LeadType 'S' (this is only for live leads)\r\n-- Nesrin    2019.04.30     LLSIM-2629: USIT shows -FREIGHT MATCHING API Errors\r\n--                          If @GetDAT, the query is returning the parameters in different column names\r\n-- Nesrin   2020.02.27      LLSIM-3974: SP code changes \r\n-- Vevian   2020.02.27      Performance issue for LLW4 (Add nolock, drop temp table, Add leads capping)\r\n--------------------------------------------------------------------------\r\nAS\r\n\r\nDECLARE @CustCD Varchar(10) = ''\r\n\r\n-- Get the CustCd\r\nSELECT @CustCD = dbo.udf_GetCustCd (@UserId)\r\n\r\nSET NOCOUNT ON\r\n\r\nif (@GetDAT = 1)\r\n\tBEGIN\r\n\t\tSELECT LToken Token, SUM(LeadCount) LeadsCount FROM\r\n\t\t(\r\n\t\t\t-- LOAD LEADS\r\n\t\t\tSELECT\tL.Token LToken\r\n\t\t\t\t\t,(\tSELECT\t count(*)\r\n\t\t\t\t\t\tFROM\tdbo.LoadLead LL WITH(NOLOCK)\r\n\t\t\t\t\t\t\t\tINNER JOIN dbo.EquipmentPosting E WITH(NOLOCK) ON LL.EToken = E.Token\r\n\t\t\t\t\t\tWHERE\tLL.LToken = L.Token  \r\n\t\t\t\t\t\t\t\tAND (E.DeletedOn IS NULL)\r\n\t\t\t\t\t\t\t\tAND  E.PStatus = 'O' -- Open\r\n\t\t\t\t\t\t\t\tAND (NOT EXISTS ( SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = @CustCd  AND x.ExcludeCustCd = E.CustCd) ) \r\n\t\t\t\t\t\t\t\tAND (NOT EXISTS ( SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = E.CustCd AND x.ExcludeCustCd = @CustCd ) ) \r\n\t\t\t\t\t\t\t\t--AND LL.LeadType <> 'S' \r\n\t\t\t\t\t\t) LeadCount\r\n\r\n\t\t\tFROM\tdbo.LoadPosting L WITH(NOLOCK)\r\n\r\n\t\t\tWHERE\tL.CustCd = @CustCd\r\n\t\t\t\t\tAND (@LToken = 0 OR @LToken = L.Token)\r\n\t\t\t\t\tAND (L.DeletedOn IS NULL)\r\n\t\t\t\t\tAND  L.PStatus = 'O' -- Open\r\n\t\t\t\t\tAnd L.OriginalToken = 0\r\n\r\n\t\t\t\t\tUNION ALL\r\n\t \r\n\t\t\t-- DAT LOAD LEADS\r\n\t\t\tSELECT\tL.Token LToken\r\n\t\t\t\t\t,(\tSELECT\t count(*)\r\n\t\t\t\t\t\tFROM\tdbo.DATLoadLead LL WITH(NOLOCK)\r\n\t\t\t\t\t\t\t\tINNER JOIN dbo.DATEquipmentPosting E WITH(NOLOCK) ON LL.EToken = E.Token\r\n\t\t\t\t\t\tWHERE\tLL.LToken = L.Token  \r\n\t\t\t\t\t\t\t\tAND (E.DeletedOn IS NULL)\r\n\t\t\t\t\t\t\t\tAND (NOT EXISTS ( SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = @CustCd  AND x.ExcludeCustCd = E.CustCd) ) \r\n\t\t\t\t\t\t\t\tAND (NOT EXISTS ( SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = E.CustCd AND x.ExcludeCustCd = @CustCd ) ) \r\n\t\t\t\t\t\t\t\t--AND LL.LeadType <> 'S'\r\n\t\t\t\t\t\t) LeadCount\r\n\r\n\t\t\tFROM\tdbo.LoadPosting L WITH(NOLOCK)\r\n\r\n\t\t\tWHERE\tL.CustCd = @CustCd\r\n\t\t\t\t\tAND (@LToken = 0 OR @LToken = L.Token)\r\n\t\t\t\t\tAND (L.DeletedOn IS NULL)\r\n\t\t\t\t\tAND  L.PStatus = 'O' -- Open\r\n\t\t\t\t\tAnd L.OriginalToken = 0\r\n\r\n\t\t) A\r\n\t\tGROUP BY LToken\r\n\tEND\r\nELSE\r\n\tBEGIN\r\n\t\tSELECT\tL.Token Token\r\n\t\t\t\t,(\tSELECT\t count(*)\r\n\t\t\t\t\tFROM\tdbo.LoadLead LL WITH(NOLOCK)\r\n\t\t\t\t\t\t\tINNER JOIN dbo.EquipmentPosting E WITH(NOLOCK) ON LL.EToken = E.Token\r\n\t\t\t\t\tWHERE\tLL.LToken = L.Token  \r\n\t\t\t\t\t\t\tAND (E.DeletedOn IS NULL)\r\n\t\t\t\t\t\t\tAND  E.PStatus = 'O' -- Open\r\n\t\t\t\t\t\t\tAND (NOT EXISTS ( SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = @CustCd  AND x.ExcludeCustCd = E.CustCd) ) \r\n\t\t\t\t\t\t\tAND (NOT EXISTS ( SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = E.CustCd AND x.ExcludeCustCd = @CustCd ) )  \r\n\t\t\t\t\t\t\t--AND LL.LeadType <> 'S'\r\n\t\t\t\t\t) LeadsCount\r\n\r\n\t\tFROM\tdbo.LoadPosting L WITH(NOLOCK)\r\n\r\n\t\tWHERE\tL.CustCd = @CustCd\r\n\t\t\t\tAND (@LToken = 0 OR @LToken = L.Token)\r\n\t\t\t\tAND (L.DeletedOn IS NULL)\r\n\t\t\t\tAND  L.PStatus = 'O' -- Open\r\n\t\t\t\tAnd L.OriginalToken = 0\r\n\tEND","parameters":[{"name":"UserID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"LToken","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"GetDAT","description":null,"mode":"IN","data_type":"bit","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
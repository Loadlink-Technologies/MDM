window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p256","name":"usp_GetEquipmentLeadsCount","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_GetEquipmentLeadsCount"},{"field":"Type","value":"Procedure"}],"script":"-- =============================================================================================================================\r\n\r\nCREATE PROCEDURE [dbo].[usp_GetEquipmentLeadsCount] \r\n  @UserID\tint         \r\n ,@EToken\tint = 0\r\n ,@GetDAT\tbit = 0\r\n\r\n--------------------------------------------------------------------------\r\n--PROCEDURE NAME : usp_GetEquipmentLeadsCount\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Get Equipment Leads count for the User\r\n--\r\n-- CALLED BY      : FREIGHTMATCHING Web API \r\n--\r\n-- INPUT PARAMS   : @UserID     - Caller UserID\r\n--                  @EToken     - Equipment Token is pass if retrieving the Leads Count for 1 Load Posting         \r\n--                  @GetDAT     - flag to include DAT Leads count or not (should not include DAT count if not subscribed to DAT feature)      \r\n--                 \r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR    DATE\t\t\tDESCRIPTION\r\n-- Vevian    2019.03.06     Initial Development\r\n-- Vevian\t 2019.03.06\t\tLLSIM-2419: return Equipment count\r\n-- Vevian\t 2019.03.25\t\tUse UNION ALL instead of UNION\r\n--\t\t\t\t\t\t\t+ Exclude any leads with LeadType 'S' (this is only for live leads)\r\n-- Nesrin    2019.04.30     LLSIM-2629: USIT shows -FREIGHT MATCHING API Errors\r\n--                          If @GetDAT, the query is returning the parameters in different column names\r\n-- Nesrin   2020.02.27      LLSIM-3974: SP code changes \r\n-- Vevian   2020.02.27      Performance issue for LLW4 (Add nolock, drop temp table, Add leads capping)\r\n--------------------------------------------------------------------------\r\nAS\r\n\r\nDECLARE @CustCD Varchar(10) = ''\r\n\r\n-- Get the CustCd\r\nSELECT @CustCD = dbo.udf_GetCustCd (@UserId)\r\n\r\n\r\nSET NOCOUNT ON\r\n\r\nif (@GetDAT = 1)\r\n\tBEGIN\r\n\t\tSELECT\tEToken Token, SUM(LeadCount) LeadsCount FROM\r\n\t\t(\r\n\t\t\t-- EQUIPMENT LEADS\r\n\t\t\tSELECT\tE.Token EToken\r\n\t\t\t\t\t,(\tSELECT count(*)\r\n\t\t\t\t\t\tFROM\tdbo.EquipmentLead EL  \r\n\t\t\t\t\t\t\t\tINNER JOIN dbo.LoadPosting L   ON EL.LToken = L.Token\r\n\t\t\t\t\t\tWHERE\tEL.EToken = E.Token  \r\n\t\t\t\t\t\t\t\tAND (L.DeletedOn IS NULL)\r\n\t\t\t\t\t\t\t\tAND  L.PStatus = 'O' -- Open\r\n\t\t\t\t\t\t\t\tAND (NOT EXISTS ( SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = @CustCd  AND x.ExcludeCustCd = L.CustCd) ) \r\n\t\t\t\t\t\t\t\tAND (NOT EXISTS ( SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = L.CustCd AND x.ExcludeCustCd = @CustCd ) )  \r\n\t\t\t\t\t\t\t\t--AND EL.LeadType <> 'S'\r\n\t\t\t\t\t\t) LeadCount\r\n\r\n\t\t\tFROM\tdbo.EquipmentPosting E  \r\n\r\n\t\t\tWHERE\tE.CustCd = @CustCd\r\n\t\t\t\t\tAND (@EToken = 0 OR @EToken = E.Token)\r\n\t\t\t\t\tAND (E.DeletedOn IS NULL)\r\n\t\t\t\t\tAND  E.PStatus = 'O' -- Open\r\n\t\t\t\t\tAND E.OriginalToken = 0\r\n\t\t\tUNION ALL\r\n\r\n\t\t\t-- DAT EQUIPMENT LEADS\r\n\t\t\tSELECT\tE.Token EToken\r\n\t\t\t\t\t,(\tSELECT\tcount(*)\r\n\t\t\t\t\t\tFROM\tdbo.DATEquipmentLead EL  \r\n\t\t\t\t\t\t\t\tINNER JOIN dbo.DATLoadPosting L   ON EL.LToken = L.Token\r\n\t\t\t\t\t\tWHERE\tEL.EToken = E.Token  \r\n\t\t\t\t\t\t\t\tAND (L.DeletedOn IS NULL)\r\n\t\t\t\t\t\t\t\tAND (NOT EXISTS ( SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = @CustCd  AND x.ExcludeCustCd = L.CustCd) ) \r\n\t\t\t\t\t\t\t\tAND (NOT EXISTS ( SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = L.CustCd AND x.ExcludeCustCd = @CustCd ) ) \r\n\t\t\t\t\t\t\t\t--AND EL.LeadType <> 'S'\r\n\t\t\t\t\t\t) LeadCount\r\n\r\n\t\t\tFROM\tdbo.EquipmentPosting E \r\n\r\n\t\t\tWHERE\tE.CustCd = @CustCd\r\n\t\t\t\t\tAND (@EToken = 0 OR @EToken = E.Token)\r\n\t\t\t\t\tAND (E.DeletedOn IS NULL)\r\n\t\t\t\t\tAND  E.PStatus = 'O' -- Open\r\n\t\t\t\t\tAND E.OriginalToken = 0\r\n\r\n\t\t) A\r\n\t\tGROUP BY EToken\r\n\tEND\r\nELSE\r\n\tBEGIN\r\n\t\tSELECT\tE.Token Token\r\n\t\t\t\t,(\tSELECT\tcount(*)\r\n\t\t\t\t\tFROM\tdbo.EquipmentLead EL  \r\n\t\t\t\t\t\t\tINNER JOIN dbo.LoadPosting L   ON EL.LToken = L.Token\r\n\t\t\t\t\tWHERE\tEL.EToken = E.Token  \r\n\t\t\t\t\t\t\tAND (L.DeletedOn IS NULL)\r\n\t\t\t\t\t\t\tAND  L.PStatus = 'O' -- Open\r\n\t\t\t\t\t\t\tAND (NOT EXISTS ( SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = @CustCd  AND x.ExcludeCustCd = L.CustCd) ) \r\n\t\t\t\t\t\t\tAND (NOT EXISTS ( SELECT 'X' FROM Exclude x (NOLOCK) WHERE x.CustCd = L.CustCd AND x.ExcludeCustCd = @CustCd ) ) \r\n\t\t\t\t\t\t\t--AND EL.LeadType <> 'S' \r\n\t\t\t\t\t) LeadsCount\r\n\r\n\t\tFROM\tdbo.EquipmentPosting E \r\n\r\n\t\tWHERE\tE.CustCd = @CustCd\r\n\t\t\t\tAND (@EToken = 0 OR @EToken = E.Token)\r\n\t\t\t\tAND (E.DeletedOn IS NULL)\r\n\t\t\t\tAND  E.PStatus = 'O' -- Open\r\n\t\t\t\tAND E.OriginalToken = 0\r\n\r\n\tEND","parameters":[{"name":"UserID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"EToken","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"GetDAT","description":null,"mode":"IN","data_type":"bit","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
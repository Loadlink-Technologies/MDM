window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p287","name":"usp_GetPhoneNumbersFromComment","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_GetPhoneNumbersFromComment"},{"field":"Type","value":"Procedure"}],"script":"CREATE PROCEDURE [dbo].[usp_GetPhoneNumbersFromComment]\r\n\r\n --------------------------------------------------------------------------\r\n--FUNCTION NAME : usp_GetPhoneNumbersFromComment\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Get the phone number from the comment in Load & equipment postings tables\r\n--\r\n-- CALLED BY      : Report\r\n--\r\n-- INPUT PARAMS   :--\r\n\r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR    DATE\t\t\tDESCRIPTION\r\n-- Nesrin   2020.03.30      LLSIM-4067: Write query to find LLW4 accounts with phone numbers in the comments\r\n-- Nesrin    2020.04.14 LLSIM-4061: Script current Loadmatching DB and create a new one with no memory optimized tables\r\n--------------------------------------------------------------------------\r\n\r\nAS\r\n\r\nBEGIN\r\n\r\n\r\nSELECT *,IIF(\r\n\t\t\t\tCHARINDEX(a.ExtractedNumber,dbo.udf_StripSpecialCharacters(a.CustPhone, '^0-9')) > 0 \r\n\t\t\t\tOR CHARINDEX(a.ExtractedNumber,dbo.udf_StripSpecialCharacters(a.AlternatePhone, '^0-9')) > 0 \r\n\t\t\t\tOR CHARINDEX(a.ExtractedNumber,dbo.udf_StripSpecialCharacters(a.FAX, '^0-9')) > 0 \t\t \r\n\t\t,1,0) MatchingPhone  FROM(\t\t\r\n\t\t\tSELECT 'L' AS PType, l.CustCD, a.CommonName, Cast(DateAvail as date) as DateAvail, a.Phone as CustPhone, a.Phone2 AS AlternatePhone, a.FAX, \r\n\t\t\t\t\tComment,dbo.udf_GetPhoneNumberFromComment(Comment) ExtractedNumber, SrceCity, SrceSt SP,\r\n\t\t\t\t\tDestCity, DestSt DP,  UserId, u.Email as UserEmail\r\n\t\tFROM LoadPosting l WITH(NOLOCK)\r\n\t\tINNER JOIN Main.dbo.Account a  WITH(NOLOCK) ON a.CustCD = l.CustCD\r\n\t\tLEFT JOIN Main.dbo.Users u ON u.UserId = l.CreatedBy\r\n\t\t-- where l.CustCD='tcorell'\r\n\t\t) a \r\n\tWHERE ExtractedNUmber <> ''\r\n\r\nUNION ALL\r\nSELECT *,IIF(\r\n\t\t\t\tCHARINDEX(a.ExtractedNumber,dbo.udf_StripSpecialCharacters(a.CustPhone, '^0-9')) > 0 \r\n\t\t\t\tOR CHARINDEX(a.ExtractedNumber,dbo.udf_StripSpecialCharacters(a.AlternatePhone, '^0-9')) > 0 \r\n\t\t\t\tOR CHARINDEX(a.ExtractedNumber,dbo.udf_StripSpecialCharacters(a.Fax, '^0-9')) > 0\t\t \r\n\t\t,1,0) MatchingPhone \r\n\t FROM(\r\n\t\tSELECT \r\n\t\t\t 'E' AS PType, e.CustCD, a.CommonName, Cast(DateAvail as date) as DateAvail, a.Phone as CustPhone, a.Phone2 AS AlternatePhone, a.FAX,\r\n\t\t\t  Comment, dbo.udf_GetPhoneNumberFromComment(Comment) ExtractedNumber, SrceCity, SrceSt SP,\r\n\t\t\t DestCity, DestSt DP, UserId, u.Email as UserEmail\r\n\t\tFROM EquipmentPosting e  WITH(NOLOCK)\r\n\t\tINNER JOIN Main.dbo.Account a WITH(NOLOCK) ON a.CustCD = e.CustCD\r\n\t\tLEFT JOIN Main.dbo.users u ON u.UserId = e.CreatedBy\r\n\t\t--where e.CustCD='tcorell'\r\n\t\t) a \r\n\tWHERE  ExtractedNUmber <> ''\r\nEND","parameters":[],"dependencies":null,"imported_at":"2021-07-29 12:59"};
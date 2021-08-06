window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p329","name":"usp_ValidateIntgrationCustomerAccess","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_ValidateIntgrationCustomerAccess"},{"field":"Type","value":"Procedure"}],"script":"CREATE PROCEDURE [dbo].[usp_ValidateIntgrationCustomerAccess]\r\n\t@CustCd\t\t\t\tVARCHAR(10),\r\n\t@IntegrationToken\tVARCHAR(50),\r\n\t@UserEmail\t\t\tVARCHAR(256),\r\n\t@UserId\t\t\t\tINT OUTPUT,\r\n\t@LeadsCap\t\t\tINT OUTPUT \r\n \r\nAS\r\n-- =============================================\r\n-- Author:\t\tVevian Mekhaeil\r\n-- Create date: 10/28/2019\r\n-- Description:\tCall [usp_ValidateIntgrationCustomerAccess] stored procedure in Main DB - Can't directly access Main DB tables from here \r\n--\t\t\t\tbecause of Memory Optimized tables restrictions.\r\n--\t\t\t\tTo validate the customer's unique identifier token passed to Integration API calls.\r\n--\t\t\t\tAlso will validate that the user's email is a user that belongs to this customer and returns the UserId\r\n------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR\tDATE (DDMONTHYYYY)\tDESCRIPTION\r\n-- Vevian   28Oct2019\t\t\tInitial Development\r\n--\t\t\t\t\t\t\t\tLLSIM-3486: Validate/authenticate Integration customers + Users \r\n-- Vevian\t04Nov2019\t\t\tLLSIM-3486: return Leads Cap\r\n-- =============================================\r\n\r\nBEGIN\r\n\t-- SET NOCOUNT ON added to prevent extra result sets from\r\n\t-- interfering with SELECT statements.\r\n\tSET NOCOUNT ON;\r\n\r\n\texec Main.dbo.usp_ValidateIntgrationCustomerAccess \r\n\t\t@CustCd = @CustCd, \r\n\t\t@IntegrationToken = @IntegrationToken, \r\n\t\t@UserEmail = @UserEmail, \r\n\t\t@UserId = @UserId OUTPUT,\r\n\t\t@LeadsCap = @LeadsCap OUTPUT\r\nEND\r\n\r\n-- Permissions\r\nGRANT EXECUTE ON  [dbo].[usp_ValidateIntgrationCustomerAccess] TO [udb_platform]","parameters":[{"name":"CustCd","description":null,"mode":"IN","data_type":"varchar(10)","custom_fields":{}},{"name":"IntegrationToken","description":null,"mode":"IN","data_type":"varchar(50)","custom_fields":{}},{"name":"UserEmail","description":null,"mode":"IN","data_type":"varchar(256)","custom_fields":{}},{"name":"UserId","description":null,"mode":"INOUT","data_type":"int","custom_fields":{}},{"name":"LeadsCap","description":null,"mode":"INOUT","data_type":"int","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
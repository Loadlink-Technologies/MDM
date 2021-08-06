window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p267","name":"usp_GetInclude","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_GetInclude"},{"field":"Type","value":"Procedure"}],"script":"CREATE PROCEDURE [dbo].[usp_GetInclude]\r\n    @CustCD VARCHAR(10) \r\nAS\r\nBEGIN\r\n\r\n--------------------------------------------------------------------------\r\n-- PROCEDURE NAME : usp_GetInclude\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Get list of Included customer for Private Posting.  \r\n--\r\n-- CALLED BY      : LoadMatching Web API \r\n-- EXECUTION FREQUENCY : \r\n-- \r\n-- INPUT PARAMS   : @CustCd - Caller's Customer Code\r\n--                 \r\n-- OUTPUT PARAMS  :\r\n-- STATUS RETURN  : \r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR    DATE       DESCRIPTION\r\n-- Hiro      2017.11.13 Initial Development\r\n--------------------------------------------------------------------------\r\n    SELECT\r\n       CustCD\r\n      ,IncCustCD\r\n    FROM dbo.Includes\r\n    WHERE CustCD = @CustCD \r\n    ORDER BY IncCustCD\r\nEND","parameters":[{"name":"CustCD","description":null,"mode":"IN","data_type":"varchar(10)","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
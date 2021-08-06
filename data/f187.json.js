window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f187","name":"udf_PostingAttributeToString","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"udf_PostingAttributeToString"},{"field":"Type","value":"Function"}],"script":"CREATE  FUNCTION [dbo].[udf_PostingAttributeToString](@PAttrib int)\r\nRETURNS VARCHAR(25)\r\n\r\n----------------------------------------------------------------------------------------------------\r\n-- FUNCTION NAME : dbo.udf_PostingAttributeToString\r\n----------------------------------------------------------------------------------------------------\r\n-- CALLED BY      : Load Matching Related application \r\n-- EXECUTION FREQUENCY : Very Frequent\r\n--\r\n-- INPUT PARAMS   : @PAttrib (int)\r\n-- OUTPUT PARAMS  : ANY AVAILABLE 'ABWCZITVXMGFHEN' Attribute\r\n-- STATUS RETURN  : \r\n----------------------------------------------------------------------------------------------------\r\n-- HISTORY :\r\n-- AUTHOR    DATE       DESCRIPTION\r\n-- Hiro      2017.03.17 Initial Development\r\n----------------------------------------------------------------------------------------------------\r\nAS\r\nBEGIN\r\n\r\ndeclare \t@OrigPAttrib char(25)\t\t\r\nSet \t\t@OrigPAttrib = 'ABWCZITVXMGFHEN'\t\r\n\r\ndeclare \t@ReturnPAttrib varchar(25)\r\nset \t\t@ReturnPAttrib = ' '\r\n\r\ndeclare \t@I int\r\nset \t\t@I = 0\r\n\r\nWhile @I <= Len(@OrigPAttrib) \r\nBEGIN\r\n     IF (POWER(2, @I) & @PAttrib) > 0\r\n         SET @ReturnPAttrib = @ReturnPAttrib + SUBSTRING(@OrigPAttrib, @I + 1 , 1) \r\n     SET @I = @I + 1\r\nEND\r\nRETURN LTrim(@ReturnPAttrib)\r\nEND","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"varchar(25)","custom_fields":{}},{"name":"PAttrib","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
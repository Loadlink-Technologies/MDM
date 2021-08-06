window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f190","name":"udf_StripSpecialCharacters","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"udf_StripSpecialCharacters"},{"field":"Type","value":"Function"}],"script":"-----------------------------------------------------------------------------------\r\n-- FUNCTION NAME : udf_StripSpecialCharacters                                    --\r\n-----------------------------------------------------------------------------------\r\n-- DESCRIPTION    : This UDF will Removes special characters from a @InputString --\r\n--                  and keep only the @matchExpression characters\t\t\t\t --\r\n-- CALLED BY      : [usp_GetMembers]    \r\n-- USAGE\t\t  : dbo.udf_StripSpecialCharacters('a1!s2@d3#f4$', '^a-z') - Alphabetic Only\r\n--\t\t\t\t  : dbo.udf_StripSpecialCharacters('a1!s2@d3#f4$', '^0-9') - Numeric Only\r\n--\t\t\t\t  : dbo.udf_StripSpecialCharacters('a1!s2@d3#f4$', '^a-z0-9') - Alphanumeric Only\r\n--\t\t\t\t  : dbo.udf_StripSpecialCharacters('a1!s2@d3#f4$', 'a-z0-9')  - Non-Alphanumeric Only\r\n                                            --\r\n-----------------------------------------------------------------------------------\r\n-- HISTORY :                                                                     --\r\n-- AUTHOR          DATE            DESCRIPTION                                   --\r\n-- Kruti           2018.11.14      FIRST DEVELOPMENT                             -- \r\n-----------------------------------------------------------------------------------\r\n\r\nCREATE Function [dbo].[udf_StripSpecialCharacters](\r\n    @InputString NVARCHAR(MAX), \r\n    @MatchExpression VARCHAR(255)\r\n)\r\nRETURNS NVARCHAR(MAX)\r\nAS\r\nBEGIN\r\n    SET @MatchExpression =  '%['+@MatchExpression+']%'\r\n\r\n    WHILE PatIndex(@MatchExpression, @InputString) > 0\r\n        SET @InputString = Stuff(@InputString, PatIndex(@MatchExpression, @InputString), 1, '')\r\n\r\n    RETURN @InputString\r\n\r\nEND","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"nvarchar(MAX)","custom_fields":{}},{"name":"InputString","description":null,"mode":"IN","data_type":"nvarchar(MAX)","custom_fields":{}},{"name":"MatchExpression","description":null,"mode":"IN","data_type":"varchar(255)","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
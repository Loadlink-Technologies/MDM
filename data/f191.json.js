window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f191","name":"udf_ValidateCheckDigitUPC","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"udf_ValidateCheckDigitUPC"},{"field":"Type","value":"Function"}],"script":"CREATE FUNCTION [dbo].[udf_ValidateCheckDigitUPC] \r\n(\r\n    @UPC                VARCHAR(8000)    -- Include the check digit\r\n    ,@CheckDigitPos     INT\r\n)\r\nRETURNS TABLE \r\n--------------------------------------------------------------------------\r\n-- PROCEDURE NAME :\tudf_ValidateCheckDigitUPC\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    :\tValidate the input number \r\n--\r\n-- INPUT PARAMS   :\tInput string of number \r\n--\r\n-- OUTPUT PARAMS  :\tNone\r\n--\r\n-- STATUS RETURN  :\t\r\n--------------------------------------------------------------------------\r\n-- HISTORY :\r\n-- AUTHOR\tDATE\t\tDESCRIPTION\r\n-- Hiro    2018.01.15\tInitial Development\r\n--------------------------------------------------------------------------\r\nRETURN\r\n-- Validate the check digit in a UPC\r\nSELECT ErrorCode            = CASE WHEN SUBSTRING(@UPC, CDPos, 1) = b.CheckDigit \r\n                                   THEN 0 \r\n                                   ELSE 1 \r\n                                   END\r\n    ,UPC                    = @UPC\r\n    ,UPCCheckDigit          = SUBSTRING(@UPC, CDPos, 1)\r\n    ,CalculatedCheckDigit   = b.CheckDigit\r\nFROM \r\n(\r\n    -- Default the check digit position to the end of the string\r\n    SELECT CDPos    = ISNULL(CASE WHEN @CheckDigitPos BETWEEN 1 AND LEN(@CheckDigitPos) \r\n                                  THEN @CheckDigitPos \r\n                                  ELSE LEN(@CheckDigitPos) \r\n                                  END\r\n                          ,LEN(@UPC))\r\n) a\r\n-- Remove (with STUFF) the check digit when you calculate the check digit on the rest\r\nCROSS APPLY dbo.udf_CalculateCheckDigitUPC(STUFF(@UPC, a.CDPos, 1, '')) b;","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"table type","custom_fields":{}},{"name":"UPC","description":null,"mode":"IN","data_type":"varchar(8000)","custom_fields":{}},{"name":"CheckDigitPos","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
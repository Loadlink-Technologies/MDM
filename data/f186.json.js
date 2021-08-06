window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f186","name":"udf_GetPIN","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"udf_GetPIN"},{"field":"Type","value":"Function"}],"script":"CREATE FUNCTION [dbo].[udf_GetPIN]\r\n(\r\n    @RandomNum UNIQUEIDENTIFIER\r\n   ,@LengthOfPIN SMALLINT = 9 -- Default is 9 digit PIN\r\n)\r\nRETURNS VARCHAR(1024) \r\n\r\n--------------------------------------------------------------------------\r\n-- PROCEDURE NAME :\tudf_GetPIN\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    :\tGenerate Unique PIN with CheckDigit\r\n--\r\n-- INPUT PARAMS   :\t@LengthOfPIN: 9(Default), Length of PIN to generate \r\n--\r\n-- OUTPUT PARAMS  :\tNone\r\n--\r\n-- STATUS RETURN  :\t\r\n-- Note: Maximum length of PIN generated is 19 which is length of bigint datatype\r\n--       Minimum length of PIN generated is 2 including checkdigit\r\n--------------------------------------------------------------------------\r\n-- HISTORY :\r\n-- AUTHOR\tDATE\t\tDESCRIPTION\r\n-- Hiro    2018.01.16\tInitial Development\r\n--------------------------------------------------------------------------\r\nAS \r\nBEGIN  \r\n\r\n    IF (@LengthOfPIN > 19)\r\n        SET @LengthOfPIN = 19\r\n    ELSE IF (@LengthOfPIN<=1) \r\n        SET @LengthOfPIN = 2\r\n\r\n    DECLARE @RandomPIN varchar(1024)\r\n          , @FormatString VARCHAR(1024) = REPLICATE('0', @LengthOfPIN-1)\r\n          , @MaxPinNum BIGINT = CAST(CONCAT(1, REPLICATE('0', @LengthOfPIN-1)) AS BIGINT)\r\n\r\n    DECLARE @Random varchar(1024)\r\n           ,@CheckDigit INT\r\n--    set @Random = FORMAT((CAST(RAND() * (100000000) AS BIGINT)),@FormatString) -- Generate Random 8 digit number\r\n\r\n    SELECT @Random = FORMAT(ABS(CAST(CAST(@RandomNum AS VARBINARY(8)) AS BIGINT)) % (@MaxPinNum-1)+1,@FormatString) -- Generate Random 8 digit number\r\n\r\n    SELECT @RandomPIN = concat(StringToCheck, CheckDigit)\r\n    FROM dbo.udf_CalculateCheckDigitUPC(@Random);\r\n\r\n    RETURN @RandomPIN\r\nEND","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"varchar(1024)","custom_fields":{}},{"name":"RandomNum","description":null,"mode":"IN","data_type":"uniqueidentifier","custom_fields":{}},{"name":"LengthOfPIN","description":null,"mode":"IN","data_type":"smallint","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
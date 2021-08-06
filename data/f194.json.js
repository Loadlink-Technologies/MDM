window.repositoryObject = {"parameters_custom_fields":[],"object_id":"f194","name":"udf_VTypeDetail","subtype":"FUNCTION","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"udf_VTypeDetail"},{"field":"Type","value":"Function"}],"script":"CREATE FUNCTION [dbo].[udf_VTypeDetail](@Vtype int)\r\n    RETURNS VARCHAR(200)\r\n   \r\nAS\r\n-------------------------------------------------------------------------\r\n-- FUNCTION NAME : dbo.udf_VTypeDetail\r\n--------------------------------------------------------------------------\r\n-- INPUT PARAMS   : @VType (int)\r\n-- OUTPUT PARAMS  : ANY AVAILABLE 'VRKFSDTCUHLONPIE' TYPES in Detailed format\r\n--------------------------------------------------------------------------\r\n-- HISTORY :\r\n-- AUTHOR    DATE\t\t\tDESCRIPTION\r\n-- Vevian    2018.06.27\t\tInitial Development\r\n--------------------------------------------------------------------------\r\nBEGIN\r\n\tDECLARE \t@OVTYPE char(25)\t\t\r\n\tSET \t\t@OVTYPE = 'VRKFSDTCUHLONPIE'\t\r\n\tDECLARE \t@RVtype varchar(25)\r\n\tSET \t\t@RVtype = ' '\r\n\tDECLARE \t@I int\r\n\tSET \t\t@I = 0\r\n\r\n\tWhile @I <= Len(@OVTYPE) \r\n\tBEGIN\r\n\t\tIF (POWER(2, @I) & @Vtype) > 0\r\n\t\t\tSET @RVtype = @RVtype + SUBSTRING(@OVTYPE, @I + 1 , 1) \r\n\t\tSET @I = @I + 1\r\n\tEND\r\n\r\n\t-- USING THE CODES COMPUTED ABOVE, NOW GET THE DETAILS BASED ON THEM\r\n\tSET\t\t\t@i = 1\r\n\tDECLARE\t\t@cnt INT\r\n\tSET\t\t\t@cnt = LEN(LTRIM(@RVtype))\r\n\tDECLARE \t@RVtypeDetail VARCHAR(200)\r\n\tSET \t\t@RVtypeDetail = ' '\r\n\tDECLARE\t\t@Det VARCHAR(50)\r\n\tSET\t\t\t@Det = ''\r\n\r\n\tWHILE @i <= @cnt\r\n\tBEGIN\r\n\t\tSELECT @Det = Detail FROM [dbo].[VehicleType] WHERE Code = SUBSTRING(LTRIM(@RVtype),@i,1)\r\n\t\tSET @RVtypeDetail = @RVtypeDetail + @Det + ','\r\n\t\tSET @i = @i + 1\r\n\tEND\r\n\t\r\n\tRETURN SUBSTRING(@RVtypeDetail, 1, LEN(@RVtypeDetail) - 1)\r\n\r\nEND","parameters":[{"name":"Returns","description":null,"mode":"OUT","data_type":"varchar(200)","custom_fields":{}},{"name":"Vtype","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
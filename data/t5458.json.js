window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5458","name":"SOP60200","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SOP60200"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-72590","object_id":"column-72590","name":"INSTRUCTIONID","name_without_path":"INSTRUCTIONID","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72591","object_id":"column-72591","name":"CUSTNMBR","name_without_path":"CUSTNMBR","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72592","object_id":"column-72592","name":"ADRSCODE","name_without_path":"ADRSCODE","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72593","object_id":"column-72593","name":"ITEMNMBR","name_without_path":"ITEMNMBR","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"31","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72594","object_id":"column-72594","name":"SEQNUMBR","name_without_path":"SEQNUMBR","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72595","object_id":"column-72595","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKSOP60200","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"INSTRUCTIONID","name":"INSTRUCTIONID"},{"path":null,"name_without_path":"CUSTNMBR","name":"CUSTNMBR"},{"path":null,"name_without_path":"ADRSCODE","name":"ADRSCODE"},{"path":null,"name_without_path":"ITEMNMBR","name":"ITEMNMBR"}],"custom_fields":{}},{"name":"AK2SOP60200","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"CUSTNMBR","name":"CUSTNMBR"},{"path":null,"name_without_path":"ADRSCODE","name":"ADRSCODE"},{"path":null,"name_without_path":"ITEMNMBR","name":"ITEMNMBR"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK3SOP60200","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"INSTRUCTIONID","name":"INSTRUCTIONID"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK4SOP60200","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ITEMNMBR","name":"ITEMNMBR"},{"path":null,"name_without_path":"CUSTNMBR","name":"CUSTNMBR"},{"path":null,"name_without_path":"ADRSCODE","name":"ADRSCODE"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK5SOP60200","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ADRSCODE","name":"ADRSCODE"},{"path":null,"name_without_path":"ITEMNMBR","name":"ITEMNMBR"},{"path":null,"name_without_path":"CUSTNMBR","name":"CUSTNMBR"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5212","name":"PM50504","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"PM50504"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-65602","object_id":"column-65602","name":"PSTGDATE","name_without_path":"PSTGDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-65603","object_id":"column-65603","name":"VENDORID","name_without_path":"VENDORID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-65604","object_id":"column-65604","name":"TRXSORCE","name_without_path":"TRXSORCE","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"13","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-65605","object_id":"column-65605","name":"VCHRNMBR","name_without_path":"VCHRNMBR","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-65606","object_id":"column-65606","name":"DOCNUMBR","name_without_path":"DOCNUMBR","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-65607","object_id":"column-65607","name":"STRVAL","name_without_path":"STRVAL","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"133","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-65608","object_id":"column-65608","name":"TRX_ID","name_without_path":"TRX_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"19","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-65609","object_id":"column-65609","name":"ACCTAMNT","name_without_path":"ACCTAMNT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-65610","object_id":"column-65610","name":"CNTRLTYP","name_without_path":"CNTRLTYP","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-65611","object_id":"column-65611","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKPM50504","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK1PM50504","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"TRXSORCE","name":"TRXSORCE"},{"path":null,"name_without_path":"PSTGDATE","name":"PSTGDATE"},{"path":null,"name_without_path":"VENDORID","name":"VENDORID"},{"path":null,"name_without_path":"CNTRLTYP","name":"CNTRLTYP"},{"path":null,"name_without_path":"VCHRNMBR","name":"VCHRNMBR"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK2PM50504","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"TRX_ID","name":"TRX_ID"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4418","name":"DTA10200","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"DTA10200"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-45070","object_id":"column-45070","name":"DTASERIES","name_without_path":"DTASERIES","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-45071","object_id":"column-45071","name":"DTAREF","name_without_path":"DTAREF","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"25","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-45072","object_id":"column-45072","name":"ACTINDX","name_without_path":"ACTINDX","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-45073","object_id":"column-45073","name":"SEQNUMBR","name_without_path":"SEQNUMBR","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-45074","object_id":"column-45074","name":"GROUPID","name_without_path":"GROUPID","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-45075","object_id":"column-45075","name":"CODEID","name_without_path":"CODEID","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-45076","object_id":"column-45076","name":"DOCNUMBR","name_without_path":"DOCNUMBR","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-45077","object_id":"column-45077","name":"RMDTYPAL","name_without_path":"RMDTYPAL","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-45078","object_id":"column-45078","name":"POSTDESC","name_without_path":"POSTDESC","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"51","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-45079","object_id":"column-45079","name":"DTAQNTY","name_without_path":"DTAQNTY","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-45080","object_id":"column-45080","name":"CODEAMT","name_without_path":"CODEAMT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-45081","object_id":"column-45081","name":"TRXDATE","name_without_path":"TRXDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-45082","object_id":"column-45082","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKDTA10200","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DTASERIES","name":"DTASERIES"},{"path":null,"name_without_path":"DTAREF","name":"DTAREF"},{"path":null,"name_without_path":"ACTINDX","name":"ACTINDX"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"},{"path":null,"name_without_path":"GROUPID","name":"GROUPID"},{"path":null,"name_without_path":"CODEID","name":"CODEID"}],"custom_fields":{}},{"name":"AK2DTA10200","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"GROUPID","name":"GROUPID"},{"path":null,"name_without_path":"CODEID","name":"CODEID"},{"path":null,"name_without_path":"TRXDATE","name":"TRXDATE"},{"path":null,"name_without_path":"ACTINDX","name":"ACTINDX"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"},{"path":null,"name_without_path":"DTASERIES","name":"DTASERIES"},{"path":null,"name_without_path":"DTAREF","name":"DTAREF"}],"custom_fields":{}},{"name":"AK3DTA10200","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"CODEID","name":"CODEID"},{"path":null,"name_without_path":"ACTINDX","name":"ACTINDX"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"},{"path":null,"name_without_path":"GROUPID","name":"GROUPID"},{"path":null,"name_without_path":"DTASERIES","name":"DTASERIES"},{"path":null,"name_without_path":"DTAREF","name":"DTAREF"}],"custom_fields":{}},{"name":"AK4DTA10200","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ACTINDX","name":"ACTINDX"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"},{"path":null,"name_without_path":"GROUPID","name":"GROUPID"},{"path":null,"name_without_path":"CODEID","name":"CODEID"},{"path":null,"name_without_path":"DTASERIES","name":"DTASERIES"},{"path":null,"name_without_path":"DTAREF","name":"DTAREF"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
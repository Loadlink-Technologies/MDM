window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5453","name":"SOP50401","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SOP50401"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-72535","object_id":"column-72535","name":"ITEMNMBR","name_without_path":"ITEMNMBR","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"31","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72536","object_id":"column-72536","name":"EPITMTYP","name_without_path":"EPITMTYP","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72537","object_id":"column-72537","name":"STRTDATE","name_without_path":"STRTDATE","description":null,"is_pk":true,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72538","object_id":"column-72538","name":"ENDDATE","name_without_path":"ENDDATE","description":null,"is_pk":true,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72539","object_id":"column-72539","name":"PRCSHID","name_without_path":"PRCSHID","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72540","object_id":"column-72540","name":"BASEUOFM","name_without_path":"BASEUOFM","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"9","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72541","object_id":"column-72541","name":"ACTIVE","name_without_path":"ACTIVE","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72542","object_id":"column-72542","name":"PRODTCOD","name_without_path":"PRODTCOD","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72543","object_id":"column-72543","name":"QTYFROM","name_without_path":"QTYFROM","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72544","object_id":"column-72544","name":"PSITMVAL","name_without_path":"PSITMVAL","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72545","object_id":"column-72545","name":"FREEITEM","name_without_path":"FREEITEM","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"31","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72546","object_id":"column-72546","name":"FREEUOFM","name_without_path":"FREEUOFM","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"9","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-72547","object_id":"column-72547","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKSOP50401","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ITEMNMBR","name":"ITEMNMBR"},{"path":null,"name_without_path":"EPITMTYP","name":"EPITMTYP"},{"path":null,"name_without_path":"STRTDATE","name":"STRTDATE"},{"path":null,"name_without_path":"ENDDATE","name":"ENDDATE"},{"path":null,"name_without_path":"PRCSHID","name":"PRCSHID"},{"path":null,"name_without_path":"BASEUOFM","name":"BASEUOFM"}],"custom_fields":{}},{"name":"AK2SOP50401","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"STRTDATE","name":"STRTDATE"},{"path":null,"name_without_path":"ENDDATE","name":"ENDDATE"},{"path":null,"name_without_path":"ITEMNMBR","name":"ITEMNMBR"},{"path":null,"name_without_path":"EPITMTYP","name":"EPITMTYP"},{"path":null,"name_without_path":"PRCSHID","name":"PRCSHID"},{"path":null,"name_without_path":"BASEUOFM","name":"BASEUOFM"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
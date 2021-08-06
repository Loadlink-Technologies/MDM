window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5810","name":"UPR00402","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"UPR00402"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-80368","object_id":"column-80368","name":"EMPLOYID","name_without_path":"EMPLOYID","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-80369","object_id":"column-80369","name":"PAYRCORD","name_without_path":"PAYRCORD","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"7","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-80370","object_id":"column-80370","name":"Effective_Date","name_without_path":"Effective_Date","description":null,"is_pk":true,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-80371","object_id":"column-80371","name":"PAYRTAMT","name_without_path":"PAYRTAMT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-80372","object_id":"column-80372","name":"CHANGEREASON_I","name_without_path":"CHANGEREASON_I","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"31","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-80373","object_id":"column-80373","name":"PayStepStatus","name_without_path":"PayStepStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-80374","object_id":"column-80374","name":"PYSTPTBLID","name_without_path":"PYSTPTBLID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-80375","object_id":"column-80375","name":"Step","name_without_path":"Step","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-80376","object_id":"column-80376","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKUPR00402","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"EMPLOYID","name":"EMPLOYID"},{"path":null,"name_without_path":"PAYRCORD","name":"PAYRCORD"},{"path":null,"name_without_path":"Effective_Date","name":"Effective_Date"}],"custom_fields":{}},{"name":"AK2UPR00402","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PAYRCORD","name":"PAYRCORD"},{"path":null,"name_without_path":"EMPLOYID","name":"EMPLOYID"},{"path":null,"name_without_path":"Effective_Date","name":"Effective_Date"}],"custom_fields":{}},{"name":"AK3UPR00402","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Effective_Date","name":"Effective_Date"},{"path":null,"name_without_path":"EMPLOYID","name":"EMPLOYID"},{"path":null,"name_without_path":"PAYRCORD","name":"PAYRCORD"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4557","name":"HR2TRA04","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"HR2TRA04"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-47802","object_id":"column-47802","name":"EMPID_I","name_without_path":"EMPID_I","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-47803","object_id":"column-47803","name":"COURSEID_I","name_without_path":"COURSEID_I","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"7","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-47804","object_id":"column-47804","name":"ICLASSID_I","name_without_path":"ICLASSID_I","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"7","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-47805","object_id":"column-47805","name":"CB_I","name_without_path":"CB_I","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-47806","object_id":"column-47806","name":"DATE1","name_without_path":"DATE1","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-47807","object_id":"column-47807","name":"STR20DUMMY_I","name_without_path":"STR20DUMMY_I","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-47808","object_id":"column-47808","name":"CHANGEDATE_I","name_without_path":"CHANGEDATE_I","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-47809","object_id":"column-47809","name":"USERID","name_without_path":"USERID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-47810","object_id":"column-47810","name":"NOTESINDEX_I","name_without_path":"NOTESINDEX_I","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-47811","object_id":"column-47811","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKHR2TRA04","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"EMPID_I","name":"EMPID_I"},{"path":null,"name_without_path":"COURSEID_I","name":"COURSEID_I"},{"path":null,"name_without_path":"ICLASSID_I","name":"ICLASSID_I"}],"custom_fields":{}},{"name":"AK2HR2TRA04","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"COURSEID_I","name":"COURSEID_I"},{"path":null,"name_without_path":"ICLASSID_I","name":"ICLASSID_I"},{"path":null,"name_without_path":"EMPID_I","name":"EMPID_I"}],"custom_fields":{}},{"name":"AK3HR2TRA04","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"COURSEID_I","name":"COURSEID_I"},{"path":null,"name_without_path":"CB_I","name":"CB_I"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
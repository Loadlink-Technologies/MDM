window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5660","name":"SVC30207","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SVC30207"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-77067","object_id":"column-77067","name":"SRVRECTYPE","name_without_path":"SRVRECTYPE","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77068","object_id":"column-77068","name":"CALLNBR","name_without_path":"CALLNBR","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"11","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77069","object_id":"column-77069","name":"EQPLINE","name_without_path":"EQPLINE","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77070","object_id":"column-77070","name":"LNITMSEQ","name_without_path":"LNITMSEQ","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77071","object_id":"column-77071","name":"TECHID","name_without_path":"TECHID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"11","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77072","object_id":"column-77072","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKSVC30207","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"SRVRECTYPE","name":"SRVRECTYPE"},{"path":null,"name_without_path":"CALLNBR","name":"CALLNBR"},{"path":null,"name_without_path":"EQPLINE","name":"EQPLINE"},{"path":null,"name_without_path":"LNITMSEQ","name":"LNITMSEQ"}],"custom_fields":{}},{"name":"AK2SVC30207","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"TECHID","name":"TECHID"},{"path":null,"name_without_path":"SRVRECTYPE","name":"SRVRECTYPE"},{"path":null,"name_without_path":"CALLNBR","name":"CALLNBR"},{"path":null,"name_without_path":"EQPLINE","name":"EQPLINE"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK3SVC30207","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"SRVRECTYPE","name":"SRVRECTYPE"},{"path":null,"name_without_path":"CALLNBR","name":"CALLNBR"},{"path":null,"name_without_path":"TECHID","name":"TECHID"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
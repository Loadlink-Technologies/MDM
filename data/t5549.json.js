window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5549","name":"SVC00801","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SVC00801"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-74854","object_id":"column-74854","name":"SRVRECTYPE","name_without_path":"SRVRECTYPE","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74855","object_id":"column-74855","name":"CALLNBR","name_without_path":"CALLNBR","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"11","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74856","object_id":"column-74856","name":"LNITMSEQ","name_without_path":"LNITMSEQ","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74857","object_id":"column-74857","name":"Keyword","name_without_path":"Keyword","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74858","object_id":"column-74858","name":"ENTDTE","name_without_path":"ENTDTE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74859","object_id":"column-74859","name":"USERID","name_without_path":"USERID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74860","object_id":"column-74860","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKSVC00801","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"SRVRECTYPE","name":"SRVRECTYPE"},{"path":null,"name_without_path":"CALLNBR","name":"CALLNBR"},{"path":null,"name_without_path":"LNITMSEQ","name":"LNITMSEQ"}],"custom_fields":{}},{"name":"AK2SVC00801","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Keyword","name":"Keyword"},{"path":null,"name_without_path":"LNITMSEQ","name":"LNITMSEQ"},{"path":null,"name_without_path":"CALLNBR","name":"CALLNBR"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
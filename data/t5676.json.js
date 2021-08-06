window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5676","name":"SVC30610","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SVC30610"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-77856","object_id":"column-77856","name":"CONSTS","name_without_path":"CONSTS","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77857","object_id":"column-77857","name":"CONTNBR","name_without_path":"CONTNBR","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"11","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77858","object_id":"column-77858","name":"LNSEQNBR","name_without_path":"LNSEQNBR","description":null,"is_pk":true,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77859","object_id":"column-77859","name":"EQUIPID","name_without_path":"EQUIPID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77860","object_id":"column-77860","name":"ACTIVE","name_without_path":"ACTIVE","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77861","object_id":"column-77861","name":"SCHEDID","name_without_path":"SCHEDID","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"9","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77862","object_id":"column-77862","name":"SVC_Contract_Version","name_without_path":"SVC_Contract_Version","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77863","object_id":"column-77863","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKSVC30610","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"CONSTS","name":"CONSTS"},{"path":null,"name_without_path":"CONTNBR","name":"CONTNBR"},{"path":null,"name_without_path":"SVC_Contract_Version","name":"SVC_Contract_Version"},{"path":null,"name_without_path":"LNSEQNBR","name":"LNSEQNBR"},{"path":null,"name_without_path":"EQUIPID","name":"EQUIPID"},{"path":null,"name_without_path":"SCHEDID","name":"SCHEDID"}],"custom_fields":{}},{"name":"AK2SVC30610","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ACTIVE","name":"ACTIVE"},{"path":null,"name_without_path":"EQUIPID","name":"EQUIPID"},{"path":null,"name_without_path":"SCHEDID","name":"SCHEDID"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
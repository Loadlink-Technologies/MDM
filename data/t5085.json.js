window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5085","name":"PA40020","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"PA40020"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-61849","object_id":"column-61849","name":"PAALLOCATIONDESCRIPTION","name_without_path":"PAALLOCATIONDESCRIPTION","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"101","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-61850","object_id":"column-61850","name":"PAALLOCATIONID","name_without_path":"PAALLOCATIONID","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-61851","object_id":"column-61851","name":"PAActive","name_without_path":"PAActive","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-61852","object_id":"column-61852","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKPA40020","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PAALLOCATIONID","name":"PAALLOCATIONID"}],"custom_fields":{}},{"name":"AK2PA40020","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PAALLOCATIONID","name":"PAALLOCATIONID"},{"path":null,"name_without_path":"PAALLOCATIONDESCRIPTION","name":"PAALLOCATIONDESCRIPTION"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5139","name":"PA61040","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"PA61040"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-63159","object_id":"column-63159","name":"PAPROJNUMBER","name_without_path":"PAPROJNUMBER","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-63160","object_id":"column-63160","name":"PABILLCYCLEID1","name_without_path":"PABILLCYCLEID1","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-63161","object_id":"column-63161","name":"PAinactive","name_without_path":"PAinactive","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-63162","object_id":"column-63162","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKPA61040","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PAPROJNUMBER","name":"PAPROJNUMBER"}],"custom_fields":{}},{"name":"AK2PA61040","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PABILLCYCLEID1","name":"PABILLCYCLEID1"},{"path":null,"name_without_path":"PAPROJNUMBER","name":"PAPROJNUMBER"}],"custom_fields":{}},{"name":"AK3PA61040","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PABILLCYCLEID1","name":"PABILLCYCLEID1"},{"path":null,"name_without_path":"PAinactive","name":"PAinactive"},{"path":null,"name_without_path":"PAPROJNUMBER","name":"PAPROJNUMBER"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4692","name":"LK000005","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"LK000005"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-49833","object_id":"column-49833","name":"LK_Group","name_without_path":"LK_Group","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"31","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49834","object_id":"column-49834","name":"LK_Link_No","name_without_path":"LK_Link_No","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49835","object_id":"column-49835","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKLK000005","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"LK_Group","name":"LK_Group"},{"path":null,"name_without_path":"LK_Link_No","name":"LK_Link_No"}],"custom_fields":{}},{"name":"AK2LK000005","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"LK_Link_No","name":"LK_Link_No"},{"path":null,"name_without_path":"LK_Group","name":"LK_Group"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
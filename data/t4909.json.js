window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4909","name":"PA01111","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"PA01111"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-55642","object_id":"column-55642","name":"PACONTNUMBER","name_without_path":"PACONTNUMBER","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"11","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-55643","object_id":"column-55643","name":"CUSTNMBR","name_without_path":"CUSTNMBR","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-55644","object_id":"column-55644","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKPA01111","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PACONTNUMBER","name":"PACONTNUMBER"},{"path":null,"name_without_path":"CUSTNMBR","name":"CUSTNMBR"}],"custom_fields":{}},{"name":"AK2PA01111","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"CUSTNMBR","name":"CUSTNMBR"},{"path":null,"name_without_path":"PACONTNUMBER","name":"PACONTNUMBER"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
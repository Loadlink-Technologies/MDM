window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4664","name":"IV41001","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"IV41001"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-49066","object_id":"column-49066","name":"EXCEPTIONDATE","name_without_path":"EXCEPTIONDATE","description":null,"is_pk":true,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49067","object_id":"column-49067","name":"DATETYPE","name_without_path":"DATETYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49068","object_id":"column-49068","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKIV41001","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"EXCEPTIONDATE","name":"EXCEPTIONDATE"}],"custom_fields":{}},{"name":"AK2IV41001","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DATETYPE","name":"DATETYPE"},{"path":null,"name_without_path":"EXCEPTIONDATE","name":"EXCEPTIONDATE"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
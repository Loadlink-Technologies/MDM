window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4239","name":"AAG10003","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"AAG10003"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-42002","object_id":"column-42002","name":"aaGLWorkHdrID","name_without_path":"aaGLWorkHdrID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-42003","object_id":"column-42003","name":"aaGLWorkDistID","name_without_path":"aaGLWorkDistID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-42004","object_id":"column-42004","name":"aaGLWorkAssignID","name_without_path":"aaGLWorkAssignID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-42005","object_id":"column-42005","name":"aaTrxDimID","name_without_path":"aaTrxDimID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-42006","object_id":"column-42006","name":"aaTrxCodeID","name_without_path":"aaTrxCodeID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-42007","object_id":"column-42007","name":"aaCodeErrors","name_without_path":"aaCodeErrors","description":null,"is_pk":false,"is_identity":false,"data_type":"binary","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-42008","object_id":"column-42008","name":"DEX_ROW_TS","name_without_path":"DEX_ROW_TS","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-42009","object_id":"column-42009","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKAAG10003","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"aaGLWorkHdrID","name":"aaGLWorkHdrID"},{"path":null,"name_without_path":"aaGLWorkDistID","name":"aaGLWorkDistID"},{"path":null,"name_without_path":"aaGLWorkAssignID","name":"aaGLWorkAssignID"},{"path":null,"name_without_path":"aaTrxDimID","name":"aaTrxDimID"}],"custom_fields":{}}],"triggers":[{"name":"zDT_AAG10003U","description":null,"action":"After Update ","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-27 14:57"};
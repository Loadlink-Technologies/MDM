window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4754","name":"ME142812","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"ME142812"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-50832","object_id":"column-50832","name":"MEBANKID","name_without_path":"MEBANKID","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-50833","object_id":"column-50833","name":"ME_Transaction_Type","name_without_path":"ME_Transaction_Type","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-50834","object_id":"column-50834","name":"ME_Transaction_Code","name_without_path":"ME_Transaction_Code","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"41","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-50835","object_id":"column-50835","name":"MESTATUSTYPE","name_without_path":"MESTATUSTYPE","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-50836","object_id":"column-50836","name":"METRXSTATCODE","name_without_path":"METRXSTATCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-50837","object_id":"column-50837","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKME142812","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"MEBANKID","name":"MEBANKID"},{"path":null,"name_without_path":"ME_Transaction_Type","name":"ME_Transaction_Type"},{"path":null,"name_without_path":"MESTATUSTYPE","name":"MESTATUSTYPE"}],"custom_fields":{}},{"name":"AK2ME142812","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"MEBANKID","name":"MEBANKID"},{"path":null,"name_without_path":"ME_Transaction_Code","name":"ME_Transaction_Code"},{"path":null,"name_without_path":"METRXSTATCODE","name":"METRXSTATCODE"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4768","name":"ME27607","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"ME27607"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-51176","object_id":"column-51176","name":"BACHNUMB","name_without_path":"BACHNUMB","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-51177","object_id":"column-51177","name":"PMNTNMBR","name_without_path":"PMNTNMBR","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-51178","object_id":"column-51178","name":"CHEKAMNT","name_without_path":"CHEKAMNT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-51179","object_id":"column-51179","name":"CHEKNMBR","name_without_path":"CHEKNMBR","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-51180","object_id":"column-51180","name":"VENDORID","name_without_path":"VENDORID","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-51181","object_id":"column-51181","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKME27607","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"VENDORID","name":"VENDORID"},{"path":null,"name_without_path":"PMNTNMBR","name":"PMNTNMBR"}],"custom_fields":{}},{"name":"AK2ME27607","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"BACHNUMB","name":"BACHNUMB"},{"path":null,"name_without_path":"PMNTNMBR","name":"PMNTNMBR"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
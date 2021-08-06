window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4678","name":"IVC10300","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"IVC10300"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-49506","object_id":"column-49506","name":"DOCTYPE","name_without_path":"DOCTYPE","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49507","object_id":"column-49507","name":"INVCNMBR","name_without_path":"INVCNMBR","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49508","object_id":"column-49508","name":"SEQNUMBR","name_without_path":"SEQNUMBR","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49509","object_id":"column-49509","name":"DISTTYPE","name_without_path":"DISTTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49510","object_id":"column-49510","name":"DistRef","name_without_path":"DistRef","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"31","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49511","object_id":"column-49511","name":"ACTINDX","name_without_path":"ACTINDX","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49512","object_id":"column-49512","name":"DEBITAMT","name_without_path":"DEBITAMT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49513","object_id":"column-49513","name":"CRDTAMNT","name_without_path":"CRDTAMNT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49514","object_id":"column-49514","name":"TRXSORCE","name_without_path":"TRXSORCE","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"13","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49515","object_id":"column-49515","name":"POSTED","name_without_path":"POSTED","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49516","object_id":"column-49516","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKIVC10300","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DOCTYPE","name":"DOCTYPE"},{"path":null,"name_without_path":"INVCNMBR","name":"INVCNMBR"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"}],"custom_fields":{}},{"name":"AK2IVC10300","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DOCTYPE","name":"DOCTYPE"},{"path":null,"name_without_path":"INVCNMBR","name":"INVCNMBR"},{"path":null,"name_without_path":"DISTTYPE","name":"DISTTYPE"},{"path":null,"name_without_path":"ACTINDX","name":"ACTINDX"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK3IVC10300","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"TRXSORCE","name":"TRXSORCE"},{"path":null,"name_without_path":"ACTINDX","name":"ACTINDX"},{"path":null,"name_without_path":"DOCTYPE","name":"DOCTYPE"},{"path":null,"name_without_path":"INVCNMBR","name":"INVCNMBR"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK4IVC10300","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"POSTED","name":"POSTED"},{"path":null,"name_without_path":"ACTINDX","name":"ACTINDX"},{"path":null,"name_without_path":"INVCNMBR","name":"INVCNMBR"},{"path":null,"name_without_path":"DOCTYPE","name":"DOCTYPE"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}}],"triggers":[{"name":"PP_IVC10300_Delete","description":null,"action":"After Delete ","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-27 14:57"};
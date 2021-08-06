window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4315","name":"CAM30100","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CAM30100"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-43511","object_id":"column-43511","name":"DATE1","name_without_path":"DATE1","description":null,"is_pk":true,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43512","object_id":"column-43512","name":"TIME1","name_without_path":"TIME1","description":null,"is_pk":true,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43513","object_id":"column-43513","name":"CAM_ControlAccountIndex","name_without_path":"CAM_ControlAccountIndex","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43514","object_id":"column-43514","name":"CAM_Account_Num_String","name_without_path":"CAM_Account_Num_String","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"129","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43515","object_id":"column-43515","name":"CAM_ControlAcctDescr","name_without_path":"CAM_ControlAcctDescr","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"33","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43516","object_id":"column-43516","name":"VENDORID","name_without_path":"VENDORID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43517","object_id":"column-43517","name":"ACTINDX","name_without_path":"ACTINDX","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43518","object_id":"column-43518","name":"ACTNUMST","name_without_path":"ACTNUMST","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"129","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43519","object_id":"column-43519","name":"ACTDESCR","name_without_path":"ACTDESCR","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"51","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43520","object_id":"column-43520","name":"VCHRNMBR","name_without_path":"VCHRNMBR","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43521","object_id":"column-43521","name":"APTVCHNM","name_without_path":"APTVCHNM","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43522","object_id":"column-43522","name":"DEBITAMT","name_without_path":"DEBITAMT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43523","object_id":"column-43523","name":"CRDTAMNT","name_without_path":"CRDTAMNT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43524","object_id":"column-43524","name":"CAM_Amount_Total","name_without_path":"CAM_Amount_Total","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43525","object_id":"column-43525","name":"DISTTYPE","name_without_path":"DISTTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43526","object_id":"column-43526","name":"SEQNUMBR","name_without_path":"SEQNUMBR","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43527","object_id":"column-43527","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKCAM30100","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DATE1","name":"DATE1"},{"path":null,"name_without_path":"TIME1","name":"TIME1"},{"path":null,"name_without_path":"VCHRNMBR","name":"VCHRNMBR"},{"path":null,"name_without_path":"ACTINDX","name":"ACTINDX"},{"path":null,"name_without_path":"APTVCHNM","name":"APTVCHNM"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"}],"custom_fields":{}},{"name":"AK2CAM30100","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DATE1","name":"DATE1"},{"path":null,"name_without_path":"TIME1","name":"TIME1"},{"path":null,"name_without_path":"CAM_ControlAccountIndex","name":"CAM_ControlAccountIndex"},{"path":null,"name_without_path":"ACTINDX","name":"ACTINDX"},{"path":null,"name_without_path":"VENDORID","name":"VENDORID"},{"path":null,"name_without_path":"VCHRNMBR","name":"VCHRNMBR"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK3CAM30100","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DATE1","name":"DATE1"},{"path":null,"name_without_path":"TIME1","name":"TIME1"},{"path":null,"name_without_path":"CAM_ControlAccountIndex","name":"CAM_ControlAccountIndex"},{"path":null,"name_without_path":"VENDORID","name":"VENDORID"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK4CAM30100","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DATE1","name":"DATE1"},{"path":null,"name_without_path":"TIME1","name":"TIME1"},{"path":null,"name_without_path":"ACTINDX","name":"ACTINDX"},{"path":null,"name_without_path":"VENDORID","name":"VENDORID"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK5CAM30100","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DATE1","name":"DATE1"},{"path":null,"name_without_path":"TIME1","name":"TIME1"},{"path":null,"name_without_path":"CAM_ControlAccountIndex","name":"CAM_ControlAccountIndex"},{"path":null,"name_without_path":"VCHRNMBR","name":"VCHRNMBR"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK6CAM30100","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DATE1","name":"DATE1"},{"path":null,"name_without_path":"TIME1","name":"TIME1"},{"path":null,"name_without_path":"CAM_ControlAccountIndex","name":"CAM_ControlAccountIndex"},{"path":null,"name_without_path":"ACTNUMST","name":"ACTNUMST"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK7CAM30100","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DATE1","name":"DATE1"},{"path":null,"name_without_path":"TIME1","name":"TIME1"},{"path":null,"name_without_path":"CAM_ControlAccountIndex","name":"CAM_ControlAccountIndex"},{"path":null,"name_without_path":"CAM_Amount_Total","name":"CAM_Amount_Total"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
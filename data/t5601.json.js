window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5601","name":"SVC05030","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SVC05030"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-75765","object_id":"column-75765","name":"Return_Record_Type","name_without_path":"Return_Record_Type","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75766","object_id":"column-75766","name":"RETDOCID","name_without_path":"RETDOCID","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75767","object_id":"column-75767","name":"LNSEQNBR","name_without_path":"LNSEQNBR","description":null,"is_pk":true,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75768","object_id":"column-75768","name":"LINITMTYP","name_without_path":"LINITMTYP","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"3","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75769","object_id":"column-75769","name":"SEQNUMBR","name_without_path":"SEQNUMBR","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75770","object_id":"column-75770","name":"SVC_Process_SEQ_Number","name_without_path":"SVC_Process_SEQ_Number","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75771","object_id":"column-75771","name":"SVC_Distribution_Type","name_without_path":"SVC_Distribution_Type","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75772","object_id":"column-75772","name":"DistRef","name_without_path":"DistRef","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"31","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75773","object_id":"column-75773","name":"ACTINDX","name_without_path":"ACTINDX","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75774","object_id":"column-75774","name":"DEBITAMT","name_without_path":"DEBITAMT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75775","object_id":"column-75775","name":"ORDBTAMT","name_without_path":"ORDBTAMT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75776","object_id":"column-75776","name":"CRDTAMNT","name_without_path":"CRDTAMNT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75777","object_id":"column-75777","name":"ORCRDAMT","name_without_path":"ORCRDAMT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75778","object_id":"column-75778","name":"CURRNIDX","name_without_path":"CURRNIDX","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75779","object_id":"column-75779","name":"TRXSORCE","name_without_path":"TRXSORCE","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"13","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75780","object_id":"column-75780","name":"POSTED","name_without_path":"POSTED","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75781","object_id":"column-75781","name":"POSTEDDT","name_without_path":"POSTEDDT","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75782","object_id":"column-75782","name":"CMPNTSEQ","name_without_path":"CMPNTSEQ","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-75783","object_id":"column-75783","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKSVC05030","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Return_Record_Type","name":"Return_Record_Type"},{"path":null,"name_without_path":"RETDOCID","name":"RETDOCID"},{"path":null,"name_without_path":"CMPNTSEQ","name":"CMPNTSEQ"},{"path":null,"name_without_path":"LNSEQNBR","name":"LNSEQNBR"},{"path":null,"name_without_path":"LINITMTYP","name":"LINITMTYP"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"},{"path":null,"name_without_path":"SVC_Distribution_Type","name":"SVC_Distribution_Type"}],"custom_fields":{}},{"name":"AK2SVC05030","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Return_Record_Type","name":"Return_Record_Type"},{"path":null,"name_without_path":"RETDOCID","name":"RETDOCID"},{"path":null,"name_without_path":"CMPNTSEQ","name":"CMPNTSEQ"},{"path":null,"name_without_path":"LNSEQNBR","name":"LNSEQNBR"},{"path":null,"name_without_path":"LINITMTYP","name":"LINITMTYP"},{"path":null,"name_without_path":"POSTED","name":"POSTED"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"},{"path":null,"name_without_path":"SVC_Distribution_Type","name":"SVC_Distribution_Type"}],"custom_fields":{}},{"name":"AK3SVC05030","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Return_Record_Type","name":"Return_Record_Type"},{"path":null,"name_without_path":"RETDOCID","name":"RETDOCID"},{"path":null,"name_without_path":"CMPNTSEQ","name":"CMPNTSEQ"},{"path":null,"name_without_path":"LNSEQNBR","name":"LNSEQNBR"},{"path":null,"name_without_path":"POSTED","name":"POSTED"},{"path":null,"name_without_path":"SVC_Distribution_Type","name":"SVC_Distribution_Type"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK4SVC05030","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Return_Record_Type","name":"Return_Record_Type"},{"path":null,"name_without_path":"RETDOCID","name":"RETDOCID"},{"path":null,"name_without_path":"LNSEQNBR","name":"LNSEQNBR"},{"path":null,"name_without_path":"POSTED","name":"POSTED"},{"path":null,"name_without_path":"LINITMTYP","name":"LINITMTYP"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"},{"path":null,"name_without_path":"SVC_Distribution_Type","name":"SVC_Distribution_Type"}],"custom_fields":{}},{"name":"AK5SVC05030","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Return_Record_Type","name":"Return_Record_Type"},{"path":null,"name_without_path":"RETDOCID","name":"RETDOCID"},{"path":null,"name_without_path":"CMPNTSEQ","name":"CMPNTSEQ"},{"path":null,"name_without_path":"LNSEQNBR","name":"LNSEQNBR"},{"path":null,"name_without_path":"LINITMTYP","name":"LINITMTYP"},{"path":null,"name_without_path":"SVC_Process_SEQ_Number","name":"SVC_Process_SEQ_Number"},{"path":null,"name_without_path":"POSTED","name":"POSTED"},{"path":null,"name_without_path":"SVC_Distribution_Type","name":"SVC_Distribution_Type"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"}],"custom_fields":{}},{"name":"AK6SVC05030","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Return_Record_Type","name":"Return_Record_Type"},{"path":null,"name_without_path":"RETDOCID","name":"RETDOCID"},{"path":null,"name_without_path":"POSTED","name":"POSTED"},{"path":null,"name_without_path":"SVC_Distribution_Type","name":"SVC_Distribution_Type"},{"path":null,"name_without_path":"ACTINDX","name":"ACTINDX"},{"path":null,"name_without_path":"CMPNTSEQ","name":"CMPNTSEQ"},{"path":null,"name_without_path":"LNSEQNBR","name":"LNSEQNBR"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
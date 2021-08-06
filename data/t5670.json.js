window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5670","name":"SVC30604","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SVC30604"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-77548","object_id":"column-77548","name":"CONSTS","name_without_path":"CONSTS","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77549","object_id":"column-77549","name":"CONTNBR","name_without_path":"CONTNBR","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"11","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77550","object_id":"column-77550","name":"LNSEQNBR","name_without_path":"LNSEQNBR","description":null,"is_pk":true,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77551","object_id":"column-77551","name":"YEAR1","name_without_path":"YEAR1","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77552","object_id":"column-77552","name":"PERIODID","name_without_path":"PERIODID","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77553","object_id":"column-77553","name":"LNITMSEQ","name_without_path":"LNITMSEQ","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77554","object_id":"column-77554","name":"Status","name_without_path":"Status","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77555","object_id":"column-77555","name":"POSTEDDT","name_without_path":"POSTEDDT","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77556","object_id":"column-77556","name":"Transaction_Date","name_without_path":"Transaction_Date","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77557","object_id":"column-77557","name":"USERID","name_without_path":"USERID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77558","object_id":"column-77558","name":"PSTDAMNT","name_without_path":"PSTDAMNT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77559","object_id":"column-77559","name":"Originating_PostedAmount","name_without_path":"Originating_PostedAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77560","object_id":"column-77560","name":"Source_Trx_Document_Type","name_without_path":"Source_Trx_Document_Type","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"3","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77561","object_id":"column-77561","name":"SourceTrxDocumentNumber","name_without_path":"SourceTrxDocumentNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77562","object_id":"column-77562","name":"Transaction_Amount","name_without_path":"Transaction_Amount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77563","object_id":"column-77563","name":"OrigTransactionAmount","name_without_path":"OrigTransactionAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77564","object_id":"column-77564","name":"SVC_Coverage_Start_Date","name_without_path":"SVC_Coverage_Start_Date","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77565","object_id":"column-77565","name":"SVC_Coverage_End_Date","name_without_path":"SVC_Coverage_End_Date","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77566","object_id":"column-77566","name":"SVC_Invoice_Credit_Amoun","name_without_path":"SVC_Invoice_Credit_Amoun","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77567","object_id":"column-77567","name":"OrigInvCreditAmt","name_without_path":"OrigInvCreditAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77568","object_id":"column-77568","name":"DSCDLRAM","name_without_path":"DSCDLRAM","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77569","object_id":"column-77569","name":"ORDDLRAT","name_without_path":"ORDDLRAT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77570","object_id":"column-77570","name":"Net_Transaction_Amount","name_without_path":"Net_Transaction_Amount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77571","object_id":"column-77571","name":"OrigNetTransactionAmount","name_without_path":"OrigNetTransactionAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77572","object_id":"column-77572","name":"SVC_Contract_Version","name_without_path":"SVC_Contract_Version","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-77573","object_id":"column-77573","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKSVC30604","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"CONSTS","name":"CONSTS"},{"path":null,"name_without_path":"CONTNBR","name":"CONTNBR"},{"path":null,"name_without_path":"SVC_Contract_Version","name":"SVC_Contract_Version"},{"path":null,"name_without_path":"LNSEQNBR","name":"LNSEQNBR"},{"path":null,"name_without_path":"YEAR1","name":"YEAR1"},{"path":null,"name_without_path":"PERIODID","name":"PERIODID"},{"path":null,"name_without_path":"LNITMSEQ","name":"LNITMSEQ"}],"custom_fields":{}},{"name":"AK2SVC30604","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Status","name":"Status"},{"path":null,"name_without_path":"YEAR1","name":"YEAR1"},{"path":null,"name_without_path":"PERIODID","name":"PERIODID"},{"path":null,"name_without_path":"CONSTS","name":"CONSTS"},{"path":null,"name_without_path":"CONTNBR","name":"CONTNBR"},{"path":null,"name_without_path":"SVC_Contract_Version","name":"SVC_Contract_Version"},{"path":null,"name_without_path":"LNSEQNBR","name":"LNSEQNBR"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK3SVC30604","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"CONSTS","name":"CONSTS"},{"path":null,"name_without_path":"CONTNBR","name":"CONTNBR"},{"path":null,"name_without_path":"SVC_Contract_Version","name":"SVC_Contract_Version"},{"path":null,"name_without_path":"Status","name":"Status"},{"path":null,"name_without_path":"LNSEQNBR","name":"LNSEQNBR"},{"path":null,"name_without_path":"YEAR1","name":"YEAR1"},{"path":null,"name_without_path":"PERIODID","name":"PERIODID"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK4SVC30604","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"CONSTS","name":"CONSTS"},{"path":null,"name_without_path":"CONTNBR","name":"CONTNBR"},{"path":null,"name_without_path":"SVC_Contract_Version","name":"SVC_Contract_Version"},{"path":null,"name_without_path":"LNSEQNBR","name":"LNSEQNBR"},{"path":null,"name_without_path":"YEAR1","name":"YEAR1"},{"path":null,"name_without_path":"PERIODID","name":"PERIODID"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK5SVC30604","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"YEAR1","name":"YEAR1"},{"path":null,"name_without_path":"PERIODID","name":"PERIODID"},{"path":null,"name_without_path":"CONSTS","name":"CONSTS"},{"path":null,"name_without_path":"CONTNBR","name":"CONTNBR"},{"path":null,"name_without_path":"SVC_Contract_Version","name":"SVC_Contract_Version"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK6SVC30604","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"CONSTS","name":"CONSTS"},{"path":null,"name_without_path":"CONTNBR","name":"CONTNBR"},{"path":null,"name_without_path":"SVC_Contract_Version","name":"SVC_Contract_Version"},{"path":null,"name_without_path":"YEAR1","name":"YEAR1"},{"path":null,"name_without_path":"PERIODID","name":"PERIODID"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
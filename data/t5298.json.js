window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5298","name":"PT10000","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"PT10000"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-68180","object_id":"column-68180","name":"PROJNAME","name_without_path":"PROJNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68181","object_id":"column-68181","name":"ITEMNMBR","name_without_path":"ITEMNMBR","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"31","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68182","object_id":"column-68182","name":"ITEMDESC","name_without_path":"ITEMDESC","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"101","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68183","object_id":"column-68183","name":"NONINVEN","name_without_path":"NONINVEN","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68184","object_id":"column-68184","name":"ProjDistDocSource","name_without_path":"ProjDistDocSource","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68185","object_id":"column-68185","name":"DOCNUMBR","name_without_path":"DOCNUMBR","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68186","object_id":"column-68186","name":"LNITMSEQ","name_without_path":"LNITMSEQ","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68187","object_id":"column-68187","name":"CMPNTSEQ","name_without_path":"CMPNTSEQ","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68188","object_id":"column-68188","name":"DSTSQNUM","name_without_path":"DSTSQNUM","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68189","object_id":"column-68189","name":"DOCDATE","name_without_path":"DOCDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68190","object_id":"column-68190","name":"Whom","name_without_path":"Whom","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"31","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68191","object_id":"column-68191","name":"ProjDistType","name_without_path":"ProjDistType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68192","object_id":"column-68192","name":"ProDistCategory","name_without_path":"ProDistCategory","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68193","object_id":"column-68193","name":"INCORDEC","name_without_path":"INCORDEC","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68194","object_id":"column-68194","name":"DISTAMNT","name_without_path":"DISTAMNT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68195","object_id":"column-68195","name":"QUANTITY","name_without_path":"QUANTITY","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68196","object_id":"column-68196","name":"BillableType","name_without_path":"BillableType","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68197","object_id":"column-68197","name":"DECPLQTY","name_without_path":"DECPLQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68198","object_id":"column-68198","name":"DECPLCUR","name_without_path":"DECPLCUR","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68199","object_id":"column-68199","name":"POSTED","name_without_path":"POSTED","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68200","object_id":"column-68200","name":"ProjDistBillStatus","name_without_path":"ProjDistBillStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68201","object_id":"column-68201","name":"PayCode","name_without_path":"PayCode","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"7","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68202","object_id":"column-68202","name":"PAYRATE","name_without_path":"PAYRATE","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68203","object_id":"column-68203","name":"SOPNUMBE","name_without_path":"SOPNUMBE","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68204","object_id":"column-68204","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKPT10000","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ProjDistDocSource","name":"ProjDistDocSource"},{"path":null,"name_without_path":"DOCNUMBR","name":"DOCNUMBR"},{"path":null,"name_without_path":"DSTSQNUM","name":"DSTSQNUM"}],"custom_fields":{}},{"name":"AK2PT10000","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PROJNAME","name":"PROJNAME"},{"path":null,"name_without_path":"POSTED","name":"POSTED"},{"path":null,"name_without_path":"ProjDistType","name":"ProjDistType"},{"path":null,"name_without_path":"DOCDATE","name":"DOCDATE"},{"path":null,"name_without_path":"DOCNUMBR","name":"DOCNUMBR"},{"path":null,"name_without_path":"ProjDistDocSource","name":"ProjDistDocSource"},{"path":null,"name_without_path":"DSTSQNUM","name":"DSTSQNUM"}],"custom_fields":{}},{"name":"AK3PT10000","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PROJNAME","name":"PROJNAME"},{"path":null,"name_without_path":"POSTED","name":"POSTED"},{"path":null,"name_without_path":"ProDistCategory","name":"ProDistCategory"},{"path":null,"name_without_path":"ITEMNMBR","name":"ITEMNMBR"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK4PT10000","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PROJNAME","name":"PROJNAME"},{"path":null,"name_without_path":"POSTED","name":"POSTED"},{"path":null,"name_without_path":"ProjDistType","name":"ProjDistType"},{"path":null,"name_without_path":"DOCDATE","name":"DOCDATE"},{"path":null,"name_without_path":"ProDistCategory","name":"ProDistCategory"},{"path":null,"name_without_path":"DOCNUMBR","name":"DOCNUMBR"},{"path":null,"name_without_path":"ProjDistDocSource","name":"ProjDistDocSource"},{"path":null,"name_without_path":"DSTSQNUM","name":"DSTSQNUM"}],"custom_fields":{}},{"name":"AK5PT10000","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DOCNUMBR","name":"DOCNUMBR"},{"path":null,"name_without_path":"ProjDistDocSource","name":"ProjDistDocSource"},{"path":null,"name_without_path":"PROJNAME","name":"PROJNAME"},{"path":null,"name_without_path":"DSTSQNUM","name":"DSTSQNUM"}],"custom_fields":{}},{"name":"AK6PT10000","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DOCNUMBR","name":"DOCNUMBR"},{"path":null,"name_without_path":"ProjDistDocSource","name":"ProjDistDocSource"},{"path":null,"name_without_path":"Whom","name":"Whom"},{"path":null,"name_without_path":"DOCDATE","name":"DOCDATE"},{"path":null,"name_without_path":"DSTSQNUM","name":"DSTSQNUM"}],"custom_fields":{}},{"name":"AK7PT10000","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DOCNUMBR","name":"DOCNUMBR"},{"path":null,"name_without_path":"ProjDistDocSource","name":"ProjDistDocSource"},{"path":null,"name_without_path":"DOCDATE","name":"DOCDATE"},{"path":null,"name_without_path":"Whom","name":"Whom"},{"path":null,"name_without_path":"DSTSQNUM","name":"DSTSQNUM"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
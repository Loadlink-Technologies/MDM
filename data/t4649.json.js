window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4649","name":"IV40202","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"IV40202"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-48875","object_id":"column-48875","name":"UOMSCHDL","name_without_path":"UOMSCHDL","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"11","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-48876","object_id":"column-48876","name":"UOFM","name_without_path":"UOFM","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"9","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-48877","object_id":"column-48877","name":"SEQNUMBR","name_without_path":"SEQNUMBR","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-48878","object_id":"column-48878","name":"EQUIVUOM","name_without_path":"EQUIVUOM","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"9","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-48879","object_id":"column-48879","name":"EQUOMQTY","name_without_path":"EQUOMQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-48880","object_id":"column-48880","name":"QTYBSUOM","name_without_path":"QTYBSUOM","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-48881","object_id":"column-48881","name":"UOFMLONGDESC","name_without_path":"UOFMLONGDESC","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-48882","object_id":"column-48882","name":"DEX_ROW_TS","name_without_path":"DEX_ROW_TS","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-48883","object_id":"column-48883","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKIV40202","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"UOMSCHDL","name":"UOMSCHDL"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"}],"custom_fields":{}},{"name":"AK2IV40202","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"UOMSCHDL","name":"UOMSCHDL"},{"path":null,"name_without_path":"UOFM","name":"UOFM"},{"path":null,"name_without_path":"EQUIVUOM","name":"EQUIVUOM"}],"custom_fields":{}},{"name":"AK3IV40202","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"UOMSCHDL","name":"UOMSCHDL"},{"path":null,"name_without_path":"EQUIVUOM","name":"EQUIVUOM"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK4IV40202","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"UOMSCHDL","name":"UOMSCHDL"},{"path":null,"name_without_path":"QTYBSUOM","name":"QTYBSUOM"},{"path":null,"name_without_path":"UOFM","name":"UOFM"},{"path":null,"name_without_path":"EQUIVUOM","name":"EQUIVUOM"}],"custom_fields":{}}],"triggers":[{"name":"zDT_IV40202C","description":null,"action":"After Insert ","custom_fields":{}},{"name":"zDT_IV40202D","description":null,"action":"After Delete ","custom_fields":{}},{"name":"zDT_IV40202U","description":null,"action":"After Update ","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-27 14:57"};
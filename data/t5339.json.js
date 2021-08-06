window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5339","name":"RM00105","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"RM00105"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-69558","object_id":"column-69558","name":"CPRCSTNM","name_without_path":"CPRCSTNM","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t5330","name":"RM00101","name_show_schema":"dbo.RM00101"}]},{"id":"column-69559","object_id":"column-69559","name":"NAALLOWRECEIPTS","name_without_path":"NAALLOWRECEIPTS","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-69560","object_id":"column-69560","name":"NACREDITCHECK","name_without_path":"NACREDITCHECK","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-69561","object_id":"column-69561","name":"NAFINANCECHARGE","name_without_path":"NAFINANCECHARGE","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-69562","object_id":"column-69562","name":"NAHOLDINACTIVE","name_without_path":"NAHOLDINACTIVE","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-69563","object_id":"column-69563","name":"NADEFPARENTVEN","name_without_path":"NADEFPARENTVEN","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-69564","object_id":"column-69564","name":"NOTEINDX","name_without_path":"NOTEINDX","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-69565","object_id":"column-69565","name":"CREATDDT","name_without_path":"CREATDDT","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-69566","object_id":"column-69566","name":"MODIFDT","name_without_path":"MODIFDT","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-69567","object_id":"column-69567","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"RM_NationalAccounts_MSTR_FKC","title":null,"description":null,"is_user_defined":false,"foreign_table":"RM00105","foreign_table_show_schema":"dbo.RM00105","foreign_table_verbose":"RM00105","foreign_table_verbose_show_schema":"dbo.RM00105","foreign_table_object_id":"t5339","primary_table":"RM00101","primary_table_show_schema":"dbo.RM00101","primary_table_verbose":"RM00101","primary_table_verbose_show_schema":"dbo.RM00101","primary_table_object_id":"t5330","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"CUSTNMBR","foreign_column_path":null,"foreign_column":"CPRCSTNM"}],"custom_fields":{}}],"unique_keys":[{"name":"PKRM00105","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"CPRCSTNM","name":"CPRCSTNM"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
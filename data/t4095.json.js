window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4095","name":"UserDL","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"UserDL"},{"field":"Type","value":"Table"},{"field":"Module","value":[{"_type":"link","name":"Customer","id":"m107"}]}],"columns":[{"id":"column-40347","object_id":"column-40347","name":"DLUserID","name_without_path":"DLUserID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t4108","name":"Users","name_show_schema":"dbo.Users"}]},{"id":"column-40348","object_id":"column-40348","name":"CustCd","name_without_path":"CustCd","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"7","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3765","name":"Customer","name_show_schema":"dbo.Customer"}]},{"id":"column-40349","object_id":"column-40349","name":"ServiceAdmin","name_without_path":"ServiceAdmin","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40350","object_id":"column-40350","name":"Status","name_without_path":"Status","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40351","object_id":"column-40351","name":"UpdatedOn","name_without_path":"UpdatedOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40352","object_id":"column-40352","name":"UpdatedBy","name_without_path":"UpdatedBy","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3901","name":"Maint_Employee","name_show_schema":"dbo.Maint_Employee"}]},{"id":"column-40353","object_id":"column-40353","name":"DLExternalUserID","name_without_path":"DLExternalUserID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40354","object_id":"column-40354","name":"DLLastUsedOn","name_without_path":"DLLastUsedOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_UserDL_Customer","title":null,"description":null,"is_user_defined":false,"foreign_table":"UserDL","foreign_table_show_schema":"dbo.UserDL","foreign_table_verbose":"UserDL","foreign_table_verbose_show_schema":"dbo.UserDL","foreign_table_object_id":"t4095","primary_table":"Customer","primary_table_show_schema":"dbo.Customer","primary_table_verbose":"Customer","primary_table_verbose_show_schema":"dbo.Customer","primary_table_object_id":"t3765","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"CUST_CD","foreign_column_path":null,"foreign_column":"CustCd"}],"custom_fields":{}},{"name":"FK_UserDL_Maint_Employee_Update","title":null,"description":null,"is_user_defined":false,"foreign_table":"UserDL","foreign_table_show_schema":"dbo.UserDL","foreign_table_verbose":"UserDL","foreign_table_verbose_show_schema":"dbo.UserDL","foreign_table_object_id":"t4095","primary_table":"Maint_Employee","primary_table_show_schema":"dbo.Maint_Employee","primary_table_verbose":"Maint_Employee","primary_table_verbose_show_schema":"dbo.Maint_Employee","primary_table_object_id":"t3901","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"EmpID","foreign_column_path":null,"foreign_column":"UpdatedBy"}],"custom_fields":{}},{"name":"FK_UserDL_Users","title":null,"description":null,"is_user_defined":false,"foreign_table":"UserDL","foreign_table_show_schema":"dbo.UserDL","foreign_table_verbose":"UserDL","foreign_table_verbose_show_schema":"dbo.UserDL","foreign_table_object_id":"t4095","primary_table":"Users","primary_table_show_schema":"dbo.Users","primary_table_verbose":"Users","primary_table_verbose_show_schema":"dbo.Users","primary_table_object_id":"t4108","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"UserId","foreign_column_path":null,"foreign_column":"DLUserID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_UserDL","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DLUserID","name":"DLUserID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
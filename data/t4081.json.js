window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4081","name":"TVCallHistory","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"TVCallHistory"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-40277","object_id":"column-40277","name":"TVCallID","name_without_path":"TVCallID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40278","object_id":"column-40278","name":"TVCallHistoryID","name_without_path":"TVCallHistoryID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40279","object_id":"column-40279","name":"EmpID","name_without_path":"EmpID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3901","name":"Maint_Employee","name_show_schema":"dbo.Maint_Employee"}]},{"id":"column-40280","object_id":"column-40280","name":"Direction","name_without_path":"Direction","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40281","object_id":"column-40281","name":"CallType","name_without_path":"CallType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t4085","name":"TVCallType","name_show_schema":"dbo.TVCallType"}]},{"id":"column-40282","object_id":"column-40282","name":"ContactID","name_without_path":"ContactID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40283","object_id":"column-40283","name":"ScheduledCallID","name_without_path":"ScheduledCallID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40284","object_id":"column-40284","name":"StartTime","name_without_path":"StartTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40285","object_id":"column-40285","name":"EndTime","name_without_path":"EndTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40286","object_id":"column-40286","name":"Name","name_without_path":"Name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40287","object_id":"column-40287","name":"Number","name_without_path":"Number","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40288","object_id":"column-40288","name":"Ignored","name_without_path":"Ignored","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40289","object_id":"column-40289","name":"Created","name_without_path":"Created","description":null,"is_pk":false,"is_identity":false,"data_type":"smalldatetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40290","object_id":"column-40290","name":"Updated","name_without_path":"Updated","description":null,"is_pk":false,"is_identity":false,"data_type":"smalldatetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40291","object_id":"column-40291","name":"Result","name_without_path":"Result","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t4083","name":"TVCallResult","name_show_schema":"dbo.TVCallResult"}]}],"relations":[{"name":"fk_TVCallHistory_MaintEmployee","title":null,"description":null,"is_user_defined":false,"foreign_table":"TVCallHistory","foreign_table_show_schema":"dbo.TVCallHistory","foreign_table_verbose":"TVCallHistory","foreign_table_verbose_show_schema":"dbo.TVCallHistory","foreign_table_object_id":"t4081","primary_table":"Maint_Employee","primary_table_show_schema":"dbo.Maint_Employee","primary_table_verbose":"Maint_Employee","primary_table_verbose_show_schema":"dbo.Maint_Employee","primary_table_object_id":"t3901","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"EmpID","foreign_column_path":null,"foreign_column":"EmpID"}],"custom_fields":{}},{"name":"fk_TVCallHistory_TVCallResult","title":null,"description":null,"is_user_defined":false,"foreign_table":"TVCallHistory","foreign_table_show_schema":"dbo.TVCallHistory","foreign_table_verbose":"TVCallHistory","foreign_table_verbose_show_schema":"dbo.TVCallHistory","foreign_table_object_id":"t4081","primary_table":"TVCallResult","primary_table_show_schema":"dbo.TVCallResult","primary_table_verbose":"TVCallResult","primary_table_verbose_show_schema":"dbo.TVCallResult","primary_table_object_id":"t4083","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"Result","foreign_column_path":null,"foreign_column":"Result"}],"custom_fields":{}},{"name":"fk_TVCallHistory_TVCallType","title":null,"description":null,"is_user_defined":false,"foreign_table":"TVCallHistory","foreign_table_show_schema":"dbo.TVCallHistory","foreign_table_verbose":"TVCallHistory","foreign_table_verbose_show_schema":"dbo.TVCallHistory","foreign_table_object_id":"t4081","primary_table":"TVCallType","primary_table_show_schema":"dbo.TVCallType","primary_table_verbose":"TVCallType","primary_table_verbose_show_schema":"dbo.TVCallType","primary_table_object_id":"t4085","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"CallType","foreign_column_path":null,"foreign_column":"CallType"}],"custom_fields":{}},{"name":"fk_TVCallHistoryNote_TVCallHistory","title":null,"description":null,"is_user_defined":false,"foreign_table":"TVCallHistoryNote","foreign_table_show_schema":"dbo.TVCallHistoryNote","foreign_table_verbose":"TVCallHistoryNote","foreign_table_verbose_show_schema":"dbo.TVCallHistoryNote","foreign_table_object_id":"t4082","primary_table":"TVCallHistory","primary_table_show_schema":"dbo.TVCallHistory","primary_table_verbose":"TVCallHistory","primary_table_verbose_show_schema":"dbo.TVCallHistory","primary_table_object_id":"t4081","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"TVCallID","foreign_column_path":null,"foreign_column":"TVCallID"}],"custom_fields":{}}],"unique_keys":[{"name":"pk_TVCallHistory","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"TVCallID","name":"TVCallID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
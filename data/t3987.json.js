window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3987","name":"ServiceFunction","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"ServiceFunction"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-38416","object_id":"column-38416","name":"ServiceFunctionID","name_without_path":"ServiceFunctionID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-38417","object_id":"column-38417","name":"ServiceID","name_without_path":"ServiceID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3990","name":"Services","name_show_schema":"dbo.Services"}]},{"id":"column-38418","object_id":"column-38418","name":"FunctionName","name_without_path":"FunctionName","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-38419","object_id":"column-38419","name":"FunctionValue","name_without_path":"FunctionValue","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-38420","object_id":"column-38420","name":"StartDate","name_without_path":"StartDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_ServiceFunction_Services","title":null,"description":null,"is_user_defined":false,"foreign_table":"ServiceFunction","foreign_table_show_schema":"dbo.ServiceFunction","foreign_table_verbose":"ServiceFunction","foreign_table_verbose_show_schema":"dbo.ServiceFunction","foreign_table_object_id":"t3987","primary_table":"Services","primary_table_show_schema":"dbo.Services","primary_table_verbose":"Services","primary_table_verbose_show_schema":"dbo.Services","primary_table_object_id":"t3990","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ServiceID","foreign_column_path":null,"foreign_column":"ServiceID"}],"custom_fields":{}},{"name":"FK_SubSrvFunction_ServiceFunction","title":null,"description":null,"is_user_defined":false,"foreign_table":"SubSrvFunction","foreign_table_show_schema":"dbo.SubSrvFunction","foreign_table_verbose":"SubSrvFunction","foreign_table_verbose_show_schema":"dbo.SubSrvFunction","foreign_table_object_id":"t4001","primary_table":"ServiceFunction","primary_table_show_schema":"dbo.ServiceFunction","primary_table_verbose":"ServiceFunction","primary_table_verbose_show_schema":"dbo.ServiceFunction","primary_table_object_id":"t3987","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ServiceFunctionID","foreign_column_path":null,"foreign_column":"ServiceFunctionID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_ServiceFunction","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ServiceFunctionID","name":"ServiceFunctionID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
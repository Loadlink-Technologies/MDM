window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4001","name":"SubSrvFunction","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SubSrvFunction"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-38502","object_id":"column-38502","name":"SubSrvFunctionID","name_without_path":"SubSrvFunctionID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-38503","object_id":"column-38503","name":"SubServiceID","name_without_path":"SubServiceID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t4000","name":"SubService","name_show_schema":"dbo.SubService"}]},{"id":"column-38504","object_id":"column-38504","name":"ServiceFunctionID","name_without_path":"ServiceFunctionID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3987","name":"ServiceFunction","name_show_schema":"dbo.ServiceFunction"}]}],"relations":[{"name":"FK_SubSrvFunction_ServiceFunction","title":null,"description":null,"is_user_defined":false,"foreign_table":"SubSrvFunction","foreign_table_show_schema":"dbo.SubSrvFunction","foreign_table_verbose":"SubSrvFunction","foreign_table_verbose_show_schema":"dbo.SubSrvFunction","foreign_table_object_id":"t4001","primary_table":"ServiceFunction","primary_table_show_schema":"dbo.ServiceFunction","primary_table_verbose":"ServiceFunction","primary_table_verbose_show_schema":"dbo.ServiceFunction","primary_table_object_id":"t3987","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ServiceFunctionID","foreign_column_path":null,"foreign_column":"ServiceFunctionID"}],"custom_fields":{}},{"name":"FK_SubSrvFunction_SubService","title":null,"description":null,"is_user_defined":false,"foreign_table":"SubSrvFunction","foreign_table_show_schema":"dbo.SubSrvFunction","foreign_table_verbose":"SubSrvFunction","foreign_table_verbose_show_schema":"dbo.SubSrvFunction","foreign_table_object_id":"t4001","primary_table":"SubService","primary_table_show_schema":"dbo.SubService","primary_table_verbose":"SubService","primary_table_verbose_show_schema":"dbo.SubService","primary_table_object_id":"t4000","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"SubServiceID","foreign_column_path":null,"foreign_column":"SubServiceID"}],"custom_fields":{}},{"name":"FK_SrvRoleDefaultSubSrvFunction_SubSrvFunction","title":null,"description":null,"is_user_defined":false,"foreign_table":"SrvRoleDefaultSubSrvFunction","foreign_table_show_schema":"dbo.SrvRoleDefaultSubSrvFunction","foreign_table_verbose":"SrvRoleDefaultSubSrvFunction","foreign_table_verbose_show_schema":"dbo.SrvRoleDefaultSubSrvFunction","foreign_table_object_id":"t3996","primary_table":"SubSrvFunction","primary_table_show_schema":"dbo.SubSrvFunction","primary_table_verbose":"SubSrvFunction","primary_table_verbose_show_schema":"dbo.SubSrvFunction","primary_table_object_id":"t4001","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"SubSrvFunctionID","foreign_column_path":null,"foreign_column":"SubSrvFunctionID"}],"custom_fields":{}},{"name":"FK_SrvRoleSubSrvFunction_SubSrvFunction","title":null,"description":null,"is_user_defined":false,"foreign_table":"SrvRoleSubSrvFunction","foreign_table_show_schema":"dbo.SrvRoleSubSrvFunction","foreign_table_verbose":"SrvRoleSubSrvFunction","foreign_table_verbose_show_schema":"dbo.SrvRoleSubSrvFunction","foreign_table_object_id":"t3997","primary_table":"SubSrvFunction","primary_table_show_schema":"dbo.SubSrvFunction","primary_table_verbose":"SubSrvFunction","primary_table_verbose_show_schema":"dbo.SubSrvFunction","primary_table_object_id":"t4001","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"SubSrvFunctionID","foreign_column_path":null,"foreign_column":"SubSrvFunctionID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_SubSrvFunction","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"SubSrvFunctionID","name":"SubSrvFunctionID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
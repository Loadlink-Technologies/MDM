window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4086","name":"TVEmployeeConfig","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"TVEmployeeConfig"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-40300","object_id":"column-40300","name":"EmpID","name_without_path":"EmpID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3901","name":"Maint_Employee","name_show_schema":"dbo.Maint_Employee"}]},{"id":"column-40301","object_id":"column-40301","name":"TVStationID","name_without_path":"TVStationID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40302","object_id":"column-40302","name":"TVUserName","name_without_path":"TVUserName","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"fk_TVEmployeeConfig_MaintEmployee","title":null,"description":null,"is_user_defined":false,"foreign_table":"TVEmployeeConfig","foreign_table_show_schema":"dbo.TVEmployeeConfig","foreign_table_verbose":"TVEmployeeConfig","foreign_table_verbose_show_schema":"dbo.TVEmployeeConfig","foreign_table_object_id":"t4086","primary_table":"Maint_Employee","primary_table_show_schema":"dbo.Maint_Employee","primary_table_verbose":"Maint_Employee","primary_table_verbose_show_schema":"dbo.Maint_Employee","primary_table_object_id":"t3901","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"EmpID","foreign_column_path":null,"foreign_column":"EmpID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK__TVEmploy__AF2DBA7903A383F7","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"EmpID","name":"EmpID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
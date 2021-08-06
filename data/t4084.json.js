window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4084","name":"TVCallStatus","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"TVCallStatus"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-40296","object_id":"column-40296","name":"Status","name_without_path":"Status","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40297","object_id":"column-40297","name":"Name","name_without_path":"Name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"fk_TVCall_TVCallStatus","title":null,"description":null,"is_user_defined":false,"foreign_table":"TVCall","foreign_table_show_schema":"dbo.TVCall","foreign_table_verbose":"TVCall","foreign_table_verbose_show_schema":"dbo.TVCall","foreign_table_object_id":"t4079","primary_table":"TVCallStatus","primary_table_show_schema":"dbo.TVCallStatus","primary_table_verbose":"TVCallStatus","primary_table_verbose_show_schema":"dbo.TVCallStatus","primary_table_object_id":"t4084","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"Status","foreign_column_path":null,"foreign_column":"Status"}],"custom_fields":{}}],"unique_keys":[{"name":"PK__TVCallSt__3A15923E0C38C9F8","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Status","name":"Status"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
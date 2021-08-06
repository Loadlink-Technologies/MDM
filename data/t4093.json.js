window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4093","name":"UserDefinedFieldType","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"UserDefinedFieldType"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-40341","object_id":"column-40341","name":"ID","name_without_path":"ID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40342","object_id":"column-40342","name":"Name","name_without_path":"Name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"fk_UserDefinedFieldType","title":null,"description":null,"is_user_defined":false,"foreign_table":"UserDefinedField","foreign_table_show_schema":"dbo.UserDefinedField","foreign_table_verbose":"UserDefinedField","foreign_table_verbose_show_schema":"dbo.UserDefinedField","foreign_table_object_id":"t4090","primary_table":"UserDefinedFieldType","primary_table_show_schema":"dbo.UserDefinedFieldType","primary_table_verbose":"UserDefinedFieldType","primary_table_verbose_show_schema":"dbo.UserDefinedFieldType","primary_table_object_id":"t4093","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ID","foreign_column_path":null,"foreign_column":"Type"}],"custom_fields":{}}],"unique_keys":[{"name":"PK__UserDefi__3214EC277D0AC9AA","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ID","name":"ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
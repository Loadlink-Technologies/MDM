window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4294","name":"AT_ColumnNames","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"AT_ColumnNames"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-43077","object_id":"column-43077","name":"SystemTableName","name_without_path":"SystemTableName","description":null,"is_pk":true,"is_identity":false,"data_type":"varchar","data_length":"500","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t4297","name":"AT_TableNames","name_show_schema":"dbo.AT_TableNames"}]},{"id":"column-43078","object_id":"column-43078","name":"SystemColumnName","name_without_path":"SystemColumnName","description":null,"is_pk":true,"is_identity":false,"data_type":"varchar","data_length":"400","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-43079","object_id":"column-43079","name":"UserColumnName","name_without_path":"UserColumnName","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"500","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_AT_ColumnNames_AT_TableNames","title":null,"description":null,"is_user_defined":false,"foreign_table":"AT_ColumnNames","foreign_table_show_schema":"dbo.AT_ColumnNames","foreign_table_verbose":"AT_ColumnNames","foreign_table_verbose_show_schema":"dbo.AT_ColumnNames","foreign_table_object_id":"t4294","primary_table":"AT_TableNames","primary_table_show_schema":"dbo.AT_TableNames","primary_table_verbose":"AT_TableNames","primary_table_verbose_show_schema":"dbo.AT_TableNames","primary_table_object_id":"t4297","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"SystemTableName","foreign_column_path":null,"foreign_column":"SystemTableName"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_AT_ColumnNames","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"SystemTableName","name":"SystemTableName"},{"path":null,"name_without_path":"SystemColumnName","name":"SystemColumnName"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
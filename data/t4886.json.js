window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4886","name":"NodusSyncTableFilters","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NodusSyncTableFilters"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-54935","object_id":"column-54935","name":"SyncClass","name_without_path":"SyncClass","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t4882","name":"NodusSyncClassTables","name_show_schema":"dbo.NodusSyncClassTables"},{"id":"t4884","name":"NodusSynchronizers","name_show_schema":"dbo.NodusSynchronizers"}]},{"id":"column-54936","object_id":"column-54936","name":"StoreID","name_without_path":"StoreID","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t4884","name":"NodusSynchronizers","name_show_schema":"dbo.NodusSynchronizers"}]},{"id":"column-54937","object_id":"column-54937","name":"TableName","name_without_path":"TableName","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t4882","name":"NodusSyncClassTables","name_show_schema":"dbo.NodusSyncClassTables"}]},{"id":"column-54938","object_id":"column-54938","name":"Filter","name_without_path":"Filter","description":null,"is_pk":false,"is_identity":false,"data_type":"ntext","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_NodusSyncTableFilters_NodusSyncClassTables","title":null,"description":null,"is_user_defined":false,"foreign_table":"NodusSyncTableFilters","foreign_table_show_schema":"dbo.NodusSyncTableFilters","foreign_table_verbose":"NodusSyncTableFilters","foreign_table_verbose_show_schema":"dbo.NodusSyncTableFilters","foreign_table_object_id":"t4886","primary_table":"NodusSyncClassTables","primary_table_show_schema":"dbo.NodusSyncClassTables","primary_table_verbose":"NodusSyncClassTables","primary_table_verbose_show_schema":"dbo.NodusSyncClassTables","primary_table_object_id":"t4882","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"SyncClass","foreign_column_path":null,"foreign_column":"SyncClass"},{"primary_column_path":null,"primary_column":"TableName","foreign_column_path":null,"foreign_column":"TableName"}],"custom_fields":{}},{"name":"FK_NodusSyncTableFilters_NodusSynchronizers","title":null,"description":null,"is_user_defined":false,"foreign_table":"NodusSyncTableFilters","foreign_table_show_schema":"dbo.NodusSyncTableFilters","foreign_table_verbose":"NodusSyncTableFilters","foreign_table_verbose_show_schema":"dbo.NodusSyncTableFilters","foreign_table_object_id":"t4886","primary_table":"NodusSynchronizers","primary_table_show_schema":"dbo.NodusSynchronizers","primary_table_verbose":"NodusSynchronizers","primary_table_verbose_show_schema":"dbo.NodusSynchronizers","primary_table_object_id":"t4884","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"SyncClass","foreign_column_path":null,"foreign_column":"SyncClass"},{"primary_column_path":null,"primary_column":"StoreID","foreign_column_path":null,"foreign_column":"StoreID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_NodusSyncTableFilters","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"SyncClass","name":"SyncClass"},{"path":null,"name_without_path":"StoreID","name":"StoreID"},{"path":null,"name_without_path":"TableName","name":"TableName"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
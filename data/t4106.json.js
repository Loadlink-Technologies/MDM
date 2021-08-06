window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4106","name":"UserPromoEvents","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"UserPromoEvents"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-40476","object_id":"column-40476","name":"EventLocationID","name_without_path":"EventLocationID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40477","object_id":"column-40477","name":"UserID","name_without_path":"UserID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t4108","name":"Users","name_show_schema":"dbo.Users"}]},{"id":"column-40478","object_id":"column-40478","name":"CreatedBy","name_without_path":"CreatedBy","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40479","object_id":"column-40479","name":"CreatedOn","name_without_path":"CreatedOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40480","object_id":"column-40480","name":"UpdatedBy","name_without_path":"UpdatedBy","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-40481","object_id":"column-40481","name":"UpdatedOn","name_without_path":"UpdatedOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_UserPromoEvents_Users","title":null,"description":null,"is_user_defined":false,"foreign_table":"UserPromoEvents","foreign_table_show_schema":"dbo.UserPromoEvents","foreign_table_verbose":"UserPromoEvents","foreign_table_verbose_show_schema":"dbo.UserPromoEvents","foreign_table_object_id":"t4106","primary_table":"Users","primary_table_show_schema":"dbo.Users","primary_table_verbose":"Users","primary_table_verbose_show_schema":"dbo.Users","primary_table_object_id":"t4108","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"UserId","foreign_column_path":null,"foreign_column":"UserID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_UserPromoEvents","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"EventLocationID","name":"EventLocationID"},{"path":null,"name_without_path":"UserID","name":"UserID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
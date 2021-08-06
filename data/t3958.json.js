window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3958","name":"ProductTitle","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"ProductTitle"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-37947","object_id":"column-37947","name":"ProductID","name_without_path":"ProductID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37948","object_id":"column-37948","name":"ProductDesc","name_without_path":"ProductDesc","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_ContactProductSalesProperties_ProductTitle","title":null,"description":null,"is_user_defined":false,"foreign_table":"ContactProductSalesProperties","foreign_table_show_schema":"dbo.ContactProductSalesProperties","foreign_table_verbose":"ContactProductSalesProperties","foreign_table_verbose_show_schema":"dbo.ContactProductSalesProperties","foreign_table_object_id":"t3757","primary_table":"ProductTitle","primary_table_show_schema":"dbo.ProductTitle","primary_table_verbose":"ProductTitle","primary_table_verbose_show_schema":"dbo.ProductTitle","primary_table_object_id":"t3958","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ProductID","foreign_column_path":null,"foreign_column":"ProductID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_ProductTitle_1__69","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ProductID","name":"ProductID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
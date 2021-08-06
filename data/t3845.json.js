window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3845","name":"InsuranceCompany","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"InsuranceCompany"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-36663","object_id":"column-36663","name":"InsCompanyID","name_without_path":"InsCompanyID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36664","object_id":"column-36664","name":"InsCompany","name_without_path":"InsCompany","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36665","object_id":"column-36665","name":"Status","name_without_path":"Status","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36666","object_id":"column-36666","name":"CreatedBy","name_without_path":"CreatedBy","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36667","object_id":"column-36667","name":"CreatedOn","name_without_path":"CreatedOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36668","object_id":"column-36668","name":"UpdatedBy","name_without_path":"UpdatedBy","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36669","object_id":"column-36669","name":"UpdatedOn","name_without_path":"UpdatedOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36670","object_id":"column-36670","name":"SF_InsCompanyID","name_without_path":"SF_InsCompanyID","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_InsuranceInfo_InsuranceCompany","title":null,"description":null,"is_user_defined":false,"foreign_table":"InsuranceInfo","foreign_table_show_schema":"dbo.InsuranceInfo","foreign_table_verbose":"InsuranceInfo","foreign_table_verbose_show_schema":"dbo.InsuranceInfo","foreign_table_object_id":"t3848","primary_table":"InsuranceCompany","primary_table_show_schema":"dbo.InsuranceCompany","primary_table_verbose":"InsuranceCompany","primary_table_verbose_show_schema":"dbo.InsuranceCompany","primary_table_object_id":"t3845","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"InsCompanyID","foreign_column_path":null,"foreign_column":"InsCompanyID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_InsuranceCompany","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"InsCompanyID","name":"InsCompanyID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
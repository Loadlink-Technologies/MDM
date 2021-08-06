window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3848","name":"InsuranceInfo","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"InsuranceInfo"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-36679","object_id":"column-36679","name":"InsuranceID","name_without_path":"InsuranceID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36680","object_id":"column-36680","name":"InsCompanyID","name_without_path":"InsCompanyID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3845","name":"InsuranceCompany","name_show_schema":"dbo.InsuranceCompany"}]},{"id":"column-36681","object_id":"column-36681","name":"IAgentID","name_without_path":"IAgentID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t3844","name":"InsuranceAgent","name_show_schema":"dbo.InsuranceAgent"}]},{"id":"column-36682","object_id":"column-36682","name":"InsExDate","name_without_path":"InsExDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36683","object_id":"column-36683","name":"PLCoverage","name_without_path":"PLCoverage","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36684","object_id":"column-36684","name":"CICoverage","name_without_path":"CICoverage","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36685","object_id":"column-36685","name":"Policy","name_without_path":"Policy","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36686","object_id":"column-36686","name":"InsCompanyID2","name_without_path":"InsCompanyID2","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36687","object_id":"column-36687","name":"IAgentID2","name_without_path":"IAgentID2","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36688","object_id":"column-36688","name":"Policy2","name_without_path":"Policy2","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36689","object_id":"column-36689","name":"InsExDate2","name_without_path":"InsExDate2","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36690","object_id":"column-36690","name":"InsExclude","name_without_path":"InsExclude","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36691","object_id":"column-36691","name":"UpdatedBy","name_without_path":"UpdatedBy","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36692","object_id":"column-36692","name":"UpdatedOn","name_without_path":"UpdatedOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36693","object_id":"column-36693","name":"Note","name_without_path":"Note","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"128","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36694","object_id":"column-36694","name":"CICoverage2","name_without_path":"CICoverage2","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_InsuranceInfo_InsuranceAgent","title":null,"description":null,"is_user_defined":false,"foreign_table":"InsuranceInfo","foreign_table_show_schema":"dbo.InsuranceInfo","foreign_table_verbose":"InsuranceInfo","foreign_table_verbose_show_schema":"dbo.InsuranceInfo","foreign_table_object_id":"t3848","primary_table":"InsuranceAgent","primary_table_show_schema":"dbo.InsuranceAgent","primary_table_verbose":"InsuranceAgent","primary_table_verbose_show_schema":"dbo.InsuranceAgent","primary_table_object_id":"t3844","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"IAgentID","foreign_column_path":null,"foreign_column":"IAgentID"}],"custom_fields":{}},{"name":"FK_InsuranceInfo_InsuranceCompany","title":null,"description":null,"is_user_defined":false,"foreign_table":"InsuranceInfo","foreign_table_show_schema":"dbo.InsuranceInfo","foreign_table_verbose":"InsuranceInfo","foreign_table_verbose_show_schema":"dbo.InsuranceInfo","foreign_table_object_id":"t3848","primary_table":"InsuranceCompany","primary_table_show_schema":"dbo.InsuranceCompany","primary_table_verbose":"InsuranceCompany","primary_table_verbose_show_schema":"dbo.InsuranceCompany","primary_table_object_id":"t3845","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"InsCompanyID","foreign_column_path":null,"foreign_column":"InsCompanyID"}],"custom_fields":{}},{"name":"FK_InsuranceCust_InsuranceInfo","title":null,"description":null,"is_user_defined":false,"foreign_table":"InsuranceCust","foreign_table_show_schema":"dbo.InsuranceCust","foreign_table_verbose":"InsuranceCust","foreign_table_verbose_show_schema":"dbo.InsuranceCust","foreign_table_object_id":"t3846","primary_table":"InsuranceInfo","primary_table_show_schema":"dbo.InsuranceInfo","primary_table_verbose":"InsuranceInfo","primary_table_verbose_show_schema":"dbo.InsuranceInfo","primary_table_object_id":"t3848","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"InsuranceID","foreign_column_path":null,"foreign_column":"InsuranceID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_InsuranceInfo","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"InsuranceID","name":"InsuranceID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
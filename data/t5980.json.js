window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5980","name":"WSPolicyBehaviorSelectionParameter","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"WSPolicyBehaviorSelectionParameter"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-83727","object_id":"column-83727","name":"PolicyId","name_without_path":"PolicyId","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t5979","name":"WSPolicyBehaviorSelection","name_show_schema":"dbo.WSPolicyBehaviorSelection"}]},{"id":"column-83728","object_id":"column-83728","name":"BehaviorId","name_without_path":"BehaviorId","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t5976","name":"WSParameter","name_show_schema":"dbo.WSParameter"},{"id":"t5979","name":"WSPolicyBehaviorSelection","name_show_schema":"dbo.WSPolicyBehaviorSelection"}]},{"id":"column-83729","object_id":"column-83729","name":"RoleId","name_without_path":"RoleId","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t5979","name":"WSPolicyBehaviorSelection","name_show_schema":"dbo.WSPolicyBehaviorSelection"}]},{"id":"column-83730","object_id":"column-83730","name":"SelectedBehaviorOptionId","name_without_path":"SelectedBehaviorOptionId","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t5976","name":"WSParameter","name_show_schema":"dbo.WSParameter"}]},{"id":"column-83731","object_id":"column-83731","name":"ParameterId","name_without_path":"ParameterId","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t5976","name":"WSParameter","name_show_schema":"dbo.WSParameter"}]},{"id":"column-83732","object_id":"column-83732","name":"ParameterValue","name_without_path":"ParameterValue","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"256","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_WSPolicyBehaviorSelectionParameter_WSParameter","title":null,"description":null,"is_user_defined":false,"foreign_table":"WSPolicyBehaviorSelectionParameter","foreign_table_show_schema":"dbo.WSPolicyBehaviorSelectionParameter","foreign_table_verbose":"WSPolicyBehaviorSelectionParameter","foreign_table_verbose_show_schema":"dbo.WSPolicyBehaviorSelectionParameter","foreign_table_object_id":"t5980","primary_table":"WSParameter","primary_table_show_schema":"dbo.WSParameter","primary_table_verbose":"WSParameter","primary_table_verbose_show_schema":"dbo.WSParameter","primary_table_object_id":"t5976","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"BehaviorId","foreign_column_path":null,"foreign_column":"BehaviorId"},{"primary_column_path":null,"primary_column":"BehaviorOptionId","foreign_column_path":null,"foreign_column":"SelectedBehaviorOptionId"},{"primary_column_path":null,"primary_column":"ParameterId","foreign_column_path":null,"foreign_column":"ParameterId"}],"custom_fields":{}},{"name":"FK_WSPolicyBehaviorSelectionParameter_WSPolicyBehaviorSelection","title":null,"description":null,"is_user_defined":false,"foreign_table":"WSPolicyBehaviorSelectionParameter","foreign_table_show_schema":"dbo.WSPolicyBehaviorSelectionParameter","foreign_table_verbose":"WSPolicyBehaviorSelectionParameter","foreign_table_verbose_show_schema":"dbo.WSPolicyBehaviorSelectionParameter","foreign_table_object_id":"t5980","primary_table":"WSPolicyBehaviorSelection","primary_table_show_schema":"dbo.WSPolicyBehaviorSelection","primary_table_verbose":"WSPolicyBehaviorSelection","primary_table_verbose_show_schema":"dbo.WSPolicyBehaviorSelection","primary_table_object_id":"t5979","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"PolicyId","foreign_column_path":null,"foreign_column":"PolicyId"},{"primary_column_path":null,"primary_column":"BehaviorId","foreign_column_path":null,"foreign_column":"BehaviorId"},{"primary_column_path":null,"primary_column":"RoleId","foreign_column_path":null,"foreign_column":"RoleId"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_WSPolicyBehaviorSelectionParameter","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PolicyId","name":"PolicyId"},{"path":null,"name_without_path":"BehaviorId","name":"BehaviorId"},{"path":null,"name_without_path":"RoleId","name":"RoleId"},{"path":null,"name_without_path":"SelectedBehaviorOptionId","name":"SelectedBehaviorOptionId"},{"path":null,"name_without_path":"ParameterId","name":"ParameterId"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
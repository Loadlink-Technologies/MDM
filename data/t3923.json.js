window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3923","name":"MessageType","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"MessageType"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-37649","object_id":"column-37649","name":"MsgTypeCode","name_without_path":"MsgTypeCode","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37650","object_id":"column-37650","name":"MsgTypeDesc","name_without_path":"MsgTypeDesc","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37651","object_id":"column-37651","name":"CreatedOn","name_without_path":"CreatedOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37652","object_id":"column-37652","name":"CreatedBy","name_without_path":"CreatedBy","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37653","object_id":"column-37653","name":"UpdatedOn","name_without_path":"UpdatedOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37654","object_id":"column-37654","name":"UpdatedBy","name_without_path":"UpdatedBy","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37655","object_id":"column-37655","name":"DisplayOrder","name_without_path":"DisplayOrder","description":"","is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_Messages_MessageType","title":null,"description":null,"is_user_defined":false,"foreign_table":"Messages","foreign_table_show_schema":"dbo.Messages","foreign_table_verbose":"Messages","foreign_table_verbose_show_schema":"dbo.Messages","foreign_table_object_id":"t3919","primary_table":"MessageType","primary_table_show_schema":"dbo.MessageType","primary_table_verbose":"MessageType","primary_table_verbose_show_schema":"dbo.MessageType","primary_table_object_id":"t3923","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"MsgTypeCode","foreign_column_path":null,"foreign_column":"MsgTypeCode"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_MESSAGETYPE","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"MsgTypeCode","name":"MsgTypeCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
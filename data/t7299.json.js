window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7299","name":"TaskFeed","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Salesforce","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"TaskFeed"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-133162","object_id":"column-133162","name":"Id","name_without_path":"Id","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133163","object_id":"column-133163","name":"ParentId","name_without_path":"ParentId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133164","object_id":"column-133164","name":"Type","name_without_path":"Type","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133165","object_id":"column-133165","name":"CreatedById","name_without_path":"CreatedById","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133166","object_id":"column-133166","name":"CreatedDate","name_without_path":"CreatedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATETIME","data_length":"19","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133167","object_id":"column-133167","name":"IsDeleted","name_without_path":"IsDeleted","description":null,"is_pk":false,"is_identity":false,"data_type":"BOOLEAN","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133168","object_id":"column-133168","name":"LastModifiedDate","name_without_path":"LastModifiedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATETIME","data_length":"19","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133169","object_id":"column-133169","name":"SystemModstamp","name_without_path":"SystemModstamp","description":null,"is_pk":false,"is_identity":false,"data_type":"DATETIME","data_length":"19","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133170","object_id":"column-133170","name":"CommentCount","name_without_path":"CommentCount","description":null,"is_pk":false,"is_identity":false,"data_type":"INT","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133171","object_id":"column-133171","name":"LikeCount","name_without_path":"LikeCount","description":null,"is_pk":false,"is_identity":false,"data_type":"INT","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133172","object_id":"column-133172","name":"Title","name_without_path":"Title","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133173","object_id":"column-133173","name":"Body","name_without_path":"Body","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"10000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133174","object_id":"column-133174","name":"LinkUrl","name_without_path":"LinkUrl","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133175","object_id":"column-133175","name":"IsRichText","name_without_path":"IsRichText","description":null,"is_pk":false,"is_identity":false,"data_type":"BOOLEAN","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133176","object_id":"column-133176","name":"RelatedRecordId","name_without_path":"RelatedRecordId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133177","object_id":"column-133177","name":"InsertedById","name_without_path":"InsertedById","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133178","object_id":"column-133178","name":"NetworkScope","name_without_path":"NetworkScope","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133179","object_id":"column-133179","name":"Visibility","name_without_path":"Visibility","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-133180","object_id":"column-133180","name":"BestCommentId","name_without_path":"BestCommentId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":null,"imported_at":"2021-08-09 16:11"};
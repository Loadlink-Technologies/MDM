window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6974","name":"EventRelationChangeEvent","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Salesforce","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"EventRelationChangeEvent"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-126096","object_id":"column-126096","name":"Id","name_without_path":"Id","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126097","object_id":"column-126097","name":"ReplayId","name_without_path":"ReplayId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126098","object_id":"column-126098","name":"ChangeEventHeader","name_without_path":"ChangeEventHeader","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126099","object_id":"column-126099","name":"RelationId","name_without_path":"RelationId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126100","object_id":"column-126100","name":"EventId","name_without_path":"EventId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126101","object_id":"column-126101","name":"IsWhat","name_without_path":"IsWhat","description":null,"is_pk":false,"is_identity":false,"data_type":"BOOLEAN","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126102","object_id":"column-126102","name":"IsParent","name_without_path":"IsParent","description":null,"is_pk":false,"is_identity":false,"data_type":"BOOLEAN","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126103","object_id":"column-126103","name":"IsInvitee","name_without_path":"IsInvitee","description":null,"is_pk":false,"is_identity":false,"data_type":"BOOLEAN","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126104","object_id":"column-126104","name":"AccountId","name_without_path":"AccountId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126105","object_id":"column-126105","name":"Status","name_without_path":"Status","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126106","object_id":"column-126106","name":"RespondedDate","name_without_path":"RespondedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATETIME","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126107","object_id":"column-126107","name":"Response","name_without_path":"Response","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126108","object_id":"column-126108","name":"CreatedDate","name_without_path":"CreatedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATETIME","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126109","object_id":"column-126109","name":"CreatedById","name_without_path":"CreatedById","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126110","object_id":"column-126110","name":"LastModifiedDate","name_without_path":"LastModifiedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATETIME","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-126111","object_id":"column-126111","name":"LastModifiedById","name_without_path":"LastModifiedById","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":null,"imported_at":"2021-08-09 16:11"};
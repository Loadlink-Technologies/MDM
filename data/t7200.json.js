window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7200","name":"ProcessInstanceHistory","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Salesforce","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"ProcessInstanceHistory"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-130645","object_id":"column-130645","name":"Id","name_without_path":"Id","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130646","object_id":"column-130646","name":"IsPending","name_without_path":"IsPending","description":null,"is_pk":false,"is_identity":false,"data_type":"BOOLEAN","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130647","object_id":"column-130647","name":"ProcessInstanceId","name_without_path":"ProcessInstanceId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130648","object_id":"column-130648","name":"TargetObjectId","name_without_path":"TargetObjectId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130649","object_id":"column-130649","name":"StepStatus","name_without_path":"StepStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130650","object_id":"column-130650","name":"ProcessNodeId","name_without_path":"ProcessNodeId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130651","object_id":"column-130651","name":"OriginalActorId","name_without_path":"OriginalActorId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130652","object_id":"column-130652","name":"ActorId","name_without_path":"ActorId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130653","object_id":"column-130653","name":"RemindersSent","name_without_path":"RemindersSent","description":null,"is_pk":false,"is_identity":false,"data_type":"INT","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130654","object_id":"column-130654","name":"ElapsedTimeInDays","name_without_path":"ElapsedTimeInDays","description":null,"is_pk":false,"is_identity":false,"data_type":"DOUBLE","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130655","object_id":"column-130655","name":"ElapsedTimeInHours","name_without_path":"ElapsedTimeInHours","description":null,"is_pk":false,"is_identity":false,"data_type":"DOUBLE","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130656","object_id":"column-130656","name":"ElapsedTimeInMinutes","name_without_path":"ElapsedTimeInMinutes","description":null,"is_pk":false,"is_identity":false,"data_type":"DOUBLE","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130657","object_id":"column-130657","name":"Comments","name_without_path":"Comments","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"4000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130658","object_id":"column-130658","name":"IsDeleted","name_without_path":"IsDeleted","description":null,"is_pk":false,"is_identity":false,"data_type":"BOOLEAN","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130659","object_id":"column-130659","name":"CreatedDate","name_without_path":"CreatedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATETIME","data_length":"19","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130660","object_id":"column-130660","name":"CreatedById","name_without_path":"CreatedById","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-130661","object_id":"column-130661","name":"SystemModstamp","name_without_path":"SystemModstamp","description":null,"is_pk":false,"is_identity":false,"data_type":"DATETIME","data_length":"19","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":null,"imported_at":"2021-08-09 16:11"};
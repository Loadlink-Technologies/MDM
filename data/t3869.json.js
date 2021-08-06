window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3869","name":"LinkDispatchActivity","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"LinkDispatchActivity"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-36909","object_id":"column-36909","name":"CustCd","name_without_path":"CustCd","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"7","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36910","object_id":"column-36910","name":"ADate","name_without_path":"ADate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36911","object_id":"column-36911","name":"AppID","name_without_path":"AppID","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"25","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36912","object_id":"column-36912","name":"UserID","name_without_path":"UserID","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"256","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36913","object_id":"column-36913","name":"Password","name_without_path":"Password","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"256","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36914","object_id":"column-36914","name":"ProductType","name_without_path":"ProductType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36915","object_id":"column-36915","name":"UserSession","name_without_path":"UserSession","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"256","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36916","object_id":"column-36916","name":"Company","name_without_path":"Company","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"256","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36917","object_id":"column-36917","name":"MaxUsers","name_without_path":"MaxUsers","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36918","object_id":"column-36918","name":"ExpiryDate","name_without_path":"ExpiryDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36919","object_id":"column-36919","name":"ExpiryGracePeriod","name_without_path":"ExpiryGracePeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36920","object_id":"column-36920","name":"ExpiryKey","name_without_path":"ExpiryKey","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"256","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36921","object_id":"column-36921","name":"ExpiryHashCode","name_without_path":"ExpiryHashCode","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1024","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36922","object_id":"column-36922","name":"Version","name_without_path":"Version","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"256","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36923","object_id":"column-36923","name":"MachineName","name_without_path":"MachineName","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"256","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36924","object_id":"column-36924","name":"ActivityID","name_without_path":"ActivityID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36925","object_id":"column-36925","name":"Description","name_without_path":"Description","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"MAX","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36926","object_id":"column-36926","name":"RequestMethod","name_without_path":"RequestMethod","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"25","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36927","object_id":"column-36927","name":"RequestCode","name_without_path":"RequestCode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36928","object_id":"column-36928","name":"RequestMessage","name_without_path":"RequestMessage","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"MAX","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
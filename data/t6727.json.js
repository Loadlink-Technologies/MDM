window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6727","name":"AssetChangeEvent","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Salesforce","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"AssetChangeEvent"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-121751","object_id":"column-121751","name":"Id","name_without_path":"Id","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121752","object_id":"column-121752","name":"ReplayId","name_without_path":"ReplayId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121753","object_id":"column-121753","name":"ChangeEventHeader","name_without_path":"ChangeEventHeader","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121754","object_id":"column-121754","name":"ContactId","name_without_path":"ContactId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121755","object_id":"column-121755","name":"AccountId","name_without_path":"AccountId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121756","object_id":"column-121756","name":"ParentId","name_without_path":"ParentId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121757","object_id":"column-121757","name":"RootAssetId","name_without_path":"RootAssetId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121758","object_id":"column-121758","name":"Product2Id","name_without_path":"Product2Id","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121759","object_id":"column-121759","name":"IsCompetitorProduct","name_without_path":"IsCompetitorProduct","description":null,"is_pk":false,"is_identity":false,"data_type":"BOOLEAN","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121760","object_id":"column-121760","name":"CreatedDate","name_without_path":"CreatedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATETIME","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121761","object_id":"column-121761","name":"CreatedById","name_without_path":"CreatedById","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121762","object_id":"column-121762","name":"LastModifiedDate","name_without_path":"LastModifiedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATETIME","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121763","object_id":"column-121763","name":"LastModifiedById","name_without_path":"LastModifiedById","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121764","object_id":"column-121764","name":"Name","name_without_path":"Name","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121765","object_id":"column-121765","name":"SerialNumber","name_without_path":"SerialNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121766","object_id":"column-121766","name":"InstallDate","name_without_path":"InstallDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATE","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121767","object_id":"column-121767","name":"PurchaseDate","name_without_path":"PurchaseDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATE","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121768","object_id":"column-121768","name":"UsageEndDate","name_without_path":"UsageEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATE","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121769","object_id":"column-121769","name":"Status","name_without_path":"Status","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121770","object_id":"column-121770","name":"Price","name_without_path":"Price","description":null,"is_pk":false,"is_identity":false,"data_type":"DOUBLE","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121771","object_id":"column-121771","name":"Quantity","name_without_path":"Quantity","description":null,"is_pk":false,"is_identity":false,"data_type":"DOUBLE","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-121772","object_id":"column-121772","name":"Description","name_without_path":"Description","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"32000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":null,"imported_at":"2021-08-09 16:11"};
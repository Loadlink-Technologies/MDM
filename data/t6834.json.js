window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6834","name":"ContactPointAddressChangeEvent","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Salesforce","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"ContactPointAddressChangeEvent"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-123527","object_id":"column-123527","name":"Id","name_without_path":"Id","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123528","object_id":"column-123528","name":"ReplayId","name_without_path":"ReplayId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123529","object_id":"column-123529","name":"ChangeEventHeader","name_without_path":"ChangeEventHeader","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123530","object_id":"column-123530","name":"OwnerId","name_without_path":"OwnerId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123531","object_id":"column-123531","name":"Name","name_without_path":"Name","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123532","object_id":"column-123532","name":"CreatedDate","name_without_path":"CreatedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATETIME","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123533","object_id":"column-123533","name":"CreatedById","name_without_path":"CreatedById","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123534","object_id":"column-123534","name":"LastModifiedDate","name_without_path":"LastModifiedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATETIME","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123535","object_id":"column-123535","name":"LastModifiedById","name_without_path":"LastModifiedById","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123536","object_id":"column-123536","name":"ParentId","name_without_path":"ParentId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123537","object_id":"column-123537","name":"ActiveFromDate","name_without_path":"ActiveFromDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATE","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123538","object_id":"column-123538","name":"ActiveToDate","name_without_path":"ActiveToDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATE","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123539","object_id":"column-123539","name":"BestTimeToContactEndTime","name_without_path":"BestTimeToContactEndTime","description":null,"is_pk":false,"is_identity":false,"data_type":"TIME","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123540","object_id":"column-123540","name":"BestTimeToContactStartTime","name_without_path":"BestTimeToContactStartTime","description":null,"is_pk":false,"is_identity":false,"data_type":"TIME","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123541","object_id":"column-123541","name":"BestTimeToContactTimezone","name_without_path":"BestTimeToContactTimezone","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123542","object_id":"column-123542","name":"IsPrimary","name_without_path":"IsPrimary","description":null,"is_pk":false,"is_identity":false,"data_type":"BOOLEAN","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123543","object_id":"column-123543","name":"ContactPointPhoneId","name_without_path":"ContactPointPhoneId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123544","object_id":"column-123544","name":"AddressType","name_without_path":"AddressType","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123545","object_id":"column-123545","name":"Street","name_without_path":"Street","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123546","object_id":"column-123546","name":"City","name_without_path":"City","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123547","object_id":"column-123547","name":"State","name_without_path":"State","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123548","object_id":"column-123548","name":"PostalCode","name_without_path":"PostalCode","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123549","object_id":"column-123549","name":"Country","name_without_path":"Country","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123550","object_id":"column-123550","name":"StateCode","name_without_path":"StateCode","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123551","object_id":"column-123551","name":"CountryCode","name_without_path":"CountryCode","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123552","object_id":"column-123552","name":"Latitude","name_without_path":"Latitude","description":null,"is_pk":false,"is_identity":false,"data_type":"DOUBLE","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123553","object_id":"column-123553","name":"Longitude","name_without_path":"Longitude","description":null,"is_pk":false,"is_identity":false,"data_type":"DOUBLE","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123554","object_id":"column-123554","name":"GeocodeAccuracy","name_without_path":"GeocodeAccuracy","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123555","object_id":"column-123555","name":"Address","name_without_path":"Address","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-123556","object_id":"column-123556","name":"IsDefault","name_without_path":"IsDefault","description":null,"is_pk":false,"is_identity":false,"data_type":"BOOLEAN","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":null,"imported_at":"2021-08-09 16:11"};
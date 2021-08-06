window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v4168","name":"vw_LTAcctMgrReport","subtype":"VIEW","is_user_defined":false,"description":null,"script":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vw_LTAcctMgrReport"},{"field":"Type","value":"View"}],"columns":[{"id":"column-41325","object_id":"column-41325","name":"CompanyName","name_without_path":"CompanyName","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41326","object_id":"column-41326","name":"cust_cd","name_without_path":"cust_cd","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"7","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41327","object_id":"column-41327","name":"ContactName","name_without_path":"ContactName","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"101","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41328","object_id":"column-41328","name":"ContactPhone","name_without_path":"ContactPhone","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41329","object_id":"column-41329","name":"ext","name_without_path":"ext","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41330","object_id":"column-41330","name":"LTManager","name_without_path":"LTManager","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41331","object_id":"column-41331","name":"PreviousClosePercentage","name_without_path":"PreviousClosePercentage","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41332","object_id":"column-41332","name":"ClosePercentage","name_without_path":"ClosePercentage","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41333","object_id":"column-41333","name":"ClosePercentUpdatedDate","name_without_path":"ClosePercentUpdatedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41334","object_id":"column-41334","name":"LastLinkTrakNote","name_without_path":"LastLinkTrakNote","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"5000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41335","object_id":"column-41335","name":"LastNoteDate","name_without_path":"LastNoteDate","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41336","object_id":"column-41336","name":"NextFollowUpNotes","name_without_path":"NextFollowUpNotes","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41337","object_id":"column-41337","name":"NextFollowUpDate","name_without_path":"NextFollowUpDate","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41338","object_id":"column-41338","name":"FollowUpBy","name_without_path":"FollowUpBy","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"51","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41339","object_id":"column-41339","name":"OppType","name_without_path":"OppType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41340","object_id":"column-41340","name":"UnitsNum","name_without_path":"UnitsNum","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41341","object_id":"column-41341","name":"PriceQuoted","name_without_path":"PriceQuoted","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-41342","object_id":"column-41342","name":"TotalOppt","name_without_path":"TotalOppt","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
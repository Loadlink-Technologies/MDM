window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v6581","name":"svcInTransitHistoryTransactions","subtype":"VIEW","is_user_defined":false,"description":null,"script":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"svcInTransitHistoryTransactions"},{"field":"Type","value":"View"}],"columns":[{"id":"column-118124","object_id":"column-118124","name":"HISTORY","name_without_path":"HISTORY","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118125","object_id":"column-118125","name":"SOURCE","name_without_path":"SOURCE","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118126","object_id":"column-118126","name":"DOCNUMBR","name_without_path":"DOCNUMBR","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"21","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118127","object_id":"column-118127","name":"CUSTNAME","name_without_path":"CUSTNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"65","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118128","object_id":"column-118128","name":"ENTDTE","name_without_path":"ENTDTE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118129","object_id":"column-118129","name":"TRNSFLOC","name_without_path":"TRNSFLOC","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118130","object_id":"column-118130","name":"ITLOCN","name_without_path":"ITLOCN","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118131","object_id":"column-118131","name":"LOCNCODE","name_without_path":"LOCNCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118132","object_id":"column-118132","name":"SHIPMTHD","name_without_path":"SHIPMTHD","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118133","object_id":"column-118133","name":"OFFID","name_without_path":"OFFID","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118134","object_id":"column-118134","name":"TECHID","name_without_path":"TECHID","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118135","object_id":"column-118135","name":"STATUS","name_without_path":"STATUS","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118136","object_id":"column-118136","name":"DSCRPTN1","name_without_path":"DSCRPTN1","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118137","object_id":"column-118137","name":"ORDRDATE","name_without_path":"ORDRDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118138","object_id":"column-118138","name":"ETADTE","name_without_path":"ETADTE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118139","object_id":"column-118139","name":"MKTOPROC","name_without_path":"MKTOPROC","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-118140","object_id":"column-118140","name":"InfoValue","name_without_path":"InfoValue","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
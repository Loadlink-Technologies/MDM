window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v6110","name":"InventoryPurchaseReceipts","subtype":"VIEW","is_user_defined":false,"description":null,"script":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"InventoryPurchaseReceipts"},{"field":"Type","value":"View"}],"columns":[{"id":"column-89291","object_id":"column-89291","name":"Item Number","name_without_path":"Item Number","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"31","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89292","object_id":"column-89292","name":"Date Received","name_without_path":"Date Received","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89293","object_id":"column-89293","name":"QTY Received","name_without_path":"QTY Received","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89294","object_id":"column-89294","name":"QTY Sold","name_without_path":"QTY Sold","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89295","object_id":"column-89295","name":"Unit Cost","name_without_path":"Unit Cost","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89296","object_id":"column-89296","name":"QTY Type","name_without_path":"QTY Type","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89297","object_id":"column-89297","name":"TRX Location","name_without_path":"TRX Location","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89298","object_id":"column-89298","name":"Purchase Receipt Type","name_without_path":"Purchase Receipt Type","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89299","object_id":"column-89299","name":"Receipt Number","name_without_path":"Receipt Number","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"21","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89300","object_id":"column-89300","name":"Vendor ID","name_without_path":"Vendor ID","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89301","object_id":"column-89301","name":"Purchase Order Number","name_without_path":"Purchase Order Number","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"21","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89302","object_id":"column-89302","name":"Landed Cost","name_without_path":"Landed Cost","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89303","object_id":"column-89303","name":"QTY Reserved","name_without_path":"QTY Reserved","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89304","object_id":"column-89304","name":"Receipt SEQ Number","name_without_path":"Receipt SEQ Number","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89305","object_id":"column-89305","name":"Receipt Sold","name_without_path":"Receipt Sold","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89306","object_id":"column-89306","name":"Item Generic Description","name_without_path":"Item Generic Description","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89307","object_id":"column-89307","name":"Item Description","name_without_path":"Item Description","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"101","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89308","object_id":"column-89308","name":"User Category Value 1","name_without_path":"User Category Value 1","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89309","object_id":"column-89309","name":"User Category Value 2","name_without_path":"User Category Value 2","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89310","object_id":"column-89310","name":"User Category Value 3","name_without_path":"User Category Value 3","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89311","object_id":"column-89311","name":"User Category Value 4","name_without_path":"User Category Value 4","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89312","object_id":"column-89312","name":"User Category Value 5","name_without_path":"User Category Value 5","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89313","object_id":"column-89313","name":"User Category Value 6","name_without_path":"User Category Value 6","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"11","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89314","object_id":"column-89314","name":"Item Number For Drillback","name_without_path":"Item Number For Drillback","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"2042","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-89315","object_id":"column-89315","name":"Vendor ID For Drillback","name_without_path":"Vendor ID For Drillback","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"2042","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
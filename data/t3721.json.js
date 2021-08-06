window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3721","name":"AcctInvoiceNPayments","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"AcctInvoiceNPayments"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-34336","object_id":"column-34336","name":"CustCd","name_without_path":"CustCd","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"7","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34337","object_id":"column-34337","name":"AcctCustNumber","name_without_path":"AcctCustNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34338","object_id":"column-34338","name":"DocType","name_without_path":"DocType","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34339","object_id":"column-34339","name":"DocNumber","name_without_path":"DocNumber","description":null,"is_pk":true,"is_identity":false,"data_type":"varchar","data_length":"21","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34340","object_id":"column-34340","name":"DocDate","name_without_path":"DocDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34341","object_id":"column-34341","name":"ItemDescn","name_without_path":"ItemDescn","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34342","object_id":"column-34342","name":"Amount","name_without_path":"Amount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-34343","object_id":"column-34343","name":"AmountRemaining","name_without_path":"AmountRemaining","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PK_AcctInvoiceNPayments","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DocType","name":"DocType"},{"path":null,"name_without_path":"DocNumber","name":"DocNumber"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
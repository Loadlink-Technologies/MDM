window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3807","name":"DATrxActivityHourlySummary","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"DATrxActivityHourlySummary"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-35861","object_id":"column-35861","name":"Date","name_without_path":"Date","description":"Message date, converted 101","is_pk":true,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35857","object_id":"column-35857","name":"Hour","name_without_path":"Hour","description":"Hour of the call","is_pk":true,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35858","object_id":"column-35858","name":"CallType","name_without_path":"CallType","description":"CL, HB, CT, NL, UL, XL, NT, UT","is_pk":true,"is_identity":false,"data_type":"char","data_length":"3","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35859","object_id":"column-35859","name":"WeekDay","name_without_path":"WeekDay","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35860","object_id":"column-35860","name":"Calls","name_without_path":"Calls","description":"Message date","is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PK_DATrxActivityHourlySummary","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Date","name":"Date"},{"path":null,"name_without_path":"Hour","name":"Hour"},{"path":null,"name_without_path":"CallType","name":"CallType"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
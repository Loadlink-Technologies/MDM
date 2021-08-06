window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3935","name":"Notes","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Production@Sitdb01.linklogi.com","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Notes"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-37708","object_id":"column-37708","name":"NoteId","name_without_path":"NoteId","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37709","object_id":"column-37709","name":"CustCd","name_without_path":"CustCd","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"7","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37710","object_id":"column-37710","name":"ContactID","name_without_path":"ContactID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37711","object_id":"column-37711","name":"EmpID","name_without_path":"EmpID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37712","object_id":"column-37712","name":"Date","name_without_path":"Date","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37713","object_id":"column-37713","name":"NoteType","name_without_path":"NoteType","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37714","object_id":"column-37714","name":"Note","name_without_path":"Note","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"5000","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37715","object_id":"column-37715","name":"ClassiFicationCd","name_without_path":"ClassiFicationCd","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37716","object_id":"column-37716","name":"CallStartTime","name_without_path":"CallStartTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37717","object_id":"column-37717","name":"CallEndTime","name_without_path":"CallEndTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-37718","object_id":"column-37718","name":"CallDirection","name_without_path":"CallDirection","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"fk_TVCallHistoryNote_Note","title":null,"description":null,"is_user_defined":false,"foreign_table":"TVCallHistoryNote","foreign_table_show_schema":"dbo.TVCallHistoryNote","foreign_table_verbose":"TVCallHistoryNote","foreign_table_verbose_show_schema":"dbo.TVCallHistoryNote","foreign_table_object_id":"t4082","primary_table":"Notes","primary_table_show_schema":"dbo.Notes","primary_table_verbose":"Notes","primary_table_verbose_show_schema":"dbo.Notes","primary_table_object_id":"t3935","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"NoteId","foreign_column_path":null,"foreign_column":"NoteID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_Notes","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"NoteId","name":"NoteId"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 11:55"};
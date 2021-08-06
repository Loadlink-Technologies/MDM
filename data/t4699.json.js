window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4699","name":"MC00201","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"MC00201"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-49931","object_id":"column-49931","name":"CURNCYID","name_without_path":"CURNCYID","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49932","object_id":"column-49932","name":"CURRNIDX","name_without_path":"CURRNIDX","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49933","object_id":"column-49933","name":"ACTINDX","name_without_path":"ACTINDX","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49934","object_id":"column-49934","name":"OPENYEAR","name_without_path":"OPENYEAR","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49935","object_id":"column-49935","name":"PERIODID","name_without_path":"PERIODID","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49936","object_id":"column-49936","name":"Ledger_ID","name_without_path":"Ledger_ID","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49937","object_id":"column-49937","name":"FUNCTAMT","name_without_path":"FUNCTAMT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49938","object_id":"column-49938","name":"ORIGAMT","name_without_path":"ORIGAMT","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-49939","object_id":"column-49939","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKMC00201","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ACTINDX","name":"ACTINDX"},{"path":null,"name_without_path":"OPENYEAR","name":"OPENYEAR"},{"path":null,"name_without_path":"PERIODID","name":"PERIODID"},{"path":null,"name_without_path":"Ledger_ID","name":"Ledger_ID"},{"path":null,"name_without_path":"CURNCYID","name":"CURNCYID"}],"custom_fields":{}},{"name":"AK2MC00201","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ACTINDX","name":"ACTINDX"},{"path":null,"name_without_path":"OPENYEAR","name":"OPENYEAR"},{"path":null,"name_without_path":"CURNCYID","name":"CURNCYID"},{"path":null,"name_without_path":"Ledger_ID","name":"Ledger_ID"},{"path":null,"name_without_path":"PERIODID","name":"PERIODID"}],"custom_fields":{}},{"name":"AK3MC00201","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"CURNCYID","name":"CURNCYID"},{"path":null,"name_without_path":"ACTINDX","name":"ACTINDX"},{"path":null,"name_without_path":"PERIODID","name":"PERIODID"},{"path":null,"name_without_path":"Ledger_ID","name":"Ledger_ID"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK4MC00201","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"OPENYEAR","name":"OPENYEAR"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
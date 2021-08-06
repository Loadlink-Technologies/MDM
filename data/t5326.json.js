window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5326","name":"ReportRolesPending","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"ReportRolesPending"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-68945","object_id":"column-68945","name":"Identity_Column","name_without_path":"Identity_Column","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68946","object_id":"column-68946","name":"BP_GUID","name_without_path":"BP_GUID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"41","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68947","object_id":"column-68947","name":"BP_Role","name_without_path":"BP_Role","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"51","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68948","object_id":"column-68948","name":"MKTOPROC","name_without_path":"MKTOPROC","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68949","object_id":"column-68949","name":"Business_Desk_Report_Nam","name_without_path":"Business_Desk_Report_Nam","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"51","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68950","object_id":"column-68950","name":"PRODID","name_without_path":"PRODID","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68951","object_id":"column-68951","name":"Report_Option","name_without_path":"Report_Option","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"51","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68952","object_id":"column-68952","name":"RPTGRIND","name_without_path":"RPTGRIND","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68953","object_id":"column-68953","name":"UserIDTime","name_without_path":"UserIDTime","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"25","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68954","object_id":"column-68954","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKReportRolesPending","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK1ReportRolesPending","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Identity_Column","name":"Identity_Column"},{"path":null,"name_without_path":"BP_GUID","name":"BP_GUID"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK2ReportRolesPending","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"BP_Role","name":"BP_Role"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK3ReportRolesPending","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Identity_Column","name":"Identity_Column"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK4ReportRolesPending","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"MKTOPROC","name":"MKTOPROC"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK5ReportRolesPending","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Business_Desk_Report_Nam","name":"Business_Desk_Report_Nam"},{"path":null,"name_without_path":"PRODID","name":"PRODID"},{"path":null,"name_without_path":"Report_Option","name":"Report_Option"},{"path":null,"name_without_path":"RPTGRIND","name":"RPTGRIND"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5319","name":"ReportCentersPending","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"ReportCentersPending"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-68892","object_id":"column-68892","name":"Identity_Column","name_without_path":"Identity_Column","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68893","object_id":"column-68893","name":"BPReport_Center","name_without_path":"BPReport_Center","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"31","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68894","object_id":"column-68894","name":"MKTOPROC","name_without_path":"MKTOPROC","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68895","object_id":"column-68895","name":"RPTGRIND","name_without_path":"RPTGRIND","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68896","object_id":"column-68896","name":"PRODID","name_without_path":"PRODID","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68897","object_id":"column-68897","name":"Business_Desk_Report_Nam","name_without_path":"Business_Desk_Report_Nam","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"51","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68898","object_id":"column-68898","name":"Report_Option","name_without_path":"Report_Option","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"51","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68899","object_id":"column-68899","name":"UserIDTime","name_without_path":"UserIDTime","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"25","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-68900","object_id":"column-68900","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKReportCentersPending","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK1ReportCentersPending","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Identity_Column","name":"Identity_Column"},{"path":null,"name_without_path":"BPReport_Center","name":"BPReport_Center"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK2ReportCentersPending","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"BPReport_Center","name":"BPReport_Center"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK3ReportCentersPending","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Identity_Column","name":"Identity_Column"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK4ReportCentersPending","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"RPTGRIND","name":"RPTGRIND"},{"path":null,"name_without_path":"PRODID","name":"PRODID"},{"path":null,"name_without_path":"Business_Desk_Report_Nam","name":"Business_Desk_Report_Nam"},{"path":null,"name_without_path":"Report_Option","name":"Report_Option"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
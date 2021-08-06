window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5229","name":"POA40003","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"POA40003"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-66024","object_id":"column-66024","name":"PONUMBER","name_without_path":"PONUMBER","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"17","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-66025","object_id":"column-66025","name":"VENDORID","name_without_path":"VENDORID","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-66026","object_id":"column-66026","name":"STATGRP","name_without_path":"STATGRP","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-66027","object_id":"column-66027","name":"DOCDATE","name_without_path":"DOCDATE","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-66028","object_id":"column-66028","name":"POA_Created_By","name_without_path":"POA_Created_By","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-66029","object_id":"column-66029","name":"POA_PO_Approval_Status","name_without_path":"POA_PO_Approval_Status","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-66030","object_id":"column-66030","name":"REMSUBTO","name_without_path":"REMSUBTO","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-66031","object_id":"column-66031","name":"POA_Approved_By","name_without_path":"POA_Approved_By","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-66032","object_id":"column-66032","name":"APPRVLDT","name_without_path":"APPRVLDT","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-66033","object_id":"column-66033","name":"POA_Approval_Time","name_without_path":"POA_Approval_Time","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_DATE    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_DATE AS '1/1/1900'      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-66034","object_id":"column-66034","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKPOA40003","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PONUMBER","name":"PONUMBER"}],"custom_fields":{}},{"name":"AK2POA40003","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"POA_PO_Approval_Status","name":"POA_PO_Approval_Status"},{"path":null,"name_without_path":"STATGRP","name":"STATGRP"},{"path":null,"name_without_path":"PONUMBER","name":"PONUMBER"},{"path":null,"name_without_path":"REMSUBTO","name":"REMSUBTO"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK3POA40003","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"POA_PO_Approval_Status","name":"POA_PO_Approval_Status"},{"path":null,"name_without_path":"STATGRP","name":"STATGRP"},{"path":null,"name_without_path":"VENDORID","name":"VENDORID"},{"path":null,"name_without_path":"REMSUBTO","name":"REMSUBTO"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK4POA40003","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"POA_PO_Approval_Status","name":"POA_PO_Approval_Status"},{"path":null,"name_without_path":"STATGRP","name":"STATGRP"},{"path":null,"name_without_path":"POA_Created_By","name":"POA_Created_By"},{"path":null,"name_without_path":"REMSUBTO","name":"REMSUBTO"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK5POA40003","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"POA_Created_By","name":"POA_Created_By"},{"path":null,"name_without_path":"POA_PO_Approval_Status","name":"POA_PO_Approval_Status"},{"path":null,"name_without_path":"PONUMBER","name":"PONUMBER"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK6POA40003","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"POA_Created_By","name":"POA_Created_By"},{"path":null,"name_without_path":"POA_PO_Approval_Status","name":"POA_PO_Approval_Status"},{"path":null,"name_without_path":"VENDORID","name":"VENDORID"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK7POA40003","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"POA_Created_By","name":"POA_Created_By"},{"path":null,"name_without_path":"POA_PO_Approval_Status","name":"POA_PO_Approval_Status"},{"path":null,"name_without_path":"DOCDATE","name":"DOCDATE"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
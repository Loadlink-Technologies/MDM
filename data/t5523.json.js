window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5523","name":"SVC00625","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SVC00625"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-74317","object_id":"column-74317","name":"USERID","name_without_path":"USERID","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74318","object_id":"column-74318","name":"CONSTS","name_without_path":"CONSTS","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74319","object_id":"column-74319","name":"CONTNBR","name_without_path":"CONTNBR","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"11","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74320","object_id":"column-74320","name":"CNTTYPE","name_without_path":"CNTTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"11","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74321","object_id":"column-74321","name":"CUSTNMBR","name_without_path":"CUSTNMBR","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74322","object_id":"column-74322","name":"YEAR1","name_without_path":"YEAR1","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74323","object_id":"column-74323","name":"PERIODID","name_without_path":"PERIODID","description":null,"is_pk":true,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74324","object_id":"column-74324","name":"MKDTOPST","name_without_path":"MKDTOPST","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74325","object_id":"column-74325","name":"POSTED","name_without_path":"POSTED","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74326","object_id":"column-74326","name":"Transaction_Amount","name_without_path":"Transaction_Amount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74327","object_id":"column-74327","name":"OrigTransactionAmount","name_without_path":"OrigTransactionAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"numeric","data_length":"19, 5","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_MONEY    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_MONEY AS 0.00      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74328","object_id":"column-74328","name":"ERMSGNBR","name_without_path":"ERMSGNBR","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74329","object_id":"column-74329","name":"ERMSGTXT","name_without_path":"ERMSGTXT","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74330","object_id":"column-74330","name":"ERMSGTX2","name_without_path":"ERMSGTX2","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-74331","object_id":"column-74331","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKSVC00625","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"USERID","name":"USERID"},{"path":null,"name_without_path":"CONSTS","name":"CONSTS"},{"path":null,"name_without_path":"CONTNBR","name":"CONTNBR"},{"path":null,"name_without_path":"YEAR1","name":"YEAR1"},{"path":null,"name_without_path":"PERIODID","name":"PERIODID"}],"custom_fields":{}},{"name":"AK1SVC00625","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"USERID","name":"USERID"},{"path":null,"name_without_path":"CONSTS","name":"CONSTS"},{"path":null,"name_without_path":"MKDTOPST","name":"MKDTOPST"},{"path":null,"name_without_path":"CONTNBR","name":"CONTNBR"},{"path":null,"name_without_path":"DEX_ROW_ID","name":"DEX_ROW_ID"}],"custom_fields":{}},{"name":"AK4SVC00625","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"USERID","name":"USERID"},{"path":null,"name_without_path":"CNTTYPE","name":"CNTTYPE"},{"path":null,"name_without_path":"CONSTS","name":"CONSTS"},{"path":null,"name_without_path":"CONTNBR","name":"CONTNBR"},{"path":null,"name_without_path":"YEAR1","name":"YEAR1"},{"path":null,"name_without_path":"PERIODID","name":"PERIODID"}],"custom_fields":{}},{"name":"AK5SVC00625","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"USERID","name":"USERID"},{"path":null,"name_without_path":"CONSTS","name":"CONSTS"},{"path":null,"name_without_path":"MKDTOPST","name":"MKDTOPST"},{"path":null,"name_without_path":"YEAR1","name":"YEAR1"},{"path":null,"name_without_path":"PERIODID","name":"PERIODID"},{"path":null,"name_without_path":"CONTNBR","name":"CONTNBR"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2021-07-27 14:57"};
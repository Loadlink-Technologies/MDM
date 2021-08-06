window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5347","name":"RM00500","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LINK@testgp2016.linklogi.com","id":"d7"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"RM00500"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-69723","object_id":"column-69723","name":"PRCSHID","name_without_path":"PRCSHID","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-69724","object_id":"column-69724","name":"PRODTCOD","name_without_path":"PRODTCOD","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-69725","object_id":"column-69725","name":"LINKCODE","name_without_path":"LINKCODE","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"15","is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_CHAR    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_CHAR AS ''      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-69726","object_id":"column-69726","name":"SEQNUMBR","name_without_path":"SEQNUMBR","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-69727","object_id":"column-69727","name":"PSSEQNUM","name_without_path":"PSSEQNUM","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":" /****** Object:  Default dbo.GPS_INT    Script Date: 8/28/96 5:56:05 PM ******/ create default dbo.GPS_INT AS 0      ","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-69728","object_id":"column-69728","name":"DEX_ROW_ID","name_without_path":"DEX_ROW_ID","description":null,"is_pk":false,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PKRM00500","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PRCSHID","name":"PRCSHID"},{"path":null,"name_without_path":"PRODTCOD","name":"PRODTCOD"},{"path":null,"name_without_path":"LINKCODE","name":"LINKCODE"}],"custom_fields":{}},{"name":"AK2RM00500","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PRODTCOD","name":"PRODTCOD"},{"path":null,"name_without_path":"LINKCODE","name":"LINKCODE"},{"path":null,"name_without_path":"SEQNUMBR","name":"SEQNUMBR"}],"custom_fields":{}},{"name":"AK3RM00500","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"PRODTCOD","name":"PRODTCOD"},{"path":null,"name_without_path":"PRCSHID","name":"PRCSHID"},{"path":null,"name_without_path":"PSSEQNUM","name":"PSSEQNUM"}],"custom_fields":{}}],"triggers":[{"name":"NodusSync_tr_RM00500_Customer_d","description":null,"action":"After Delete ","custom_fields":{}},{"name":"NodusSync_tr_RM00500_Customer_i","description":null,"action":"After Insert ","custom_fields":{}},{"name":"NodusSync_tr_RM00500_Customer_u","description":null,"action":"After Update ","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-27 14:57"};
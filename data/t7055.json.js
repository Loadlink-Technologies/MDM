window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7055","name":"Invoice__ChangeEvent","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Salesforce","id":"d10"}},{"field":"Schema","value":""},{"field":"Name","value":"Invoice__ChangeEvent"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-127274","object_id":"column-127274","name":"Id","name_without_path":"Id","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127275","object_id":"column-127275","name":"ReplayId","name_without_path":"ReplayId","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"1000","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127276","object_id":"column-127276","name":"ChangeEventHeader","name_without_path":"ChangeEventHeader","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127277","object_id":"column-127277","name":"Name","name_without_path":"Name","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127278","object_id":"column-127278","name":"CreatedDate","name_without_path":"CreatedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATETIME","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127279","object_id":"column-127279","name":"CreatedById","name_without_path":"CreatedById","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127280","object_id":"column-127280","name":"LastModifiedDate","name_without_path":"LastModifiedDate","description":null,"is_pk":false,"is_identity":false,"data_type":"DATETIME","data_length":"19","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127281","object_id":"column-127281","name":"LastModifiedById","name_without_path":"LastModifiedById","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127282","object_id":"column-127282","name":"Customer__c","name_without_path":"Customer__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127283","object_id":"column-127283","name":"Billing_City__c","name_without_path":"Billing_City__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127284","object_id":"column-127284","name":"Billing_Country__c","name_without_path":"Billing_Country__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127285","object_id":"column-127285","name":"Billing_Postal_Code__c","name_without_path":"Billing_Postal_Code__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127286","object_id":"column-127286","name":"Billing_State__c","name_without_path":"Billing_State__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127287","object_id":"column-127287","name":"Billing_Street__c","name_without_path":"Billing_Street__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127288","object_id":"column-127288","name":"ARCODE__c","name_without_path":"ARCODE__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127289","object_id":"column-127289","name":"Previous_Notification_Stage__c","name_without_path":"Previous_Notification_Stage__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127290","object_id":"column-127290","name":"Contract_Class__c","name_without_path":"Contract_Class__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127291","object_id":"column-127291","name":"Invoice_Date__c","name_without_path":"Invoice_Date__c","description":null,"is_pk":false,"is_identity":false,"data_type":"DATE","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127292","object_id":"column-127292","name":"Company_Name__c","name_without_path":"Company_Name__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127293","object_id":"column-127293","name":"Contact_Name__c","name_without_path":"Contact_Name__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127294","object_id":"column-127294","name":"CUST_CD__c","name_without_path":"CUST_CD__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127295","object_id":"column-127295","name":"Resource_Billing_Contact__c","name_without_path":"Resource_Billing_Contact__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127296","object_id":"column-127296","name":"Days_Over_30__c","name_without_path":"Days_Over_30__c","description":null,"is_pk":false,"is_identity":false,"data_type":"DOUBLE","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127297","object_id":"column-127297","name":"Shut_Off_Date__c","name_without_path":"Shut_Off_Date__c","description":null,"is_pk":false,"is_identity":false,"data_type":"DATE","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127298","object_id":"column-127298","name":"Days_Past_Shutoff_Date__c","name_without_path":"Days_Past_Shutoff_Date__c","description":null,"is_pk":false,"is_identity":false,"data_type":"DOUBLE","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127299","object_id":"column-127299","name":"Days_Until_Due__c","name_without_path":"Days_Until_Due__c","description":null,"is_pk":false,"is_identity":false,"data_type":"DOUBLE","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127300","object_id":"column-127300","name":"AmountRemaining__c","name_without_path":"AmountRemaining__c","description":null,"is_pk":false,"is_identity":false,"data_type":"DOUBLE","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127301","object_id":"column-127301","name":"Amount__c","name_without_path":"Amount__c","description":null,"is_pk":false,"is_identity":false,"data_type":"DOUBLE","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127302","object_id":"column-127302","name":"DocType__c","name_without_path":"DocType__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"18","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127303","object_id":"column-127303","name":"Invoice_Age_Days__c","name_without_path":"Invoice_Age_Days__c","description":null,"is_pk":false,"is_identity":false,"data_type":"DOUBLE","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127304","object_id":"column-127304","name":"Paid_Through_Date__c","name_without_path":"Paid_Through_Date__c","description":null,"is_pk":false,"is_identity":false,"data_type":"DATE","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127305","object_id":"column-127305","name":"Due_Date__c","name_without_path":"Due_Date__c","description":null,"is_pk":false,"is_identity":false,"data_type":"DATE","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127306","object_id":"column-127306","name":"Description__c","name_without_path":"Description__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127307","object_id":"column-127307","name":"Notification_Stage__c","name_without_path":"Notification_Stage__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127308","object_id":"column-127308","name":"Notification_Stage_Index__c","name_without_path":"Notification_Stage_Index__c","description":null,"is_pk":false,"is_identity":false,"data_type":"DOUBLE","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-127309","object_id":"column-127309","name":"Recipient_Address__c","name_without_path":"Recipient_Address__c","description":null,"is_pk":false,"is_identity":false,"data_type":"STRING","data_length":"131072","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[],"triggers":[],"dependencies":null,"imported_at":"2021-08-09 16:11"};
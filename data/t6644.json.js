window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t6644","name":"LoadPostingLegacy","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"LoadPostingLegacy"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-119653","object_id":"column-119653","name":"Token","name_without_path":"Token","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119654","object_id":"column-119654","name":"CustCD","name_without_path":"CustCD","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119655","object_id":"column-119655","name":"DateAvail","name_without_path":"DateAvail","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime2","data_length":"7","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119656","object_id":"column-119656","name":"SrceID","name_without_path":"SrceID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119657","object_id":"column-119657","name":"SrceCity","name_without_path":"SrceCity","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119658","object_id":"column-119658","name":"SrceSt","name_without_path":"SrceSt","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119659","object_id":"column-119659","name":"SrceCountry","name_without_path":"SrceCountry","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119660","object_id":"column-119660","name":"SrceLong","name_without_path":"SrceLong","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119661","object_id":"column-119661","name":"SrceLat","name_without_path":"SrceLat","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119662","object_id":"column-119662","name":"SrceRadius","name_without_path":"SrceRadius","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119663","object_id":"column-119663","name":"DestID","name_without_path":"DestID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119664","object_id":"column-119664","name":"DestCity","name_without_path":"DestCity","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119665","object_id":"column-119665","name":"DestSt","name_without_path":"DestSt","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119666","object_id":"column-119666","name":"DestCountry","name_without_path":"DestCountry","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119667","object_id":"column-119667","name":"DestLong","name_without_path":"DestLong","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119668","object_id":"column-119668","name":"DestLat","name_without_path":"DestLat","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119669","object_id":"column-119669","name":"DestRadius","name_without_path":"DestRadius","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119670","object_id":"column-119670","name":"VSize","name_without_path":"VSize","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119671","object_id":"column-119671","name":"VType","name_without_path":"VType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119672","object_id":"column-119672","name":"Comment","name_without_path":"Comment","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"4096","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119673","object_id":"column-119673","name":"PostMode","name_without_path":"PostMode","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119674","object_id":"column-119674","name":"ClientRefNum","name_without_path":"ClientRefNum","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"256","is_nullable":false,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119675","object_id":"column-119675","name":"ProductName","name_without_path":"ProductName","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":"''","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119676","object_id":"column-119676","name":"PAttrib","name_without_path":"PAttrib","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119677","object_id":"column-119677","name":"Distance","name_without_path":"Distance","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119678","object_id":"column-119678","name":"CreatedOn","name_without_path":"CreatedOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime2","data_length":"7","is_nullable":false,"computed_formula":null,"default_value":"getutcdate()","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119679","object_id":"column-119679","name":"CreatedBy","name_without_path":"CreatedBy","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119680","object_id":"column-119680","name":"DeletedOn","name_without_path":"DeletedOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime2","data_length":"7","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119681","object_id":"column-119681","name":"DeletedBy","name_without_path":"DeletedBy","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119682","object_id":"column-119682","name":"PStatus","name_without_path":"PStatus","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":"'O'","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119683","object_id":"column-119683","name":"NetworkId","name_without_path":"NetworkId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119684","object_id":"column-119684","name":"UpdatedOn","name_without_path":"UpdatedOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime2","data_length":"7","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119685","object_id":"column-119685","name":"UpdatedBy","name_without_path":"UpdatedBy","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119686","object_id":"column-119686","name":"OriginalToken","name_without_path":"OriginalToken","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119687","object_id":"column-119687","name":"ExactMatch","name_without_path":"ExactMatch","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119688","object_id":"column-119688","name":"Processed","name_without_path":"Processed","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-119689","object_id":"column-119689","name":"InsertedOn","name_without_path":"InsertedOn","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"getutcdate()","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[],"unique_keys":[{"name":"PK_LoadPosting_Token2","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Token","name":"Token"}],"custom_fields":{}}],"triggers":[{"name":"TrgLoadPostingLegacy","description":null,"action":"After Insert ","script":"------------------------------------------------------------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR    DATE       DESCRIPTION\r\n-- Nesrin    2019.06.22 LLSIM-2942: Create triggers on the 2 new tables                   \r\n------------------------------------------------------------------------------------------------------------------------------\r\nCREATE TRIGGER [dbo].[TrgLoadPostingLegacy]\r\n   ON  [dbo].[LoadPostingLegacy]\r\n   AFTER INSERT\r\nAS \r\nDeclare\r\n    @CustCD         varchar(10) ,\r\n    @DateAvail      date          = null, \r\n\r\n    @SrceID         int           = 0,\r\n    @SrceCity       varchar(50)   = '' ,\r\n    @SrceSt         varchar(2)    = '' ,\r\n    @SrceLong       float         = 0 , \r\n    @SrceLat        float         = 0 , \r\n    --\t@SrceCoord      geography     = 0 , -- Note: The type 'sys.geography' is not supported with natively compiled modules.\r\n    @SrceRadius     int           = 0 ,\r\n\r\n    @DestID         int           = 0,\r\n    @DestCity       varchar(50)   = '' ,\r\n    @DestSt         varchar(2)    = '' ,\r\n    @DestLong       float         = 0 , \r\n    @DestLat        float         = 0 , \r\n    --\t@DestCoord      geography     = 0 , -- Note: The type 'sys.geography' is not supported with natively compiled modules.\r\n    @DestRadius     int           = 0 ,\r\n\r\n    @VSize          bigint        = 0 ,\r\n    @VType          int           = 0 ,\r\n    @Comment        varchar(4096) = '' ,\r\n    @PostMode       char(1)       = 'A' ,\r\n    @ClientRefNum   varchar(256)  = '' ,\r\n    @ProductName    varchar(25)   = '' ,\r\n    @PAttrib        bigint        = 0 ,\r\n    @CreatedBy      int           = 0 ,\r\n    @NetworkId      int           = 0 ,\r\n\r\n    @OriginalToken  int           = 0,\r\n\t@OrigPostDate\tdatetime2(7)  = null\r\nBEGIN\r\n\t-- SET NOCOUNT ON added to prevent extra result sets from\r\n\t-- interfering with SELECT statements.\r\n\tSET NOCOUNT ON;\r\n\r\n        SELECT TOP 1\r\n\t\t@CustCd = CustCd ,        \r\n        @DateAvail = DateAvail, \r\n\t    @SrceID = SrceID ,         \r\n        @SrceCity = SrceCity ,\r\n        @SrceSt = SrceSt ,\r\n        @SrceLong = SrceLong  , \r\n        @SrceLat = SrceLat , \r\n        @SrceRadius =SrceRadius ,\r\n\r\n        @DestID = DestID ,         \r\n        @DestCity = DestCity,\r\n        @DestSt =DestSt ,\r\n        @DestLong = DestLong, \r\n        @DestLat = DestLat, \r\n        @DestRadius = DestRadius ,\r\n\r\n        @VSize = VSize ,\r\n        @VType = VType ,\r\n        @Comment = Comment ,\r\n        @PostMode = PostMode ,\r\n        @ClientRefNum = ClientRefNum ,\r\n        @ProductName = ProductName ,\r\n        @PAttrib = PAttrib ,\r\n        @CreatedBy = CreatedBy ,  \r\n        @NetworkId = NetworkId ,\r\n        @OriginalToken = OriginalToken,\r\n\t\t@OrigPostDate = CreatedOn\t\r\n       FROM INSERTED ;\r\n\r\n        EXEC usp_CreateLoad --[usp_CreateLoad_testTrg]\r\n\t\t\t@CustCD,      \r\n\t\t\t@DateAvail ,    \r\n\r\n\t\t\t@SrceID ,       \r\n\t\t\t@SrceCity ,     \r\n\t\t\t@SrceSt ,      \r\n\t\t\t@SrceLong ,     \r\n\t\t\t@SrceLat ,      \r\n\t\t\t@SrceRadius ,\r\n\t\t\t@DestID ,       \r\n\t\t\t@DestCity ,     \r\n\t\t\t@DestSt ,       \r\n\t\t\t@DestLong ,     \r\n\t\t\t@DestLat ,      \r\n\t\t\t@DestRadius ,   \r\n\r\n\t\t\t@VSize ,        \r\n\t\t\t@VType ,        \r\n\t\t\t@Comment ,      \r\n\t\t\t@PostMode ,     \r\n\t\t\t@ClientRefNum , \r\n\t\t\t@ProductName , \r\n\t\t\t@PAttrib ,      \r\n\t\t\t@CreatedBy , \r\n\t\t\t@NetworkId ,\r\n\t\t\t@OriginalToken,\r\n\t\t\t@OrigPostDate\r\n\r\nEND","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
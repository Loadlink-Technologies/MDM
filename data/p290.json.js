window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p290","name":"usp_GetTemplatePosting","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_GetTemplatePosting"},{"field":"Type","value":"Procedure"}],"script":"-- =========================================================================================== \r\n\r\nCREATE PROCEDURE [dbo].[usp_GetTemplatePosting]\r\n    @CustCd     VARCHAR(10) ,\r\n    @UserID     INT = 0,\r\n    @TemplateID INT = 0\r\nAS\r\nBEGIN\r\n\r\n--------------------------------------------------------------------------\r\n-- PROCEDURE NAME : usp_GetTemplatePosting\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Get Posting Template for the User.  \r\n--\r\n-- CALLED BY      : LoadMatching Web API \r\n-- EXECUTION FREQUENCY : \r\n-- \r\n-- INPUT PARAMS   : \r\n--                  @CustCd - Caller's CustCd\r\n--                  @UserID - Caller's User ID\r\n--                  @TemplateID - (optional) If provided then return 1 Posting Template \r\n--                 \r\n-- OUTPUT PARAMS  :\r\n-- STATUS RETURN  : \r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR    DATE       DESCRIPTION\r\n-- Hiro      2018.01.18 Initial Release\r\n-- Hiro      2018.04.11 Added Corridor\r\n-- Hiro      2018.04.25 Return all Templete belong to same CustCD (LLSIM-441)\r\n-- Nesrin    2019.11.14 LLSIM-3614: Update the SP to get the template posting information\r\n--------------------------------------------------------------------------\r\n    SELECT\r\n       TemplateID\r\n      ,TemplateName\r\n      ,PostType\r\n      ,DateAvail\r\n      ,SrceID\r\n      ,SrceCity\r\n      ,SrceSt\r\n      ,SrceRadius\r\n      ,DestID\r\n      ,DestCity\r\n      ,DestSt\r\n      ,DestRadius\r\n      ,dbo.udf_VSizeToString(VSize,PostType) VehicleSize \r\n      ,dbo.udf_VTypeToString(VType) VehicleType \r\n      ,Comment\r\n      ,PostMode\r\n      ,ClientRefNum\r\n      ,dbo.udf_PostingAttributeToString(PAttrib) PostingAttrib\r\n      ,CreatedOn\r\n      ,CreatedBy\r\n      ,NetworkId\r\n      ,UpdatedOn\r\n      ,UpdatedBy\r\n      ,Corridor\r\n\t  ,CustomerTracking\r\n    FROM dbo.TemplatePosting\r\n    WHERE CustCd = @CustCd \r\n    AND (@UserID = 0 OR CreatedBy = @UserID)\r\n    AND (@TemplateID = 0 OR TemplateID = @TemplateID)\r\n    AND DeletedOn is NULL -- Not soft deleted.\r\nEND","parameters":[{"name":"CustCd","description":null,"mode":"IN","data_type":"varchar(10)","custom_fields":{}},{"name":"UserID","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"TemplateID","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
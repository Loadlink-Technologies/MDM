window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p288","name":"usp_GetPostingsByAccount","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_GetPostingsByAccount"},{"field":"Type","value":"Procedure"}],"script":"-- =============================================================================================================\r\n\r\nCREATE   PROCEDURE [dbo].[usp_GetPostingsByAccount]\r\n    @CustCd VARCHAR(100) ,\r\n\t@ActivityType char ='C', -- 'C' for Current Postings, 'H' for History postings\r\n    @MaxRecords   int  = 1000\r\n\r\n--------------------------------------------------------------------------\r\n-- PROCEDURE NAME : usp_GetPostingsByAccount\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Get Load & Equipment Postings for an account\r\n--\r\n-- CALLED BY      : Main.dbo.usp_GetPostingsByAccount which is used by the IPEnforcement APi\r\n-- EXECUTION FREQUENCY : \r\n-- \r\n-- INPUT PARAMS   : @CustCd   - Customer Code                 \r\n--                  @ActivityType - current or History\r\n-- OUTPUT PARAMS  :\r\n-- STATUS RETURN  : \r\n--------------------------------------------------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR    DATE       DESCRIPTION\r\n-- Nesrin    2019.08.29 Initial Development\r\n--                      LLSIM-3272: Create a new stored procedure to get all the postings for an account\r\n--                      Current & History postings\t\r\n-- Nesrin    2019.11.28 LLSIM-3694: IP Management -- Under current posting the status should say N/A if the posting is from legacy\t\t\t\r\n-- Nesrin    2020.05.05 LLSIM-4198: Backend add comments property to postings in IPManagement \r\n----------------------------------------------------------------------------------------------------------------------\r\n--SET NOCOUNT ON\r\nAS\r\nDECLARE @Users TABLE\r\n\t( \r\n\t\tUserId int,\r\n\t\tName Varchar(100) ,\r\n\t\tEmail nvarchar(256)\r\n\t)\r\n\r\n\tINSERT INTO @Users (UserId, Name, Email)\r\n\tSELECT \r\n\t u.UserId\r\n\t,u.FirstName + ' ' + u.LastName\r\n\t, u.Email\r\n\tFROM Main.dbo.Users u inner join Main.dbo.Account ac \r\n\t\ton u.AccountId = ac.AccountId\r\n\twhere ac.CustCd = @CustCd\r\n\r\nif @ActivityType = 'C'\r\n\tBegin\r\n\t\tSELECT top (@MaxRecords) * from\r\n\t\t\t( select\r\n\t\t\t\tCASE WHEN l.OriginalToken > 0 THEN 'N/A' ELSE l.PStatus END AS PStatus,\r\n\t\t\t\tl.DateAvail ,\r\n\t\t\t\tl.SrceCity + ', ' +  l.SrceSt + '(' + cast( l.SrceRadius as varchar) + ')' as Origin,\r\n\t\t\t\tl.DestCity + ', ' +  l.DestSt + '(' + cast(l.DestRadius as varchar) + ')' as Destination,\r\n\t\t\t\tl.CreatedOn ,\r\n\t\t\t\tl.DeletedOn,\r\n\t\t\t\tdbo.udf_VSizeToString(l.VSize,'L') VehicleSize ,\r\n\t\t\t\tdbo.udf_VTypeToString(l.VType) VehicleType ,\r\n\t\t\t\t' ' as Corridor,\r\n\t\t\t\tdbo.udf_PostingAttributeToString(l.PAttrib) PostingAttrib ,\r\n\t\t\t\tl.InitialLeadsCount,\r\n\t\t\t\tCase when ProductName ='WEBAPI' then 'Platform' else ProductName end as ProductName,\r\n\t\t\t\tus.Name as PostedBy,\r\n\t\t\t\tus.Email,\r\n\t\t\t\tl.comment,\r\n\t\t\t\t'L' as PType\r\n\t\t\tFROM dbo.LoadPosting l left join @Users us on us.UserId = l.CreatedBy\r\n   \r\n\t\t   WHERE CustCd = @CustCd\r\n\r\n\t\tunion\r\n\t\r\n\t\t\t SELECT\r\n\t\t\t\tCASE WHEN e.originalToken > 0 THEN 'N/A' ELSE e.PStatus END AS PStatus ,\r\n\t\t\t\te.DateAvail ,\r\n\t\t\t\te.SrceCity + ', ' +  e.SrceSt + '(' + cast( e.SrceRadius as varchar) + ')' as Origin,\r\n\t\t\t\te.DestCity + ', ' +  e.DestSt + '(' + cast(e.DestRadius as varchar) + ')' as Destination,\r\n\t\t\t\te.CreatedOn ,\r\n\t\t\t\te.DeletedOn,\r\n\t\t\t\tdbo.udf_VSizeToString(e.VSize,'E') VehicleSize ,\r\n\t\t\t\tdbo.udf_VTypeToString(e.VType) VehicleType ,\r\n\t\t\t\te.Corridor as Corridor,\r\n\t\t\t\tdbo.udf_PostingAttributeToString(e.PAttrib) PostingAttrib ,\r\n\t\t\t\te.InitialLeadsCount,\r\n\t\t\t\tCase when ProductName ='WEBAPI' then 'Platform' else ProductName end as ProductName,\r\n\t\t\t\tus.Name as PostedBy,\r\n\t\t\t\tus.Email,\r\n\t\t\t\te.comment,\r\n\t\t\t\t'E' as PType\r\n\t\t\tFROM dbo.EquipmentPosting e left join @Users us on us.UserId = e.CreatedBy\r\n   \r\n\t\t\t WHERE CustCd = @CustCd\r\n\t\t) C\r\n\t   order by createdOn desc\r\n\tEnd\r\nelse if @ActivityType = 'H'\r\n\tBegin\r\n\t\tSELECT top (@MaxRecords) * from\r\n\t\t\t(select\r\n\t\t\t\tCASE WHEN la.originalToken > 0 THEN 'N/A' ELSE la.PStatus END AS PStatus ,\r\n\t\t\t\tla.DateAvail ,\r\n\t\t\t\tla.SrceCity + ', ' +  la.SrceSt + '(' + cast( la.SrceRadius as varchar) + ')' as Origin,\r\n\t\t\t\tla.DestCity + ', ' +  la.DestSt + '(' + cast(la.DestRadius as varchar) + ')' as Destination,\r\n\t\t\t\tla.CreatedOn ,\r\n\t\t\t\tla.DeletedOn,\r\n\t\t\t\tdbo.udf_VSizeToString(la.VSize,'L') VehicleSize ,\r\n\t\t\t\tdbo.udf_VTypeToString(la.VType) VehicleType ,\r\n\t\t\t\t' ' as Corridor,\r\n\t\t\t\tdbo.udf_PostingAttributeToString(la.PAttrib) PostingAttrib ,\r\n\t\t\t\tla.InitialLeadsCount,\r\n\t\t\t\tCase when ProductName ='WEBAPI' then 'Platform' else ProductName end as ProductName,\r\n\t\t\t\tus.Name as PostedBy,\r\n\t\t\t\tus.Email,\r\n\t\t\t\tla.comment,\r\n\t\t\t\t'L' as PType\r\n\t\t\tFROM dbo.LoadPosting_Arch la left join @Users us on us.UserId = la.CreatedBy\r\n   \r\n\t\t   WHERE CustCd = @CustCd and la.token not in (select token from dbo.LoadPosting)\r\n\r\n\t\tunion\r\n\t\r\n\t\t\t SELECT\r\n\t\t\t\tCASE WHEN ea.OriginalToken > 0 THEN 'N/A' ELSE ea.PStatus END AS PStatus,\r\n\t\t\t\tea.DateAvail ,\r\n\t\t\t\tea.SrceCity + ', ' +  ea.SrceSt + '(' + cast( ea.SrceRadius as varchar) + ')' as Origin,\r\n\t\t\t\tea.DestCity + ', ' +  ea.DestSt + '(' + cast(ea.DestRadius as varchar) + ')' as Destination,\r\n\t\t\t\tea.CreatedOn ,\r\n\t\t\t\tea.DeletedOn,\r\n\t\t\t\tdbo.udf_VSizeToString(ea.VSize,'E') VehicleSize ,\r\n\t\t\t\tdbo.udf_VTypeToString(ea.VType) VehicleType ,\r\n\t\t\t\tea.Corridor as Corridor,\r\n\t\t\t\tdbo.udf_PostingAttributeToString(ea.PAttrib) PostingAttrib ,\r\n\t\t\t\tea.InitialLeadsCount,\r\n\t\t\t\tCase when ProductName ='WEBAPI' then 'Platform' else ProductName end as ProductName,\r\n\t\t\t\tus.Name as PostedBy,\r\n\t\t\t\tus.Email,\r\n\t\t\t\tea.Comment,\r\n\t\t\t\t'E' as PType\r\n\t\t\tFROM dbo.EquipmentPosting_Arch ea left join @Users us on us.UserId = ea.CreatedBy\r\n   \r\n\t\t   WHERE CustCd = @CustCd and ea.token not in (select token from dbo.EquipmentPosting)\r\n\t\t   )H\r\n\t   order by createdOn desc\r\n\tEnd","parameters":[{"name":"CustCd","description":null,"mode":"IN","data_type":"varchar(100)","custom_fields":{}},{"name":"ActivityType","description":null,"mode":"IN","data_type":"char(1)","custom_fields":{}},{"name":"MaxRecords","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p312","name":"usp_ReleaseEquipmentPosting","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_ReleaseEquipmentPosting"},{"field":"Type","value":"Procedure"}],"script":"CREATE PROCEDURE [dbo].[usp_ReleaseEquipmentPosting]\r\n@Token INT,\r\n@UserId INT,\r\n@CustCd VARCHAR(10)\r\n--------------------------------------------------------------------------\r\n-- PROCEDURE NAME : [usp_ReleaseEquipmentPosting]\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Broker load posting stucks on pending status \r\n--\t\t\t\t\twhen carrier deletes the posting which is assigned by broker\r\n--\t\t\t\t\tThis SP will delete the equipment posting AND recreate the assigned load if exits\r\n--\r\n-- CALLED BY      : LoadMatching Web API \r\n-- EXECUTION FREQUENCY : \r\n-- \r\n-- INPUT PARAMS   : @UserId - User performing a delete\r\n--                  @Token  - Equipment token to be deleted. \r\n--\t\t\t\t\t@CustCd - CustCd that owns the token\r\n--                 \r\n-- OUTPUT PARAMS  :\r\n-- STATUS RETURN  : \r\n------------------------------------------------------------------------------------------------------------------------\r\n-- ======================================================================================================================\r\n-- HISTORY :\r\n-- AUTHOR    DATE       DESCRIPTION\r\n-- Nesrin   2020.03.26  Initial Development\r\n--\t\t\t\t\t\tLLSIM-3670: Create a new SP in LoadMatching db to delete assigned load\r\n-- =============================================\r\nAS\r\n\r\nDECLARE\r\n @LToken INT=0, @LUserId INT=0, @LCustCd VARCHAR(10), @LGlobalExcluded BIT\r\n\r\n --==========================================================================================================================\r\n -- Declaration of variables AND the table with the returned values from usp_DeleteAssignedLoad SP\r\n DECLARE @DeleteAssignedLoad TABLE (CustCd VARCHAR (10), EquipCreatorUserId INT, EToken INT\r\n\t\t\t\t\t\t\t\t\t,LoadCustCd VARCHAR(10), LoadCreatorUserId INT,Token INT, DriverID INT)\r\n\r\n\r\n--==========================================================================================================================\r\n---- DECLARE Load posting table to get the record that will be deleted from LoadPosting table\r\n\r\nDECLARE @LoadPostingRecord AS TABLE\r\n\t\t(token INT, CustCd VARCHAR(10), DateAvail DATE, SrceID INT,SrceCity VARCHAR(50),SrceSt VARCHAR(2),SrceCountry INT,SrceLong FLOAT, \r\n\t\t SrceLat FLOAT, SrceRadius INT,SrceMarketAreaID INT, DestID INT,DestCity VARCHAR(50),DestSt VARCHAR(2),DestCountry INT,DestLong FLOAT, DestLat FLOAT,\r\n\t\t DestRadius INT,DestMarketAreaID INT, VehicleSize VARCHAR(64),VehicleType VARCHAR(25),Comment VARCHAR(4096),PostMode CHAR(1),ClientRefNum VARCHAR(256),\r\n \t\t  ProductName VARCHAR(25),PostingAttrib VARCHAR(25),Distance DECIMAL(9,1),CreatedBy INT,CreatedOn DATETIME2(7),DeletedBy INT,DeletedOn DATETIME2(7),\r\n\t\t  VType INT, PStatus CHAR(1),NetworkId INT,RIType INT, VSize INT, PAttrib INT, OriginalToken INT, LeadsCount INT)\r\n--==========================================================================================================================\r\n ---- Tables AND varibles to check the status AND values of executed stored procedure \r\n DECLARE @DeleteEquipmentPosting TABLE (RowsCount INT)\r\n DECLARE @DeleteLoadPosting TABLE (RowsCount INT)\r\n DECLARE @DeleteLoadPostingCount INT\r\n\r\n--==========================================================================================================================\r\n --- DECLARE the variables needed to execute the procedure to create new load posting\r\n DECLARE\t\t\r\n\t\t @LDateAvail date, @LSrceID INT, @LSrceCity VARCHAR(50), @LSrceSt VARCHAR(2), @LSrceLong FLOAT, @LSrceLat FLOAT, @LSrceRadius INT, @LDestID INT,@LDestCity VARCHAR(50),\r\n\t\t @LDestSt VARCHAR(2), @LDestLong FLOAT, @LDestLat FLOAT,@LDestRadius INT, @LVSize INT, @LVType INT,@LComment VARCHAR(4096), @LPostMode CHAR(1),\r\n\t\t @LClientRefNum VARCHAR(256),@LProductName VARCHAR(25), @LPAttrib INT, @LCreatedBy INT, @LNetworkId INT, @LOriginalToken INT\r\n\t\t\r\n--==========================================================================================================================\r\n\r\nBEGIN TRANSACTION TransReleasePosting\r\n\tBEGIN TRY\r\n\r\n\tINSERT INTO @DeleteEquipmentPosting \r\n\t\t\tEXEC [dbo].[usp_DeleteEquipmentPosting] @CustCd,@UserId, @token\r\n\r\n\r\n\t---- delete assignload record then get the records of loadposting AND equipementposting then delete the old postings\r\n\t\t--- Get all the values for the broker if the load is asssigned\r\n\r\n\t\tSELECT @LToken = AL.Token, @LCustCd = Equ.CustCd FROM [dbo].[AssignedLoad] AL \r\n\t\t\tINNER JOIN  [dbo].[EquipmentPosting] Equ\r\n\t\t\t\tON AL.EToken = Equ.Token AND Equ.CustCd = @CustCd WHERE AL.EToken=@Token AND AL.DeletedOn is null\r\n\t\tIF (@LToken > 0)\r\n\t\t\tBEGIN\r\n\t\t\t\tSELECT @LCustCd = CustCd, @LUserId = CreatedBy from [dbo].[LoadPosting] WHERE token = @LToken\t\t\t\t\r\n\r\n\t\t\t\tINSERT INTO @DeleteAssignedLoad\r\n\t\t\t\t\tEXEC [dbo].[usp_DeleteAssignedLoad] @UserId,@Ltoken\r\n\r\n\t\t\t\t\r\n\t\t\t\t--- Get the LoadPostingRecord to get all the data required to create a new one\tthen delete the old one\tand repost the new one\t\t\t\t\r\n\t\r\n\t\t\t\t---- execute the SP to get the Load posting\r\n\t\t\t\tINSERT INTO @LoadPostingRecord\r\n\t\t\t\t\tEXEC [dbo].[usp_GetLoadPosting] @LCustCd, @LToken\r\n\t\r\n\t\t\t\t\r\n\t\t\t\t---- Get the values of the record AND assign them to variables to pass it again to the [usp_CreateLoadPosting] SP\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\tSELECT top 1 @LDateAvail = DateAvail, @LSrceID = SrceID, @LSrceCity=SrceCity,@LSrceSt= SrceSt,@LSrceLong =SrceLong,@LSrceLat=SrceLat,@LSrceRadius= SrceRadius,\r\n\t\t\t\t\t\t@LDestID =DestID,@LDestCity=DestCity,@LDestSt=DestSt,@LDestLong=DestLong, @LDestLat=DestLat,@LDestRadius =DestRadius,\r\n\t\t\t\t\t\t@LVSize=VSize,@LVType=VType,@LComment=Comment,@LPostMode=PostMode,@LClientRefNum=ClientRefNum,@LProductName = ProductName,\r\n\t\t\t\t\t\t@LPAttrib=PAttrib,@LCreatedBy = CreatedBy,@LNetworkId = NetworkId, @LOriginalToken = OriginalToken\r\n\t\t\t\tfrom @LoadPostingRecord\t\r\n\t\t\t\t\r\n\t\t\t\t----- Delete the Old record (Soft delete)\r\n\t\t\t\t\t\r\n\t\t\t\tINSERT INTO @DeleteLoadPosting\r\n\t\t\t\t\t\tEXEC [dbo].[usp_DeleteLoadPosting] @LCustCd,@LUserId, @LToken\r\n\r\n\t\t\t\t\r\n\t\t\t\t EXEC @LGlobalExcluded = [usp_GetGlobalExcluded] @LCustCd\r\n\r\n\t\t\t\tEXEC [dbo].[usp_CreateLoad] @CustCd = @LCustCd, @DateAvail = @LDateAvail, @SrceID= @LSrceID,@SrceCity = @LSrceCity,\r\n\t\t\t\t\t @SrceSt = @LSrceSt,@SrceLong = @LSrceLong, @SrceLat = @LSrceLat , @SrceRadius = @LSrceRadius,@DestID = @LDestID, @DestCity = @LDestCity,\r\n\t\t\t\t\t @DestSt = @LDestSt, @DestLong = @LDestLong,@DestLat = @LDestLat,@DestRadius = @LDestRadius,@VSize = @LVSize,@VType = @LVType,\r\n\t\t\t\t\t @Comment  = @LComment, @PostMode = @LPostMode, @ClientRefNum = @LClientRefNum,@ProductName = @LProductName,@PAttrib = @LPAttrib,\r\n\t\t\t\t\t @CreatedBy = @LCreatedBy, @NetworkId = @LNetworkId, @OriginalToken = @LOriginalToken, @GlobalExcluded = @LGlobalExcluded\r\n\r\n\r\n\t\t\tEND\r\n\r\n\t\t\t\t\t\t\t\t\r\n\r\n--===================================================================================================================\r\n\t--- Get the reult output for the deleted record\r\n\t\t\r\n\tSELECT RowsCount FROM @DeleteEquipmentPosting\r\n\t\r\n\r\n--ROLLBACK TRANSACTION TransUnAssign\r\n\r\n\r\nCOMMIT TRANSACTION TransReleasePosting\r\n\r\n END TRY\r\nBEGIN CATCH\r\n\t\tSELECT ERROR_NUMBER() AS ErrorNumber,\r\n         ERROR_MESSAGE() AS ErrorMessage\r\n\t\tROLLBACK TRANSACTION TransReleasePosting\r\nEND CATCH","parameters":[{"name":"Token","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"UserId","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"CustCd","description":null,"mode":"IN","data_type":"varchar(10)","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p245","name":"usp_GetAssignedLoad","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_GetAssignedLoad"},{"field":"Type","value":"Procedure"}],"script":"CREATE PROCEDURE [dbo].[usp_GetAssignedLoad]\r\n    @UserId     INT = 0,\r\n    @Token      INT = 0,\r\n    @EToken     INT = 0,\r\n    @MileageProvider CHAR(1) = 'P' -- G=Google (Default), P=PCMiler \r\nAS\r\nBEGIN\r\n\r\n--------------------------------------------------------------------------\r\n-- PROCEDURE NAME : usp_GetAssignedLoad\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Get the list of Load that has been assigned to driver or carrier\r\n--\r\n-- CALLED BY      : LoadMatching Web API \r\n-- EXECUTION FREQUENCY : \r\n-- \r\n-- INPUT PARAMS   : @UserID - (optional) Caller's User ID\r\n--                  @Token - (optional) If provided then return 1 Assigned Load\r\n--                 \r\n-- OUTPUT PARAMS  :\r\n-- STATUS RETURN  : \r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR    DATE       DESCRIPTION\r\n-- Hiro      2018.02.01 Initial Release\r\n-- Hiro      2018.04.12 Updated Mileage Calculation\r\n-- Hiro      2018.04.13 Added EquipmentID, DriverID, and EToken\r\n-- Vevian    2018.06.22\tAdded VehicleSizeDetail (using new udf udf_VSizeDetail)\r\n-- Vevian    2018.06.27\tAdded VehicleTypeDetail (using new udf udf_VTypeDetail)\r\n-- Hiro      2018.09.20 LoadPosting has to exist assignedLoad so Changed to INNER JOIN\r\n-- Vevian\t 2018.11.23 Return Load (Broker) CustCd as well (LLSIM-1909) - needed for the notifications.\r\n-- Vevian\t 2018.11.30 Return Load CreatedBy UserId as well (LLSIM-1929) - for the notifications to be properly sent.\r\n-- Vevian\t 2018.12.11 Return Equipment CreatedBy UserId (LLSIM-1995) - needed for the notifications.\r\n-- Vevian\t 2019.02.19\tLLSIM-2308: return new \"CustTracking\" field value\r\n-- Nesrin    2019.03.08\tLLSIM-1758: Change the Default value of @MileageProvider to P to get the PCMilerMiles\r\n-- Vevian\t 2019.03.12 LLSIM-2457: get list of assigned posting when driver is logged-in based on DriverId not UserId\r\n-- Hiren     2019.03.14 LLSIM-2401: Change response as per load or Equipment\r\n-- Hiren     2019.05.01 LLSIM-2533: Sending proper vehicle size in case of mobile and web\r\n-- Vevian\t 2020.04.08\tLLSIM-4061: Code optimization after converting memory-optimized tables to Desk-based tables\r\n----------------------------------------------------------------------------------------\r\nDECLARE @LorE CHAR;\r\n\r\nIF  @EToken = 0\r\n\tSET @LorE='E';\r\nELSE\r\n\tSET @LorE='L'\r\n\r\nSELECT\r\n       a.ID\r\n      ,a.CustCd\r\n      ,a.UserId\r\n      ,a.Token\r\n      ,a.PIN\r\n      ,a.Instruction\r\n      ,a.CreatedOn\r\n      ,a.CreatedBy\r\n      ,a.DeletedOn\r\n      ,a.DeletedBy\r\n      ,a.UpdatedOn\r\n      ,a.UpdatedBy\r\n      ,a.EquipmentID\r\n      ,a.DriverID\r\n      ,a.EToken\r\n\t  ,ISNULL(a.CustTracking, 0) CustTracking\r\n      ,l.DateAvail       \r\n      ,l.SrceCity \r\n      ,l.SrceSt \r\n      ,l.SrceCountry \r\n      ,l.SrceLong \r\n      ,l.SrceLat \r\n      ,l.DestCity \r\n      ,l.DestSt \r\n      ,l.DestCountry \r\n      ,l.DestLong \r\n      ,l.DestLat\t  \r\n      ,vs.Code VehicleSize\t\t\t\t\t-- dbo.udf_VSizeToString(l.VSize,'L') VehicleSize \r\n      ,vs.Detail VehicleSizeDetail\t\t\t-- dbo.udf_VSizeDetail(l.VSize,'L') VehicleSizeDetail\r\n      ,dbo.udf_VTypeToString(l.VType) VehicleType \r\n      ,dbo.udf_VTypeDetail(l.VType) VehicleTypeDetail\r\n      ,l.Comment \r\n      ,l.PostMode \r\n      ,l.ClientRefNum \r\n      ,dbo.udf_PostingAttributeToString(l.PAttrib) PostingAttrib \r\n      ,dbo.udf_GetMileage(l.SrceID, l.DestID, @MileageProvider) Distance\r\n      ,l.PStatus\r\n      ,ISNULL(c.CommonName,'NA') Company\r\n\t  ,l.CustCd LoadCustCd\r\n\t  ,l.CreatedBy LoadCreatorUserId\r\n\t  ,(SELECT ISNULL(e.CreatedBy,'') FROM dbo.EquipmentPosting e WHERE e.Token = a.EToken) EquipCreatorUserId\r\n\r\n    FROM  dbo.AssignedLoad a\r\n\t\tINNER JOIN dbo.LoadPosting l ON a.Token = l.Token\r\n\t\tLEFT JOIN Main.dbo.Account c ON l.CustCd = c.Custcd\t\r\n\t\tLEFT JOIN dbo.VehicleSize vs ON l.VSize = vs.[Value] AND vs.PostType = 'L'\r\n\r\n    --WHERE (@UserID = 0 OR a.UserId = @UserID) \r\n\tWHERE (@UserID = 0 OR (@UserID = a.UserId) OR (@UserID = a.DriverId))\r\n\t\t\tAND (@Token = 0 OR a.Token = @Token)\r\n\t\t\tAND (@EToken = 0 OR a.EToken = @EToken)\r\n\t\t\tAND a.DeletedOn IS NULL -- Not soft deleted.\r\n\t\t\tAND (\r\n\t\t\t\t\ta.EToken IS NULL \r\n\t\t\t\t\tOR\r\n\t\t\t\t\tEXISTS(SELECT token FROM dbo.equipmentPosting WHERE token =a.EToken AND Pstatus <> 'W')\r\n\t\t\t\t)\t\r\nEND","parameters":[{"name":"UserId","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"Token","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"EToken","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"MileageProvider","description":null,"mode":"IN","data_type":"char(1)","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
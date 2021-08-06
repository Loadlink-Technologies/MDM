window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p231","name":"usp_DeleteAssignedLoad","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_DeleteAssignedLoad"},{"field":"Type","value":"Procedure"}],"script":"-----------------------------------------------------------------------\r\n-- PROCEDURE NAME : usp_DeleteAssignedLoad\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Delete record from AssignedLoad table for given Assigned Load\r\n--                  Note: This SP will perform soft delete. \r\n--\r\n-- ASSUMPTIONS    : \r\n-- CALLED BY      : \r\n-- EXECUTION FREQUENCY : OnDemand\r\n--\r\n-- INPUT PARAMS   : @UserId - User performing a delete\r\n--                  @Token  - Load to be deleted. \r\n--                  \r\n-- OUTPUT PARAMS  :\r\n-- STATUS RETURN  : \r\n--------------------------------------------------------------------------\r\n-- HISTORY :\r\n-- AUTHOR    DATE\t\t\tDESCRIPTION\r\n-- Hiro      2018.01.16\t\tInitial Release\r\n-- Vevian\t 2018.12.12\t\tLLSIM-1993: return deleted AssignedLoad info which is needed by the client for unassignment status change and notifications\r\n-- Nesrin\t 2019.01.03\t\tLLSIM-2044: return the DriverID for the Unassignment process\r\n---------------------------------------------------------------------------\r\nCREATE PROCEDURE [dbo].[usp_DeleteAssignedLoad]\r\n    @UserId     INT ,\r\n    @Token      INT \r\n\r\nAS\r\nBEGIN\r\n\r\nBEGIN TRY\r\n    UPDATE dbo.AssignedLoad\r\n    SET DeletedOn = GETUTCDATE()\r\n       ,DeletedBy = @UserId\r\n    WHERE Token = @Token\r\n    AND DeletedOn is NULL -- Only Soft delete not deleted Assigned Load\r\nEND TRY\r\nBEGIN CATCH\r\n    SELECT \r\n        ERROR_NUMBER() AS ErrorNumber,\r\n        ERROR_MESSAGE() AS ErrorMessage;\r\nEND CATCH;\r\n\r\n-- Return Deleted Assigned Load info needed for unassignment Status Change and notifications\r\nSELECT \r\n\t   --EQUIPMENT INFO\r\n\t   a.CustCd\r\n      ,(SELECT ISNULL(e.CreatedBy,'') FROM dbo.EquipmentPosting e where e.Token = a.EToken) EquipCreatorUserId\r\n\t  ,a.EToken\r\n\r\n\t  --LOAD INFO\r\n\t  ,l.CustCd LoadCustCd\r\n\t  ,l.CreatedBy LoadCreatorUserId\r\n\t  ,a.Token\r\n\t  ,a.DriverID\r\n\r\nFROM  dbo.AssignedLoad a INNER JOIN dbo.LoadPosting l on a.Token = l.Token\r\nWHERE a.Token = @Token\r\n\r\nEND","parameters":[{"name":"UserId","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"Token","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
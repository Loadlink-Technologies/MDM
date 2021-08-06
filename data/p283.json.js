window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p283","name":"usp_GetNetworkList","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_GetNetworkList"},{"field":"Type","value":"Procedure"}],"script":"CREATE PROCEDURE [dbo].[usp_GetNetworkList]\r\n(\r\n\t@CustCd VARCHAR(10),\r\n    @UserID INT = 0\r\n\r\n)\t\r\nAS\r\nBEGIN\r\n\r\n    SET NOCOUNT ON;\r\n\r\n    IF (@UserID <> 0)\r\n      BEGIN\r\n         SELECT \r\n            [Id],\r\n            [Name],\r\n            [Type],\r\n            [UserId],\r\n            [CustCD]\r\n        FROM dbo.Networks \r\n        WHERE (CustCD = @CustCd AND [Type] = 'Public')\r\n        OR (@UserID = 0 OR (UserId = @UserID AND [Type] = 'Private'))\r\n      END\r\n    ELSE\r\n      BEGIN -- Return Public + All Private\r\n        SELECT \r\n            [Id],\r\n            [Name],\r\n            [Type],\r\n            [UserId],\r\n            [CustCD]\r\n        FROM dbo.Networks \r\n        WHERE CustCD = @CustCd\r\n      END\r\nEND","parameters":[{"name":"CustCd","description":null,"mode":"IN","data_type":"varchar(10)","custom_fields":{}},{"name":"UserID","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
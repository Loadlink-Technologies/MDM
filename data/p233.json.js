window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p233","name":"usp_DeleteDATLoadPosting","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_DeleteDATLoadPosting"},{"field":"Type","value":"Procedure"}],"script":"CREATE PROCEDURE [dbo].[usp_DeleteDATLoadPosting]\r\n\t@Token  INT ,\r\n    @UserId INT = 0\r\n\r\n--------------------------------------------------------------------------\r\n-- PROCEDURE NAME : usp_DeleteDATLoadPosting\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Delete DAT Load Posting\r\n--\r\n-- CALLED BY      : LoadMatching Web API \r\n-- EXECUTION FREQUENCY : \r\n-- \r\n-- INPUT PARAMS   : @Token   - DAT LoadPosting to remove \r\n--                  @UserId  - User requesting the Load Posting removal, In integration mode, UserId will be 0     \r\n--                 \r\n-- OUTPUT PARAMS  :\r\n-- STATUS RETURN  : > 0 - Sucessfully Removed Posting\r\n--                    0 - Not Removed.\r\n--                   -1 - Something went wrong. \r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR   DATE\t\tDESCRIPTION\r\n-- Hiro     2018.08.30\tInitial Development\r\n-- Vevian\t2019.05.30\tLLSIM-2800: Insert deleted DAT postings in table \"LegacyDeleted\".\r\n-- Vevian\t2019.06.06\tLLSIM-2800: Add a condition to check if a record already exists in LegacyDeleted table\r\n--------------------------------------------------------------------------\r\n--SET NOCOUNT ON\r\nAS\r\nDECLARE @Rowcount INT = 0\r\n    BEGIN TRY\r\n        UPDATE dbo.DATLoadPosting \r\n        SET    DeletedOn = GETUTCDATE()\r\n              ,DeletedBy = @UserId\r\n        WHERE  Token = @Token\r\n        AND    DeletedOn IS NULL\r\n\r\n\t\t---Copy deleted DAT tokens to [LegacyDeleted]\r\n\t\tif not exists(SELECT * FROM [dbo].[LegacyDeleted] WHERE Token = @Token)\r\n\t\tBEGIN\r\n\t\t\tINSERT INTO [dbo].[LegacyDeleted] ([Token]) VALUES (@Token)\r\n\t\tEND\r\n\r\n        SET @Rowcount = @@ROWCOUNT\r\n    END TRY\r\n    BEGIN CATCH\r\n        SET @Rowcount = -1\r\n    END CATCH\r\n\r\n    SELECT @Rowcount 'Status'\r\n--END","parameters":[{"name":"Token","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"UserId","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
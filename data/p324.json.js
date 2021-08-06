window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p324","name":"usp_UpdateMember","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_UpdateMember"},{"field":"Type","value":"Procedure"}],"script":"-----------------------------------------------------------------------\r\n-- PROCEDURE NAME : usp_UpdateMember\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Updates Member record\r\n--\r\n-- INPUT PARAMS   : @MemberId - Member record id\r\n--\t\t\t\t\t@DispatchNote - Member dispatch note\r\n--------------------------------------------------------------------------\r\n-- HISTORY :\r\n-- AUTHOR\t\tDATE\t\t\tDESCRIPTION\r\n-- Vevian\t\t2018.07.31\t\tInitial Release\r\n---------------------------------------------------------------------------\r\nCREATE PROCEDURE [dbo].[usp_UpdateMember]\r\n    @MemberId\t\tINT,\r\n\t@DispatchNote\tVARCHAR(255) = ''\r\n\r\nAS\r\n\tUPDATE Member \r\n\tSET DispatchNote = @DispatchNote\r\n\tWHERE MemberId = @MemberId","parameters":[{"name":"MemberId","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"DispatchNote","description":null,"mode":"IN","data_type":"varchar(255)","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
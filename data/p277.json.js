window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p277","name":"usp_GetLoadPosting","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_GetLoadPosting"},{"field":"Type","value":"Procedure"}],"script":"CREATE PROCEDURE [dbo].[usp_GetLoadPosting]\r\n    @CustCd\t\t\t VARCHAR(10) \r\n  , @Token\t\t\t INT = NULL\r\n  , @MileageProvider CHAR(1) = 'P' -- G=Google (Default), P=PCMiler \r\n  , @GetDAT\t\t\t BIT = 0\r\n\r\n--------------------------------------------------------------------------\r\n-- PROCEDURE NAME : usp_GetLoadPosting\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Get Load Posting\r\n--\r\n-- CALLED BY      : LoadMatching Web API \r\n-- EXECUTION FREQUENCY : \r\n-- \r\n-- INPUT PARAMS   : @CustCd   - Customer Code\r\n--                  @Token    - Posting's Primary key, NULL will return all active posting\r\n--                  @DAT      - If the user is subscribed to DAT or not\r\n-- OUTPUT PARAMS  :\r\n-- STATUS RETURN  : \r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR    DATE       DESCRIPTION\r\n-- Hiro      2018.03.20 Initial Development\r\n-- Hiro      2018.04.11 Removed Route column and input parameter\r\n-- Hiro      2018.10.24 Do not return the Legacy posting to Platform User (LLSIM-1721)\r\n-- Nesrin    2018.12.27 Return the actual value of VSize & PAttrib fields required for Reposting cancelled order (LLSIM-2026)\r\n-- Nesrin    2019.03.08 LLSIM-1758: Change the Default value of @MileageProvider to P to get the PCMilerMiles\r\n-- Nesrin    2020.03.05 LLSIM-3996: Update GET list to retrieve load leads count  \r\n-- Vevian\t 2020.04.09\tLLSIM-4061: Code optimization after converting memory-optimized tables to Desk-based tables\r\n-- Nesrin    2020.04.14 LLSIM-4061: Script current Loadmatching DB and create a new one with no memory optimized tables\r\n--------------------------------------------------------------------------\r\n--SET NOCOUNT ON\r\nAS\r\nBEGIN\r\n    SELECT\r\n        l.Token ,\r\n        l.CustCD ,\r\n        l.DateAvail ,\r\n        \r\n        l.SrceID ,\r\n        l.SrceCity ,\r\n        l.SrceSt ,\r\n        l.SrceCountry ,\r\n        l.SrceLong ,\r\n        l.SrceLat ,\r\n        l.SrceRadius ,\r\n        p1.MarketAreaID SrceMarketAreaID,\r\n\r\n        l.DestID ,\r\n        l.DestCity ,\r\n        l.DestSt ,\r\n        l.DestCountry ,\r\n        l.DestLong ,\r\n        l.DestLat ,\r\n        l.DestRadius ,\r\n        p2.MarketAreaID DestMarketAreaID,\r\n\t\tvs.Code VehicleSize,\r\n       -- dbo.udf_VSizeToString(l.VSize,'L') VehicleSize ,\r\n        dbo.udf_VTypeToString(l.VType) VehicleType ,\r\n        l.Comment ,\r\n        l.PostMode ,\r\n        l.ClientRefNum ,\r\n        l.ProductName ,\r\n        dbo.udf_PostingAttributeToString(l.PAttrib) PostingAttrib ,\r\n        dbo.udf_GetMileage(l.SrceID,l.DestID,@MileageProvider) Distance,\r\n        l.CreatedBy ,\r\n        l.CreatedOn ,\r\n        l.DeletedBy ,\r\n        l.DeletedOn ,  \r\n        l.VType ,\r\n        l.PStatus ,\r\n        l.NetworkID ,\r\n        dbo.udf_ConvertLLVtypeToRIVtype(l.VType) RIType,\r\n\t\tl.VSize,\r\n\t\tl.PAttrib,\r\n\t\tl.OriginalToken,\r\n\t\t[dbo].[udf_GetLoadLeadsCount] (@CustCd,l.Token,@GetDAT)  LeadsCount\r\n    FROM dbo.LoadPosting l WITH(NOLOCK)\r\n    INNER JOIN dbo.Point p1 WITH(NOLOCK) ON l.SrceID = p1.ID \r\n    INNER JOIN dbo.Point p2 WITH(NOLOCK) ON l.DestID = p2.ID \r\n\tINNER JOIN dbo.VehicleSize vs WITH(NOLOCK) ON vs.Value = l.VSize AND vs.PostType = 'L'\r\n    WHERE CustCd = @CustCd\r\n    AND (@Token IS NULL OR @Token = Token)\r\n    AND DeletedOn IS NULL\r\n    AND l.OriginalToken = 0 -- Only return the Platform Posting (LLSIM-1721)\r\nEND","parameters":[{"name":"CustCd","description":null,"mode":"IN","data_type":"varchar(10)","custom_fields":{}},{"name":"Token","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"MileageProvider","description":null,"mode":"IN","data_type":"char(1)","custom_fields":{}},{"name":"GetDAT","description":null,"mode":"IN","data_type":"bit","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
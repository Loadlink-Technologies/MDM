window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p278","name":"usp_GetLoadPosting_LL","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_GetLoadPosting_LL"},{"field":"Type","value":"Procedure"}],"script":"CREATE   PROCEDURE [dbo].[usp_GetLoadPosting_LL]\r\n    @CustCd\t\t\t VARCHAR(10) \r\n  , @MileageProvider CHAR(1) = 'P' -- G=Google (Default), P=PCMiler \r\n  , @GetDAT\t\t\t BIT = 0\r\n  , @LiveLeadTime    DATETIME = NULL\r\n\r\n--------------------------------------------------------------------------\r\n-- PROCEDURE NAME : usp_GetLoadPosting_LL\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Get Load Posting after LiveLeads notification (type 11)\r\n--\r\n-- CALLED BY      : LoadMatching Web API \r\n-- EXECUTION FREQUENCY : \r\n-- \r\n-- INPUT PARAMS   : @CustCd\t\t\t\t- Customer Code\r\n--                  @MileageProvider    - default to P (PCMiler)\r\n--                  @DAT\t\t\t\t- If the user is subscribed to DAT or not\r\n--                  @LiveLeadTime\t\t- the time LiveLead Notification happens\r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR    DATE       DESCRIPTION\r\n-- Vevian    2021.05.13 LL4RW-325: Initial Development\r\n--------------------------------------------------------------------------\r\nAS\r\nBEGIN\r\n\tSET NOCOUNT ON\t\r\n\r\n    SELECT DISTINCT\r\n        l.Token ,\r\n        l.CustCD ,\r\n        l.DateAvail ,\r\n        l.SrceID ,\r\n        l.SrceCity ,\r\n        l.SrceSt ,\r\n        l.SrceCountry ,\r\n        l.SrceLong ,\r\n        l.SrceLat ,\r\n        l.SrceRadius ,\r\n        p1.MarketAreaID SrceMarketAreaID,\r\n        l.DestID ,\r\n        l.DestCity ,\r\n        l.DestSt ,\r\n        l.DestCountry ,\r\n        l.DestLong ,\r\n        l.DestLat ,\r\n        l.DestRadius ,\r\n        p2.MarketAreaID DestMarketAreaID,\r\n\t\tvs.Code VehicleSize,\r\n        dbo.udf_VTypeToString(l.VType) VehicleType ,\r\n        l.Comment ,\r\n        l.PostMode ,\r\n        l.ClientRefNum ,\r\n        l.ProductName ,\r\n        dbo.udf_PostingAttributeToString(l.PAttrib) PostingAttrib ,\r\n        dbo.udf_GetMileage(l.SrceID, l.DestID, @MileageProvider) Distance,\r\n        l.CreatedBy ,\r\n        l.CreatedOn ,\r\n        l.DeletedBy ,\r\n        l.DeletedOn ,  \r\n        l.VType ,\r\n        l.PStatus ,\r\n        l.NetworkID ,\r\n        dbo.udf_ConvertLLVtypeToRIVtype(l.VType) RIType,\r\n\t\tl.VSize,\r\n\t\tl.PAttrib,\r\n\t\tl.OriginalToken,\r\n\t\t[dbo].[udf_GetLoadLeadsCount] (@CustCd, l.Token, @GetDAT) LeadsCount,\r\n\t\tIIF(ll.Token IS NULL, 0, 1) HasLiveLeads\r\n\r\n    FROM \r\n\t\tdbo.LoadPosting l WITH(NOLOCK)\r\n\t\tINNER JOIN\tdbo.Point p1 WITH(NOLOCK) ON l.SrceID = p1.ID \r\n\t\tINNER JOIN\tdbo.Point p2 WITH(NOLOCK) ON l.DestID = p2.ID \r\n\t\tINNER JOIN\tdbo.VehicleSize vs WITH(NOLOCK) ON vs.Value = l.VSize AND vs.PostType = 'L'\r\n\t\tLEFT JOIN\tdbo.LoadsWLiveLeads ll WITH(NOLOCK) ON (ll.Token = l.Token AND CONVERT(varchar, ll.LiveLeadTime, 20) = @LiveLeadTime) -- [YYYY-MM-DD HH:MM:SS] --AND ll.Retrieved = NULL\r\n\r\n    WHERE \r\n\t\tl.CustCd = @CustCd\r\n\t\tAND DeletedOn IS NULL\r\n\t\tAND l.OriginalToken = 0 -- Only return the Platform Posting\r\n\r\n\r\n\t-- this next logic might not be needed and in that case it could be removed.\r\n\t-- we can keep it for now for our troubleshooting purpose\r\n\tIF @@ERROR = 0 \r\n\tBEGIN\r\n\t\tUPDATE\tLoadsWLiveLeads \r\n\t\tSET\t\tRetrieved = GETUTCDATE() \r\n\t\tWHERE\tCONVERT(varchar, LiveLeadTime, 20) = @LiveLeadTime --AND ll.Retrieved = NULL\r\n\t\t\t\tAND CustCd = @CustCd\r\n\tEND\r\nEND","parameters":[{"name":"CustCd","description":null,"mode":"IN","data_type":"varchar(10)","custom_fields":{}},{"name":"MileageProvider","description":null,"mode":"IN","data_type":"char(1)","custom_fields":{}},{"name":"GetDAT","description":null,"mode":"IN","data_type":"bit","custom_fields":{}},{"name":"LiveLeadTime","description":null,"mode":"IN","data_type":"datetime","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
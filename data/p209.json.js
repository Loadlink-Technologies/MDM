window.repositoryObject = {"parameters_custom_fields":[],"object_id":"p209","name":"usp_CreateEquipmentPostingCorridor","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"LoadMatching@UDVLPLL4DATASRV.linklogi.com","id":"d9"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"usp_CreateEquipmentPostingCorridor"},{"field":"Type","value":"Procedure"}],"script":"-- =========================================================================================== \r\n\r\nCREATE PROCEDURE [dbo].[usp_CreateEquipmentPostingCorridor]\r\n\r\n@Token \t\t\tint ,\r\n@SrceLong       float         = 0 , \r\n@SrceLat        float         = 0 ,\r\n@SrceRadius     int           = 0 ,\r\n@DestLong       float         = 0 , \r\n@DestLat        float         = 0 , \r\n@DestRadius     int           = 0    \r\n\r\n\r\n--------------------------------------------------------------------------\r\n-- PROCEDURE NAME : usp_CreateEquipmentPostingCorridor\r\n--------------------------------------------------------------------------\r\n-- DESCRIPTION    : Create Equipment Posting Corridor values\r\n--\r\n-- CALLED BY      : LoadMatching Web API \r\n-- EXECUTION FREQUENCY : \r\n-- \r\n-- INPUT PARAMS   : @Token        = Equipment Token    --                    \r\n--                  @SrceLong      = Source Longitude      \r\n--                  @SrceLat       = Source Latitude       \r\n--                  @SrceRadius    = Source Radius   \r\n--                  @DestLong      = Destination Longitude       \r\n--                  @DestLat       = Destination Latitude       \r\n--                  @DestRadius    = Destination Radius\r\n--                 \r\n-- OUTPUT PARAMS  :\r\n-- STATUS RETURN  : \r\n--------------------------------------------------------------------------\r\n-- HISTORY : \r\n-- AUTHOR    DATE       DESCRIPTION\r\n-- Nesrin    2019.12.16 Initial Development\r\n--   \t\t\t\t\tLLSIM-3727: Create a new stored procedure to insert data into the new table\r\n--------------------------------------------------------------------------\r\n--SET NOCOUNT ON;\r\n\r\nAS\r\nBEGIN\r\n\r\n\t\tDECLARE @fTheta float\r\n        DECLARE @fPhi   float\r\n        DECLARE @lAB    float\r\n        DECLARE @uABx   float\r\n        DECLARE @uABy   float\r\n    \r\n        DECLARE @Cx     float\r\n        DECLARE @Cy     float\r\n        DECLARE @Dx     float\r\n        DECLARE @Dy     float\r\n        DECLARE @Ex     float\r\n        DECLARE @Ey     float\r\n        DECLARE @Fx     float\r\n        DECLARE @Fy     float\r\n        DECLARE @Mx     float\r\n        DECLARE @My     float     \r\n        DECLARE @Nx     float\r\n        DECLARE @Ny     float\r\n        DECLARE @Ox     float\r\n        DECLARE @Oy     float\r\n        DECLARE @Px     float\r\n        DECLARE @Py     float\r\n     \r\n        -- Calculate the corridor parameters.  This assumes a flat earth approximation!! \r\n        SET @fTheta = degrees( @SrceRadius / 3959.0 )\r\n        SET @fPhi   = degrees( @DestRadius / 3959.0 )\r\n     \r\n        SET @lAB    = SQRT( (@DestLong - @SrceLong) * (@DestLong - @SrceLong) + \r\n                            (@DestLat  - @SrceLat ) * (@DestLat  - @SrceLat )\r\n                          )\r\n        SET @uABx   = (@DestLong - @SrceLong) / @lAB\r\n        SET @uABy   = (@DestLat  - @SrceLat ) / @lAB\r\n    \r\n        SET @Cx     = @fTheta * -@uABy\r\n        SET @Cy     = @fTheta *  @uABx\r\n        SET @Ex     = @fPhi   * -@uABy\r\n        SET @Ey     = @fPhi   *  @uABx\r\n    \r\n        -- Set the 4 points of the trapezoid (M,N,O,P) \r\n        SET @Px = @SrceLong - @Cx\r\n        SET @Py = @SrceLat  - @Cy\r\n        SET @Ox = @SrceLong + @Cx\r\n        SET @Oy = @SrceLat  + @Cy\r\n        SET @Mx = @DestLong - @Ex\r\n        SET @My = @DestLat  - @Ey\r\n        SET @Nx = @DestLong + @Ex\r\n        SET @Ny = @DestLat  + @Ey\r\n\r\n        -----------------------------------------------------------------------------------------------\r\n        -- Load up local variables from processed records\r\n        -- NOTE: Backward compatibility MN,NO,OP,PM NOT used\r\n        -----------------------------------------------------------------------------------------------\r\n        INSERT INTO [dbo].[EquipmentPostingCorridor]\r\n               (Token\r\n\t           ,Mx\r\n\t           ,My\r\n\t           ,Nx\r\n\t           ,Ny\r\n\t           ,Ox\r\n\t           ,Oy\r\n\t           ,Px\r\n\t           ,Py\r\n\t           ,MN\r\n\t           ,[NO]\r\n\t           ,OP\r\n\t           ,PM\r\n\t           ,uABx\r\n\t           ,uABy\r\n               ) \r\n               VALUES\r\n              (@Token\r\n              ,@Mx\r\n              ,@My\r\n              ,@Nx\r\n              ,@Ny\r\n              ,@Ox\r\n              ,@Oy\r\n              ,@Px\r\n              ,@Py\r\n              ,0\r\n              ,0\r\n              ,0\r\n              ,0\r\n              ,@uABx\r\n              ,@uABy\r\n              )\r\n\r\nEND","parameters":[{"name":"Token","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"SrceLong","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"SrceLat","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"SrceRadius","description":null,"mode":"IN","data_type":"int","custom_fields":{}},{"name":"DestLong","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"DestLat","description":null,"mode":"IN","data_type":"float","custom_fields":{}},{"name":"DestRadius","description":null,"mode":"IN","data_type":"int","custom_fields":{}}],"dependencies":null,"imported_at":"2021-07-29 12:59"};
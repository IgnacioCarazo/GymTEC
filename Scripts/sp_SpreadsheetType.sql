-------------------CREATE SP------------------------
CREATE PROCEDURE sp_SpreadsheetTypeCreate
	   @name VARCHAR(40),
	   @id INT,
	   @description VARCHAR(80)
AS
BEGIN
INSERT INTO SpreadsheetType (
	   name,
	   id,
	   description)
    VALUES (
	   @name,
	   @id,
	   @description)
SET @id = SCOPE_IDENTITY() 
SELECT 
	   name = @name,
	   id = @id,
	   description = @description
FROM SpreadsheetType 
WHERE  id = @id
END
GO
-------------------READ SP------------------------

CREATE PROCEDURE sp_SpreadSheetTypeRead
     @id INT
AS 
BEGIN 
    SELECT *
    FROM   SpreadsheetType  
    WHERE  (id = @id) 
END
GO
-------------------UPDATE SP------------------------

CREATE PROCEDURE sp_SpreadSheetTypeUpdate
	   @name VARCHAR(40),
	   @id INT,
	   @description VARCHAR(80)
AS 
BEGIN 
UPDATE SpreadSheetType
SET  name = @name,
	 description = @description
WHERE  id = @id
END
GO
-------------------DELETE SP------------------------
CREATE PROCEDURE sp_SpreadsheetTypeDelete
    @id INT
AS 
BEGIN 
DELETE
FROM   SpreadsheetType
WHERE  id = @id
END
GO


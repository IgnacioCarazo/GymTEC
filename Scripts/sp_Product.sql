-------------------CREATE SP------------------------

CREATE PROCEDURE sp_ProductCreate
	   @barCode INT,
	   @name VARCHAR(10),
	   @cost INT,
	   @description VARCHAR(20),
	   @gymName VARCHAR(10)
AS
BEGIN
INSERT INTO Product  (
	   barCode,
	   name,
	   cost,
	   description,
	   gymName)
    VALUES (
	   @barCode,
	   @name,
	   @cost,
	   @description,
	   @gymName)
SET @barCode = SCOPE_IDENTITY() 
SELECT 
	   barCode = @barCode,
	   name = @name,
	   cost	= @cost,
	   description = @description,
	   gymName = @gymName
FROM Product 
WHERE  barCode = @barCode
END
GO
-------------------READ SP------------------------

CREATE PROC sp_ProductRead
    @barCode INT
AS 
BEGIN 
    SELECT *
    FROM   Product  
    WHERE  (barCode = @barCode) 
END
GO
-------------------UPDATE SP------------------------

CREATE PROC sp_ProductUpdate
	   @barCode INT,
	   @name VARCHAR(10),
	   @cost INT,
	   @description VARCHAR(20),
	   @gymName VARCHAR(10)
AS 
BEGIN 
UPDATE Product
SET  barCode = @barCode,
     name = @name, 
     cost = @cost,
     description = @description,
	 gymName = @gymName
WHERE  barCode = @barCode
END
GO
-------------------DELETE SP------------------------

CREATE PROC sp_ProductDelete
    @barCode INT
AS 
BEGIN 
DELETE
FROM   Product
WHERE  barCode = @barCode
END
GO

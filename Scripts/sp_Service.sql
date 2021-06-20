-------------------CREATE SP------------------------

CREATE PROCEDURE sp_ServiceCreate
	  @name VARCHAR(11), 
	  @id INT,
	  @description VARCHAR(11),
	  @gymName VARCHAR(10)
AS
BEGIN
INSERT INTO Service  (
	   name,
	   id,
	   description,
	   gymName)
    VALUES (
	   @name,
	   @id,
	   @description,
	   @gymName)
SET @id = SCOPE_IDENTITY() 
SELECT 
	   name = @name,
	   id = @id,
	   description = @description,
	   gymName = @gymName
FROM Service 
WHERE  id = @id
END
GO	
-------------------READ SP------------------------
CREATE PROC sp_ServiceRead
    @id INT
AS 
BEGIN 
    SELECT *
    FROM   Service  
    WHERE  (id = @id) 
END
GO
-------------------UPDATE SP------------------------

CREATE PROC sp_ServiceUpdate
	  @name VARCHAR(11), 
	  @id INT,
	  @description VARCHAR(11),
	  @gymName VARCHAR(10)
AS 
BEGIN 
UPDATE Service
SET  name = @name,
	 id = @id,
	 description = @description,
	 gymName = @gymName 
WHERE  id = @id
END
GO
-------------------DELETE SP------------------------

CREATE PROC sp_ServiceDelete
	@id INT
AS 
BEGIN 
DELETE
FROM   Service
WHERE  id = @id
END
GO


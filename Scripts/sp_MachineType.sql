-------------------CREATE SP------------------------

CREATE PROCEDURE sp_MachineTypeCreate
	   @id INT,
	   @name VARCHAR(10),
	   @description VARCHAR(10)
AS
BEGIN
INSERT INTO MachineType  (
	   id,
	   name,
	   description)
    VALUES (
	   @id,
	   @name,
	   @description)
SET @id = SCOPE_IDENTITY() 
SELECT 
	   id = @id,
	   description = @description
FROM MachineType 
WHERE  id = @id
END
GO
-------------------READ SP------------------------

CREATE PROCEDURE sp_MachineTypeRead
    @id INT
AS 
BEGIN 
    SELECT *
    FROM   MachineType  
    WHERE  (id = @id) 
END
GO
-------------------UPDATE SP------------------------

CREATE PROCEDURE sp_MachineTypeUpdate
	  @id INT,
	  @description VARCHAR(20) 
AS 
BEGIN 
UPDATE MachineType
SET  id = @id,
	 description = @description
WHERE  id = @id
END
GO
-------------------DELETE SP------------------------

CREATE PROCEDURE sp_MachineTypeDelete
	@id INT
AS 
BEGIN 
DELETE
FROM MachineType
WHERE  id = @id
END
GO


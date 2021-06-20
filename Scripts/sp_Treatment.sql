-------------------CREATE SP------------------------
CREATE PROCEDURE sp_TreatmentCreate
	   @id INT,
	   @name VARCHAR(10),
	   @gymName VARCHAR(10)
AS
BEGIN
INSERT INTO Treatment  (
	   id,
	   name,
	   gymName)
    VALUES (
	   @id,
	   @name,
	   @gymName)
SET @id = SCOPE_IDENTITY() 
SELECT 
	   id = @id,
	   name = @name,
	   gymName = @gymName
FROM Treatment 
WHERE  id = @id
END
-------------------READ SP------------------------
GO
CREATE PROC sp_TreatmentRead
    @id INT
AS 
BEGIN 
    SELECT *
    FROM   Treatment  
    WHERE  (id = @id) 
END
GO
-------------------UPDATE SP------------------------

CREATE PROC sp_TreatmentUpdate
	  @id INT,
	  @name VARCHAR(10),
	  @gymName VARCHAR(10)
AS 
BEGIN 
UPDATE Treatment
SET  id = @id,
	 name = @name,
	 gymName = @gymName
WHERE  id = @id
END
GO
-------------------DELETE SP------------------------

CREATE PROC sp_TreatmentDelete
	@id INT
AS 
BEGIN 
DELETE
FROM   Treatment
WHERE  id = @id
END
GO

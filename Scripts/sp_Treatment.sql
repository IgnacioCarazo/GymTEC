-------------------CREATE SP------------------------
CREATE PROCEDURE sp_TreatmentCreate
	   @name VARCHAR(40),
	   @gymName VARCHAR(40)
AS
BEGIN
INSERT INTO Treatment  (
	   
	   name,
	   gymName)
    VALUES (
	  
	   @name,
	   @gymName)
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
	  @name VARCHAR(40),
	  @gymName VARCHAR(40)
AS 
BEGIN 
UPDATE Treatment
SET  
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


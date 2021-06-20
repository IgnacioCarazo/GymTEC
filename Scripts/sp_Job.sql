-------------------CREATE SP------------------------

CREATE PROCEDURE sp_JobCreate
	   @name VARCHAR(10), 
	   @id INT,
	   @description VARCHAR(20) 
AS
BEGIN
INSERT INTO Job  (
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
FROM Job 
WHERE  id = @id
END
GO
-------------------READ SP------------------------

CREATE PROC sp_JobRead
    @id INT
AS 
BEGIN 
    SELECT *
    FROM   Job  
    WHERE  (id = @id) 
END
GO
-------------------UPDATE SP------------------------

CREATE PROC sp_JobUpdate
	  @name VARCHAR(10),
	  @id INT,
	  @description VARCHAR(20) 
AS 
BEGIN 
UPDATE Job
SET  name = @name,
	 id = @id,
	 description = @description
WHERE  id = @id
END
GO
-------------------DELETE SP------------------------

CREATE PROC sp_JobDelete
	@id int
AS 
BEGIN 
DELETE
FROM   Job
WHERE  id = @id
END
GO


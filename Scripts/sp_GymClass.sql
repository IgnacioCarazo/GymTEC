-------------------CREATE SP------------------------

CREATE PROCEDURE sp_GymClassCreate
	   @className VARCHAR(11),
	   @date VARCHAR(11),
	   @startTime VARCHAR(11),
	   @finnishTime VARCHAR(11),
	   @capacity INT,
	   @isGrupal INT,
	   @instructorID INT,
	   @serviceID INT
AS
BEGIN
INSERT INTO GymClass  (
	   className,
	   date,
	   startTime,
	   finnishTime,
	   capacity,
	   isGrupal,
	   instructorId,
	   serviceID)
    VALUES (
	   @className,
	   @date,
	   @startTime,
	   @finnishTime,
	   @capacity,
	   @isGrupal,
	   @instructorId,
	   @serviceID)
 
SET @date = SCOPE_IDENTITY()
 
SELECT 
	   className = @className,
	   date = @date,
	   starTime = @startTime,
	   finnishTime = @finnishTime,
	   capacity	= @capacity,
	   isGrupal	= @isGrupal,
	   instructorId =@instructorID,
	   serviceID = @serviceID
FROM GymClass 
WHERE  className = @className
END
GO
-------------------READ SP------------------------
CREATE PROC sp_GymClassRead
      @className VARCHAR(11)
AS 
BEGIN 
 
    SELECT *
    FROM   GymClass  
    WHERE  (className = @className) 
END
GO
-------------------UPDATE SP------------------------

CREATE PROC sp_GymClassUpdate
	   @className VARCHAR(11),
	   @date VARCHAR(11),
	   @startTime VARCHAR(11),
	   @finnishTime VARCHAR(11),
	   @capacity INT,
	   @isGrupal INT,
	   @instructorID INT,
	   @serviceID INT
  
AS 
BEGIN 
UPDATE GymClass
SET    date = @date,
	   startTime = @startTime,
	   finnishTime = @finnishTime,
	   capacity	= @capacity,
	   isGrupal	= @isGrupal,
	   instructorId =@instructorID,
	   serviceID = @serviceID
WHERE className = @className
END
GO
-------------------DELETE SP------------------------

CREATE PROC sp_GymClassDelete 
   @className VARCHAR(11)
AS 
BEGIN 
DELETE
FROM   GymClass
WHERE  className = @className
END
GO


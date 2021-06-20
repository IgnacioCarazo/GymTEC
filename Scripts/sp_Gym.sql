-------------------CREATE SP------------------------
CREATE PROCEDURE sp_GymCreate
	   @name VARCHAR(10),
	   @phoneNumber INT,
	   @spaActive INT,
	   @storeActive INT,
	   @openingDate VARCHAR(11),
	   @businessHours VARCHAR(10),
	   @maxCapacity INT,
	   @adminID INT
AS
BEGIN
INSERT INTO Gym  (
	   name,
	   phoneNumber,
	   spaActive,
	   storeActive,
	   openingDate,
	   businessHours,
	   maxCapacity,
	   adminID)
    VALUES (
	   @name,
	   @phoneNumber,
	   @spaActive,
	   @storeActive,
	   @openingDate,
	   @businessHours,
	   @maxCapacity,
	   @adminID)
SET @name = SCOPE_IDENTITY() 
SELECT 
	   name = @name,
	   phoneNumber = @phoneNumber,
	   spaActive =@spaActive,
	   storeActive =@storeActive,
	   openingDate =@openingDate,
	   businessHours =@businessHours,
	   maxCapacity =@maxCapacity,
	   adminID = @adminID
FROM Gym 
WHERE  name = @name
END
GO
-------------------READ SP------------------------

CREATE PROC sp_GymRead
    @name VARCHAR(10)
AS 
BEGIN 
    SELECT *
    FROM   Gym  
    WHERE  (name = @name) 
END
GO
-------------------UPDATE SP------------------------
CREATE PROC sp_GymUpdate
	   @name VARCHAR(10),
	   @phoneNumber INT,
	   @spaActive INT,
	   @storeActive INT,
	   @openingDate VARCHAR(11),
	   @businessHours VARCHAR(10),
	   @maxCapacity INT,
	   @adminID INT
AS 
BEGIN 
UPDATE Gym
SET  phoneNumber = @phoneNumber,
	 spaActive =@spaActive,
	 storeActive =@storeActive,
	 openingDate =@openingDate,
	 businessHours =@businessHours,
	 maxCapacity =@maxCapacity,
	 adminID =@adminID
WHERE  name = @name
END
GO
-------------------DELETE SP------------------------
CREATE PROC sp_GymDelete
    @name VARCHAR(10)
AS 
BEGIN 
DELETE
FROM   Gym
WHERE  name = @name
END
GO

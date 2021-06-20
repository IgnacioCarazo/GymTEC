-------------------CREATE SP------------------------

CREATE PROCEDURE sp_MachineCreate
	   @serialNumber INT,
	   @brand VARCHAR(20),
	   @cost INT,
	   @typeID INT,
	   @gymName VARCHAR(10)
AS
BEGIN
INSERT INTO Machine  (
	   serialNumber,
	   brand,
	   cost,
	   typeID,
	   gymName)
    VALUES (
	   @serialNumber,
	   @brand,
	   @cost,
	   @typeID,
	   @gymName)
SET @serialNumber = SCOPE_IDENTITY() 
SELECT 
	   serialNumber = @serialNumber,
	   brand = @brand,
	   cost =@cost,
	   typeID =@typeID,
	   gymName = @gymName
FROM Machine 
WHERE  serialNumber = @serialNumber
END
GO
-------------------READ SP------------------------

CREATE PROC sp_MachineRead
    @serialNumber INT
AS 
BEGIN 
    SELECT *
    FROM   Machine  
    WHERE  (serialNumber = @serialNumber) 
END
GO
-------------------UPDATE SP------------------------

CREATE PROC sp_MachineUpdate
	  @serialNumber INT,
	  @brand VARCHAR(20),
	  @cost INT,
	  @typeID INT,
	  @gymName VARCHAR(10)
AS 
BEGIN 
UPDATE Machine
SET  serialNumber = @serialNumber,
	 brand = @brand,
	 cost =@cost,
	 typeID =@typeID,
	 gymName = @gymName
WHERE serialNumber = @serialNumber
END
GO
-------------------DELETE SP------------------------

CREATE PROC sp_MachineDelete
     @serialNumber INT
AS 
BEGIN 
DELETE
FROM   Machine
WHERE serialNumber = @serialNumber
END
GO


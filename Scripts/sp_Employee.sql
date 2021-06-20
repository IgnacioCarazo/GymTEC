-------------------CREATE SP------------------------
CREATE PROCEDURE sp_EmployeeCreate
	   @id INT,
	   @name VARCHAR(20),
	   @primaryLastName VARCHAR(20),
	   @secondaryLastName VARCHAR(20),
	   @province VARCHAR(20),
	   @canton VARCHAR(20),
	   @district VARCHAR(20),
	   @email VARCHAR(40),
	   @password VARCHAR(60),
	   @numberOfClasses INT,
	   @laboredHours INT,
	   @salary INT,
	   @role VARCHAR(20),
	   @spreadsheetTypeID INT,
	   @gymName VARCHAR(20)
AS
BEGIN
INSERT INTO Employee (
	   id,
	   name,
	   primaryLastName,
	   secondaryLastName,
	   province,
	   canton,
	   district,
	   email,
	   password,
	   numberOfClasses,
	   laboredHours,
	   salary,
	   role,
	   spreadsheetTypeID,
	   gymName)
    VALUES (
	   @id,
	   @name,
	   @primaryLastName,
	   @secondaryLastName,
	   @province,
	   @canton,
	   @district,
	   @email,
	   @password,
	   @numberOfClasses,
	   @laboredHours,
	   @salary,
	   @role,
	   @spreadsheetTypeID,
	   @gymName)
SET @id = SCOPE_IDENTITY() 
SELECT 
	   id = @id,
	   name = @name,
	   primaryLastName = @primaryLastName,
	   secondaryLastName = @secondaryLastName,
	   province = @province,
	   canton = @canton,
	   district = @District,
	   email = @email,
	   password = @password,
	   numberOfClasses = @numberOfClasses,
	   laboredHours = @laboredHours,
	   salary = @salary,
	   role =@role,
	   spreadsheetTypeID = @spreadsheetTypeID,
	   gymName = @gymName
FROM Employee 
WHERE  id = @id
END
GO
-------------------READ SP------------------------

CREATE PROCEDURE sp_EmployeeRead
@id INT
AS 
BEGIN 
    SELECT *
    FROM   Employee  
    WHERE  (id = @id) 
END
GO
-------------------UPDATE SP------------------------

CREATE PROCEDURE sp_EmployeeUpdate
	   @id INT,
	   @name VARCHAR(20),
	   @primaryLastName VARCHAR(20),
	   @secondaryLastName VARCHAR(20),
	   @province VARCHAR(20),
	   @canton VARCHAR(20),
	   @district VARCHAR(20),
	   @email VARCHAR(40),
	   @password VARCHAR(60),
	   @numberOfClasses INT,
	   @laboredHours INT,
	   @salary INT,
	   @role VARCHAR(20),
	   @spreadsheetTypeID INT,
	   @gymName VARCHAR(20)
AS 
BEGIN 
UPDATE Employee
SET	 name = @name,
	 primaryLastName = @primaryLastName,
	 secondaryLastName = @secondaryLastName,
	 province = @province,
	 canton = @canton,
	 district = @District,
	 email = @email,
	 password = @password,
	 numberOfClasses = @numberOfClasses,
	 laboredHours = @laboredHours,
	 salary = @salary,
	 role =@role,
	 spreadsheetTypeID = @spreadsheetTypeID,
	 gymName = @gymName
WHERE  id = @id
END
GO
-------------------DELETE SP------------------------

CREATE PROCEDURE sp_EmployeeDelete
    @id INT
AS 
BEGIN 
DELETE
FROM   Employee
WHERE  id = @id
END
GO


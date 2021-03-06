USE [master]
GO
/****** Object:  Database [GymTec]    Script Date: 20/6/2021 21:45:24 ******/
CREATE DATABASE [GymTec]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'GymTec', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\GymTec.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'GymTec_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\GymTec_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [GymTec] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [GymTec].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [GymTec] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [GymTec] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [GymTec] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [GymTec] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [GymTec] SET ARITHABORT OFF 
GO
ALTER DATABASE [GymTec] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [GymTec] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [GymTec] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [GymTec] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [GymTec] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [GymTec] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [GymTec] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [GymTec] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [GymTec] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [GymTec] SET  DISABLE_BROKER 
GO
ALTER DATABASE [GymTec] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [GymTec] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [GymTec] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [GymTec] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [GymTec] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [GymTec] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [GymTec] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [GymTec] SET RECOVERY FULL 
GO
ALTER DATABASE [GymTec] SET  MULTI_USER 
GO
ALTER DATABASE [GymTec] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [GymTec] SET DB_CHAINING OFF 
GO
ALTER DATABASE [GymTec] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [GymTec] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [GymTec] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [GymTec] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'GymTec', N'ON'
GO
ALTER DATABASE [GymTec] SET QUERY_STORE = OFF
GO
USE [GymTec]
GO
/****** Object:  Table [dbo].[Employee]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Employee](
	[id] [int] NOT NULL,
	[name] [varchar](20) NOT NULL,
	[primaryLastName] [varchar](20) NOT NULL,
	[secondaryLastName] [varchar](20) NOT NULL,
	[province] [varchar](20) NOT NULL,
	[canton] [varchar](20) NOT NULL,
	[district] [varchar](20) NOT NULL,
	[email] [varchar](40) NOT NULL,
	[password] [varchar](60) NULL,
	[numberOfClasses] [int] NULL,
	[laboredHours] [int] NULL,
	[salary] [int] NULL,
	[role] [varchar](20) NULL,
	[spreadsheetTypeID] [int] NULL,
	[gymName] [varchar](20) NULL,
 CONSTRAINT [pk_emp_id] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
 CONSTRAINT [unique_emp_email] UNIQUE NONCLUSTERED 
(
	[email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Gym]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Gym](
	[name] [varchar](10) NOT NULL,
	[phoneNumber] [int] NOT NULL,
	[spaActive] [int] NULL,
	[storeActive] [int] NULL,
	[openingDate] [varchar](11) NULL,
	[businessHours] [varchar](10) NOT NULL,
	[maxCapacity] [int] NOT NULL,
	[adminID] [int] NOT NULL,
 CONSTRAINT [pk_gym_name] PRIMARY KEY CLUSTERED 
(
	[name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GymClass]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GymClass](
	[className] [varchar](11) NOT NULL,
	[date] [varchar](11) NULL,
	[startTime] [varchar](11) NULL,
	[finnishTime] [varchar](11) NULL,
	[capacity] [int] NULL,
	[isGrupal] [int] NULL,
	[instructorID] [int] NULL,
	[serviceID] [int] NOT NULL,
 CONSTRAINT [pk_gymClass_name] PRIMARY KEY CLUSTERED 
(
	[className] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Job]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Job](
	[name] [varchar](10) NOT NULL,
	[id] [int] NOT NULL,
	[description] [varchar](20) NOT NULL,
 CONSTRAINT [pk_job_id] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Machine]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Machine](
	[serialNumber] [int] NOT NULL,
	[brand] [varchar](20) NULL,
	[cost] [int] NULL,
	[typeID] [int] NULL,
	[gymName] [varchar](10) NULL,
 CONSTRAINT [pk_machine_snumber] PRIMARY KEY CLUSTERED 
(
	[serialNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MachineType]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MachineType](
	[id] [int] NOT NULL,
	[name] [varchar](10) NOT NULL,
	[description] [varchar](40) NULL,
 CONSTRAINT [pk_machineType_id] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[barCode] [int] NOT NULL,
	[name] [varchar](10) NULL,
	[cost] [int] NULL,
	[description] [varchar](20) NULL,
	[gymName] [varchar](10) NULL,
 CONSTRAINT [pk_product_barCode] PRIMARY KEY CLUSTERED 
(
	[barCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Service]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Service](
	[name] [varchar](40) NOT NULL,
	[id] [int] NOT NULL,
	[description] [varchar](40) NOT NULL,
	[gymName] [varchar](10) NULL,
 CONSTRAINT [pk_service_id] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SpreadsheetType]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SpreadsheetType](
	[name] [varchar](40) NULL,
	[id] [int] NOT NULL,
	[description] [varchar](80) NULL,
 CONSTRAINT [pk_spreadsheetype_id] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Treatment]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Treatment](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](10) NOT NULL,
	[gymName] [varchar](10) NULL,
 CONSTRAINT [pk_treatment_id] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Gym]  WITH CHECK ADD  CONSTRAINT [fk_gym_admin] FOREIGN KEY([adminID])
REFERENCES [dbo].[Employee] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Gym] CHECK CONSTRAINT [fk_gym_admin]
GO
ALTER TABLE [dbo].[Machine]  WITH CHECK ADD  CONSTRAINT [fk_machineType_ID] FOREIGN KEY([typeID])
REFERENCES [dbo].[MachineType] ([id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Machine] CHECK CONSTRAINT [fk_machineType_ID]
GO
/****** Object:  StoredProcedure [dbo].[sp_EmployeeCreate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------CREATE SP------------------------
CREATE PROCEDURE [dbo].[sp_EmployeeCreate]
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
/****** Object:  StoredProcedure [dbo].[sp_EmployeeDelete]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------DELETE SP------------------------

CREATE PROCEDURE [dbo].[sp_EmployeeDelete]
    @id INT
AS 
BEGIN 
DELETE
FROM   Employee
WHERE  id = @id
END
GO
/****** Object:  StoredProcedure [dbo].[sp_EmployeeRead]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------READ SP------------------------

CREATE PROCEDURE [dbo].[sp_EmployeeRead]
@id INT
AS 
BEGIN 
    SELECT *
    FROM   Employee  
    WHERE  (id = @id) 
END
GO
/****** Object:  StoredProcedure [dbo].[sp_EmployeeUpdate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------UPDATE SP------------------------

CREATE PROCEDURE [dbo].[sp_EmployeeUpdate]
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
/****** Object:  StoredProcedure [dbo].[sp_GenerateWorksheet]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
----------STORED PROCEDURE SOLICITADO--------------------------------------------
-- Administrador para saber el pago que debe realizar a todos los empleados del gimnasio
-- debe estar agrupado por sucursal,número de cedula, nombre completo del empleado, número de clases impartidas/horas laboradas (según corresponda) y monto a pagar
-- Calcular el pago de los tipos de planilla
-- Mensuales: consultar el monto indicado en el salario del empleado
-- Horas: Cálculo de las horas laboradas por el empleado y multiplicarse por el monto en el salario del empleado
-- Clase: Cálculo de las clases impartidas por el empleado y multiplicarse por el monto en el salario del empleado


CREATE PROCEDURE [dbo].[sp_GenerateWorksheet]
AS 
BEGIN

DECLARE @table2 TABLE (gymName VARCHAR(20), fullname VARCHAR(100),id INT, spreadType VARCHAR(40),laboredHours INT, numberOfClasses INT, salary INT)

INSERT INTO @table2(gymName, fullname,id,spreadType,laboredHours,numberOfClasses,salary) SELECT table1.gymName, table1.fullname, table1.id, table1.spreadType, table1.laboredHours, table1.numberOfClasses, table1.salary
FROM (SELECT E.gymName AS gymName, (E.name + ' ' + E.primaryLastName + ' ' + E.secondaryLastName) AS fullname, E.id,S.name AS spreadType, E.laboredHours, E.numberOfClasses, E.salary
FROM Employee AS E JOIN SpreadsheetType AS S
ON E.spreadsheetTypeID = S.id ) AS table1



DECLARE @count INT = (SELECT COUNT(*) FROM @table2)

DECLARE @table3 TABLE (sucursal VARCHAR(20),fullname VARCHAR(100),id INT, spreadType VARCHAR(40),laboredHours INT, numberOfClasses INT, totalWage INT)

WHILE @count > 0
BEGIN

DECLARE @sucursal VARCHAR(20)
SELECT @sucursal = (SELECT TOP(1) gymName FROM @table2)

DECLARE @spreadTypes VARCHAR(40)
SELECT @spreadTypes = (SELECT TOP(1) spreadType FROM @table2)

DECLARE @fullName VARCHAR(100)
SELECT @fullName = (SELECT TOP(1) fullname FROM @table2)

DECLARE @id int
SELECT @id = (SELECT TOP(1) id FROM @table2)

DECLARE @laboredHours INT
SELECT @laboredHours = (SELECT TOP(1) laboredHours FROM @table2)

DECLARE @numberofClasses INT
SELECT @numberofClasses = (SELECT TOP(1) numberofClasses FROM @table2)

DECLARE @monthlyWage int
SELECT @monthlyWage = (SELECT TOP(1) salary FROM @table2)

DECLARE @laboredHoursWage int
SELECT @laboredHoursWage = (SELECT TOP(1) laboredHours FROM @table2) * @monthlyWage

DECLARE @numberOfClassesWage int
SELECT @numberOfClassesWage = (SELECT TOP(1) numberofClasses FROM @table2) * @monthlyWage

DECLARE @totalWage int
IF(@spreadTypes ='Pago Mensual')
SELECT @totalWage = @monthlyWage
ELSE IF(@spreadTypes ='Pago Hora')
SELECT @totalWage =  @laboredHoursWage
ELSE
SELECT @totalWage = @numberOfClassesWage

INSERT INTO @table3(sucursal,fullname,id,spreadType,laboredHours,numberOfClasses,totalWage) Values (@sucursal,@fullName,@id, @spreadTypes, @laboredHours, @numberofClasses,@totalWage)

DELETE @table2 WHERE id = @id

SET @count = (SELECT COUNT(*) FROM @table2)

END

SELECT *
FROM @table3
END
GO
/****** Object:  StoredProcedure [dbo].[sp_GymClassCreate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------CREATE SP------------------------

CREATE PROCEDURE [dbo].[sp_GymClassCreate]
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
/****** Object:  StoredProcedure [dbo].[sp_GymClassDelete]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------DELETE SP------------------------

CREATE PROC [dbo].[sp_GymClassDelete] 
   @className VARCHAR(11)
AS 
BEGIN 
DELETE
FROM   GymClass
WHERE  className = @className
END
GO
/****** Object:  StoredProcedure [dbo].[sp_GymClassRead]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------READ SP------------------------
CREATE PROC [dbo].[sp_GymClassRead]
      @className VARCHAR(11)
AS 
BEGIN 
 
    SELECT *
    FROM   GymClass  
    WHERE  (className = @className) 
END
GO
/****** Object:  StoredProcedure [dbo].[sp_GymClassUpdate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------UPDATE SP------------------------

CREATE PROC [dbo].[sp_GymClassUpdate]
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
/****** Object:  StoredProcedure [dbo].[sp_GymCreate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------CREATE SP------------------------
CREATE PROCEDURE [dbo].[sp_GymCreate]
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
/****** Object:  StoredProcedure [dbo].[sp_GymDelete]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------DELETE SP------------------------
CREATE PROC [dbo].[sp_GymDelete]
    @name VARCHAR(10)
AS 
BEGIN 
DELETE
FROM   Gym
WHERE  name = @name
END
GO
/****** Object:  StoredProcedure [dbo].[sp_GymRead]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------READ SP------------------------

CREATE PROC [dbo].[sp_GymRead]
    @name VARCHAR(10)
AS 
BEGIN 
    SELECT *
    FROM   Gym  
    WHERE  (name = @name) 
END
GO
/****** Object:  StoredProcedure [dbo].[sp_GymUpdate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------UPDATE SP------------------------
CREATE PROC [dbo].[sp_GymUpdate]
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
/****** Object:  StoredProcedure [dbo].[sp_JobCreate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------CREATE SP------------------------

CREATE PROCEDURE [dbo].[sp_JobCreate]
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
/****** Object:  StoredProcedure [dbo].[sp_JobDelete]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------DELETE SP------------------------

CREATE PROC [dbo].[sp_JobDelete]
	@id int
AS 
BEGIN 
DELETE
FROM   Job
WHERE  id = @id
END
GO
/****** Object:  StoredProcedure [dbo].[sp_JobRead]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------READ SP------------------------

CREATE PROC [dbo].[sp_JobRead]
    @id INT
AS 
BEGIN 
    SELECT *
    FROM   Job  
    WHERE  (id = @id) 
END
GO
/****** Object:  StoredProcedure [dbo].[sp_JobUpdate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------UPDATE SP------------------------

CREATE PROC [dbo].[sp_JobUpdate]
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
/****** Object:  StoredProcedure [dbo].[sp_MachineCreate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------CREATE SP------------------------

CREATE PROCEDURE [dbo].[sp_MachineCreate]
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
/****** Object:  StoredProcedure [dbo].[sp_MachineDelete]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------DELETE SP------------------------

CREATE PROC [dbo].[sp_MachineDelete]
     @serialNumber INT
AS 
BEGIN 
DELETE
FROM   Machine
WHERE serialNumber = @serialNumber
END
GO
/****** Object:  StoredProcedure [dbo].[sp_MachineRead]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------READ SP------------------------

CREATE PROC [dbo].[sp_MachineRead]
    @serialNumber INT
AS 
BEGIN 
    SELECT *
    FROM   Machine  
    WHERE  (serialNumber = @serialNumber) 
END
GO
/****** Object:  StoredProcedure [dbo].[sp_MachineTypeCreate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------CREATE SP------------------------

CREATE PROCEDURE [dbo].[sp_MachineTypeCreate]
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
/****** Object:  StoredProcedure [dbo].[sp_MachineTypeDelete]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------DELETE SP------------------------

CREATE PROCEDURE [dbo].[sp_MachineTypeDelete]
	@id INT
AS 
BEGIN 
DELETE
FROM MachineType
WHERE  id = @id
END
GO
/****** Object:  StoredProcedure [dbo].[sp_MachineTypeRead]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------READ SP------------------------

CREATE PROCEDURE [dbo].[sp_MachineTypeRead]
    @id INT
AS 
BEGIN 
    SELECT *
    FROM   MachineType  
    WHERE  (id = @id) 
END
GO
/****** Object:  StoredProcedure [dbo].[sp_MachineTypeUpdate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------UPDATE SP------------------------

CREATE PROCEDURE [dbo].[sp_MachineTypeUpdate]
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
/****** Object:  StoredProcedure [dbo].[sp_MachineUpdate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------UPDATE SP------------------------

CREATE PROC [dbo].[sp_MachineUpdate]
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
/****** Object:  StoredProcedure [dbo].[sp_ProductCreate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------CREATE SP------------------------

CREATE PROCEDURE [dbo].[sp_ProductCreate]
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
/****** Object:  StoredProcedure [dbo].[sp_ProductDelete]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------DELETE SP------------------------

CREATE PROC [dbo].[sp_ProductDelete]
    @barCode INT
AS 
BEGIN 
DELETE
FROM   Product
WHERE  barCode = @barCode
END
GO
/****** Object:  StoredProcedure [dbo].[sp_ProductRead]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------READ SP------------------------

CREATE PROC [dbo].[sp_ProductRead]
    @barCode INT
AS 
BEGIN 
    SELECT *
    FROM   Product  
    WHERE  (barCode = @barCode) 
END
GO
/****** Object:  StoredProcedure [dbo].[sp_ProductUpdate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------UPDATE SP------------------------

CREATE PROC [dbo].[sp_ProductUpdate]
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
/****** Object:  StoredProcedure [dbo].[sp_ServiceCreate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------CREATE SP------------------------

CREATE PROCEDURE [dbo].[sp_ServiceCreate]
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
/****** Object:  StoredProcedure [dbo].[sp_ServiceDelete]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------DELETE SP------------------------

CREATE PROC [dbo].[sp_ServiceDelete]
	@id INT
AS 
BEGIN 
DELETE
FROM   Service
WHERE  id = @id
END
GO
/****** Object:  StoredProcedure [dbo].[sp_ServiceRead]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------READ SP------------------------
CREATE PROC [dbo].[sp_ServiceRead]
    @id INT
AS 
BEGIN 
    SELECT *
    FROM   Service  
    WHERE  (id = @id) 
END
GO
/****** Object:  StoredProcedure [dbo].[sp_ServiceUpdate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------UPDATE SP------------------------

CREATE PROC [dbo].[sp_ServiceUpdate]
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
/****** Object:  StoredProcedure [dbo].[sp_SpreadsheetTypeCreate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------CREATE SP------------------------
CREATE PROCEDURE [dbo].[sp_SpreadsheetTypeCreate]
	   @name VARCHAR(40),
	   @id INT,
	   @description VARCHAR(80)
AS
BEGIN
INSERT INTO SpreadsheetType (
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
FROM SpreadsheetType 
WHERE  id = @id
END
GO
/****** Object:  StoredProcedure [dbo].[sp_SpreadsheetTypeDelete]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------DELETE SP------------------------
CREATE PROCEDURE [dbo].[sp_SpreadsheetTypeDelete]
    @id INT
AS 
BEGIN 
DELETE
FROM   SpreadsheetType
WHERE  id = @id
END
GO
/****** Object:  StoredProcedure [dbo].[sp_SpreadSheetTypeRead]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------READ SP------------------------

CREATE PROCEDURE [dbo].[sp_SpreadSheetTypeRead]
     @id INT
AS 
BEGIN 
    SELECT *
    FROM   SpreadsheetType  
    WHERE  (id = @id) 
END
GO
/****** Object:  StoredProcedure [dbo].[sp_SpreadSheetTypeUpdate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------UPDATE SP------------------------

CREATE PROCEDURE [dbo].[sp_SpreadSheetTypeUpdate]
	   @name VARCHAR(40),
	   @id INT,
	   @description VARCHAR(80)
AS 
BEGIN 
UPDATE SpreadSheetType
SET  name = @name,
	 description = @description
WHERE  id = @id
END
GO
/****** Object:  StoredProcedure [dbo].[sp_TreatmentCreate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------CREATE SP------------------------
CREATE PROCEDURE [dbo].[sp_TreatmentCreate]
	   @name VARCHAR(10),
	   @gymName VARCHAR(10)
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
/****** Object:  StoredProcedure [dbo].[sp_TreatmentDelete]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------DELETE SP------------------------

CREATE PROC [dbo].[sp_TreatmentDelete]
	@id INT
AS 
BEGIN 
DELETE
FROM   Treatment
WHERE  id = @id
END
GO
/****** Object:  StoredProcedure [dbo].[sp_TreatmentRead]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[sp_TreatmentRead]
    @id INT
AS 
BEGIN 
    SELECT *
    FROM   Treatment  
    WHERE  (id = @id) 
END
GO
/****** Object:  StoredProcedure [dbo].[sp_TreatmentUpdate]    Script Date: 20/6/2021 21:45:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-------------------UPDATE SP------------------------

CREATE PROC [dbo].[sp_TreatmentUpdate]
	  @id INT,
	  @name VARCHAR(10),
	  @gymName VARCHAR(10)
AS 
BEGIN 
UPDATE Treatment
SET  
	 name = @name,
	 gymName = @gymName
WHERE  id = @id
END
GO
USE [master]
GO
ALTER DATABASE [GymTec] SET  READ_WRITE 
GO

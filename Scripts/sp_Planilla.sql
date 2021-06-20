----------STORED PROCEDURE SOLICITADO--------------------------------------------
-- Administrador para saber el pago que debe realizar a todos los empleados del gimnasio
-- debe estar agrupado por sucursal,número de cedula, nombre completo del empleado, número de clases impartidas/horas laboradas (según corresponda) y monto a pagar
-- Calcular el pago de los tipos de planilla
-- Mensuales: consultar el monto indicado en el salario del empleado
-- Horas: Cálculo de las horas laboradas por el empleado y multiplicarse por el monto en el salario del empleado
-- Clase: Cálculo de las clases impartidas por el empleado y multiplicarse por el monto en el salario del empleado


CREATE PROCEDURE sp_GenerateWorksheet
AS 
BEGIN

DECLARE @table2 TABLE (gymName VARCHAR(20), fullname VARCHAR(100),id INT, spreadType VARCHAR(10),laboredHours INT, numberOfClasses INT, salary INT)

INSERT INTO @table2(gymName, fullname,id,spreadType,laboredHours,numberOfClasses,salary) SELECT table1.gymName, table1.fullname, table1.id, table1.spreadType, table1.laboredHours, table1.numberOfClasses, table1.salary
FROM (SELECT E.gymName AS gymName, (E.name + ' ' + E.primaryLastName + ' ' + E.secondaryLastName) AS fullname, E.id,S.name AS spreadType, E.laboredHours, E.numberOfClasses, E.salary
FROM Employee AS E JOIN SpreadsheetType AS S
ON E.spreadsheetTypeID = S.id ) AS table1



DECLARE @count INT = (SELECT COUNT(*) FROM @table2)

DECLARE @table3 TABLE (sucursal VARCHAR(20),fullname VARCHAR(100),id INT, spreadType VARCHAR(10),laboredHours INT, numberOfClasses INT, totalWage INT)

WHILE @count > 0
BEGIN

DECLARE @sucursal VARCHAR(20)
SELECT @sucursal = (SELECT TOP(1) gymName FROM @table2)

DECLARE @spreadTypes VARCHAR(10)
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
IF(@spreadTypes ='Mensual')
SELECT @totalWage = @monthlyWage
IF(@spreadTypes ='Hora')
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



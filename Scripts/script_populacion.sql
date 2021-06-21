
INSERT INTO Employee (id,name,primaryLastName,secondaryLastName,province,canton,district,email,password,numberOfClasses,laboredHours,salary.role,spreadsheetTypeID,gymName)
VALUES (7,'Haziel','Gudino','Rovira','SanJose','Central','Curridabat','mariohaziel@gmail.com','12345',0,40,6000,'Administrador',1,'Smartfit')

INSERT INTO Employee (id,name,primaryLastName,secondaryLastName,province,canton,district,email,password,numberOfClasses,laboredHours,salary,role,spreadsheetTypeID,gymName)
VALUES (4,'Nacho','Carazo','Nieto','SanJose','Central','Curridabat','nacho@gmail.com','1234',0,15,8000,'Instructor',1,'Smartfit')

INSERT INTO Gym (name,phoneNumber,spaActive,storeActive,openingDate,businessHours,maxCapacity,adminID)
VALUES ('Smartfit',22861005,0,0,'22/06/2021','8am-12pm',30,7)

INSERT INTO Service (name,id,description,gymName)
VALUES ('Zumba',1,'Quema Calorias','Smartfit')

INSERT INTO GymClass (className,date,startTime,finnishTime,capacity,isGrupal,instructorID,serviceID)
VALUES ('ZumbaVida','22/06/2021','8am','11am',20,1,4,1)

INSERT INTO Job (name,id,description)
VALUES ('Instructor',1,'Ayuda Rutina')

INSERT INTO MachineType (id,name,description)
VALUES (1,'Pecho','BenchPress')

INSERT INTO Machine (serialNumber,brand,cost,typeID,gymName)
VALUES (434,'Fitness',344534,1,'Smartfit')

INSERT INTO Product (barCode,name,cost,description,gymName)
VALUES (8734,'Powerade',1500,'Bebida','Smartfit')

INSERT INTO SpreadsheetType (name,id,description)
VALUES('Pago Hora',1,'Pago por hora')

INSERT INTO Treatment(name,gymName)
VALUES('Masaje Puntual','Smartfit')
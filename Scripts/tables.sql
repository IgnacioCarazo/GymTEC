CREATE TABLE Employee(
	id INT NOT NULL,
	name VARCHAR(20) NOT NULL,
	primaryLastName VARCHAR(20) NOT NULL,
	secondaryLastName VARCHAR(20) NOT NULL,
	province VARCHAR(20) NOT NULL,
	canton VARCHAR(20) NOT NULL,
	district VARCHAR(20) NOT NULL,
	email VARCHAR(40) NOT NULL,
	password VARCHAR(60) NOT NULL,
	numberOfClasses INT,
	laboredHours INT,
	salary INT,
	role VARCHAR(20),
	spreadsheetTypeID INT,
	gymName VARCHAR(20)
);



ALTER TABLE Employee
ADD CONSTRAINT pk_emp_id PRIMARY KEY (id);

ALTER TABLE Employee
ADD CONSTRAINT unique_emp_email UNIQUE (email);

--------------TABLE GYM---------------------------
CREATE TABLE Gym(
	name VARCHAR(10) NOT NULL,
	phoneNumber INT NOT NULL,
	spaActive INT,
	storeActive INT,
	openingDate VARCHAR(11),
	businessHours VARCHAR(10) NOT NULL,
	maxCapacity INT NOT NULL,
	adminID INT NOT NULL
);

ALTER TABLE Gym
ADD CONSTRAINT pk_gym_name PRIMARY KEY (name);

ALTER TABLE Gym
ADD CONSTRAINT fk_gym_admin FOREIGN KEY (adminID)
REFERENCES Employee (id)
ON DELETE CASCADE
ON UPDATE CASCADE;

-------------TABLE SERVICE----------------
CREATE TABLE Service(
	 name VARCHAR(40) NOT NULL,
	 id INT NOT NULL,
	 description VARCHAR(40) NOT NULL,
	 gymName VARCHAR(10)
);



ALTER TABLE Service
ADD CONSTRAINT pk_service_id PRIMARY KEY (id);

ALTER TABLE Service
ADD CONSTRAINT fk_gym_service FOREIGN KEY (gymName)
REFERENCES Gym (name)
ON DELETE CASCADE
ON UPDATE CASCADE;



-------------TABLE GYMCLASS-------------
CREATE TABLE GymClass(
	 className VARCHAR(11) NOT NULL,
	 date VARCHAR(11),
	 startTime VARCHAR(11),
	 finnishTime VARCHAR(11),
	 capacity INT,
	 isGrupal INT,
	 instructorID INT,
	 serviceID INT NOT NULL
);

ALTER TABLE GymClass
ADD CONSTRAINT pk_gymClass_name PRIMARY KEY (className);

ALTER TABLE GymClass
ADD CONSTRAINT fk_gymClass_serviceID FOREIGN KEY (serviceID)
REFERENCES Service (id)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE GymClass
DROP CONSTRAINT fk_gymClass_serviceID 


--------------TABLE JOB------------------------

CREATE TABLE Job(
	 name VARCHAR(10) NOT NULL, 
	 id INT NOT NULL,
	 description VARCHAR(20) NOT NULL
);

ALTER TABLE Job
ADD CONSTRAINT pk_job_id PRIMARY KEY (id);




--------------TABLE MACHINE TYPE

CREATE TABLE MachineType(
	  id INT NOT NULL,
	  name VARCHAR(10) NOT NULL,
	  description VARCHAR(40)
);

ALTER TABLE MachineType
ADD CONSTRAINT pk_machineType_id PRIMARY KEY (id);

------------Table MACHINE----------------------

CREATE TABLE Machine(
	  serialNumber INT NOT NULL,
	  brand VARCHAR(20),
	  cost INT,
	  typeID INT,
	  gymName VARCHAR(10)
);

ALTER TABLE Machine
ADD CONSTRAINT pk_machine_snumber PRIMARY KEY (serialNumber);

ALTER TABLE Machine
ADD CONSTRAINT fk_machineType_ID FOREIGN KEY (typeID)
REFERENCES MachineType (id)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE Machine
ADD CONSTRAINT fk_gym_name FOREIGN KEY (gymName)
REFERENCES Gym (name)
ON DELETE CASCADE
ON UPDATE CASCADE;



-----------------TABLE PRODUCT-----------------

CREATE TABLE Product(
	  barCode INT NOT NULL,
	  name VARCHAR(10),
	  cost INT,
	  description VARCHAR(20),
	  gymName VARCHAR(10)
);

ALTER TABLE Product
ADD CONSTRAINT pk_product_barCode PRIMARY KEY (barCode);

ALTER TABLE Product
ADD CONSTRAINT fk_gym_product_name FOREIGN KEY (gymName)
REFERENCES Gym (name)
ON DELETE CASCADE
ON UPDATE CASCADE;



----------------TABLE SPREADSHEETTYPE----------------- 
CREATE TABLE SpreadsheetType(
	  name VARCHAR(40),
	  id INT NOT NULL,
	  description VARCHAR(80)
);


ALTER TABLE SpreadsheetType
ADD CONSTRAINT pk_spreadsheetype_id PRIMARY KEY (id);

--------------TABLE TREATMENT--------------------

CREATE TABLE Treatment(
	  id INT IDENTITY(1,1) NOT NULL,
	  name VARCHAR(40) NOT NULL,
	  gymName VARCHAR(40)
);

ALTER TABLE Treatment
ADD CONSTRAINT pk_treatment_id PRIMARY KEY (id);

------------------TABLE CLIENT-----------------------------


SELECT * FROM Employee;

--SELECT * FROM Gym;

SELECT * FROM Treatment;

--SELECT * FROM Job;

--SELECT * FROM SpreadsheetType;

--SELECT * FROM Service;

--SELECT * FROM MachineType;

--SELECT * FROM Machine;

--SELECT * FROM Product;

--SELECT * FROM GymClass;



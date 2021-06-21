
CREATE TRIGGER TriggerTreatmentCreate
    ON  Gym       
    AFTER INSERT,UPDATE    
AS       
    BEGIN         
        SET NOCOUNT ON;
        DECLARE @spaActive INT;
        DECLARE @name VARCHAR(40);
        SELECT TOP 1 @spaActive = i.spaActive, @name = i.name
        FROM INSERTED i;
		IF(@spaActive=1)
		BEGIN
			EXEC sp_TreatmentCreate @name = 'Masaje Relajante', @gymName = @name;
			EXEC sp_TreatmentCreate @name = 'Masaje Descarga', @gymName = @name;
			EXEC sp_TreatmentCreate @name = 'Masaje Sauna', @gymName = @name;
			EXEC sp_TreatmentCreate @name = 'Bano Vapor', @gymName = @name;
		END
    END;



--DROP TRIGGER TriggerTreatmentCreate


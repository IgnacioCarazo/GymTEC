using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace MongoClientAPI.API.models
{
    /// <summary>
    /// Clase modelo para los clientes a guardar
    /// </summary>
    class Client
    {
        [BsonId]

        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }

        [BsonElement("primaryLastName")]
        public string PrimaryLastName { get; set; }

        [BsonElement("secondaryLastName")]
        public string SecondaryLastName { get; set; }

        [BsonElement("email")]
        public string Email { get; set; }

        [BsonElement("password")]
        public string Password { get; set; }

        [BsonElement("dni")]
        public int DNI { get; set; }

        [BsonElement("age")]
        public int Age { get; set; }

        [BsonElement("weight")]
        public int Weight { get; set; }

        [BsonElement("imc")]
        public int Imc { get; set; }

        [BsonElement("birthDate")]
        public string BirthDate { get; set; }

        [BsonElement("address")]
        public string Address { get; set; }

   
    }
}

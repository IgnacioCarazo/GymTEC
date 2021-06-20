using MongoClientAPI.API.models;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System.Threading.Tasks;

namespace MongoClientAPI.API.services{
    class ClientService : IClientService{
        private readonly MongoClient _mongoClient;
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<Client> _clients;
        public ClientService(MongoClient mongoClient,IConfiguration configuration){
            _mongoClient = mongoClient;
            _database = _mongoClient.GetDatabase(configuration["DatabaseName"]);
            _clients = _database.GetCollection<Client>(configuration["CollectionName"]);
        }
        public async Task CreateClient(Client clientIn)
        {
            await _clients.InsertOneAsync(clientIn);
        }

        public async Task<Client> GetClient(int dni)
        {
            var client = await _clients.FindAsync(client => client.DNI == dni);
            return client.FirstOrDefault();
        }

        public async Task<List<Client>> GetClients()
        {
            var clients = await _clients.FindAsync(client => true);
            return clients.ToList();
        }

        public async Task RemoveClient(Client clientIn)
        {
            await _clients.DeleteOneAsync(client => client.DNI == clientIn.DNI);
        }

        public async Task RemoveClientById(int dni)
        {
            await _clients.DeleteOneAsync(client => client.DNI == dni);
        }

        public async Task UpdateClient(int dni, Client clientIn)
        {
            await _clients.ReplaceOneAsync(client => client.DNI == dni, clientIn);
        }
    }
}

using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using MongoDB.Driver;
using MongoClientAPI.API.models;
using MongoClientAPI.API.services;

namespace MongoClientAPI.API.functions{
    /// <summary>
    /// Crea la direccion en la cual se actualiza el cliente.
    /// </summary>
    /// <returns>
    /// StatusCodeResult 202, 404 y 500
    /// </returns>
    class UpdateClient {
        private readonly ILogger _logger;
        private readonly IClientService _clientService;
        public UpdateClient(MongoClient mongoClient,ILogger<UpdateClient> logger, IClientService clientService)
        {
            _logger = logger;
            _clientService = clientService;

        }
        [FunctionName(nameof(UpdateClient))]
        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "put", Route = "Client/{dni}")] HttpRequest req,int dni){
            IActionResult returnValue = null;
            try{
                var clientToUpdate = await _clientService.GetClient(dni);
                if (clientToUpdate == null) {
                    _logger.LogWarning($"Client with id: {dni} doesn't exist.");
                    returnValue = new StatusCodeResult(StatusCodes.Status404NotFound);
                }
                var input = await new StreamReader(req.Body).ReadToEndAsync();
                var updateClientRequest = JsonConvert.DeserializeObject<Client>(input);
                Client updatedClient = new Client{
                    Name = updateClientRequest.Name,
                    PrimaryLastName = updateClientRequest.PrimaryLastName,
                    SecondaryLastName = updateClientRequest.SecondaryLastName,
                    Email = updateClientRequest.Email,
                    Password = updateClientRequest.Password,
                    DNI = updateClientRequest.DNI,
                    Age = updateClientRequest.Age,
                    Weight = updateClientRequest.Weight,
                    Imc = updateClientRequest.Imc,
                    Birthday = updateClientRequest.Birthday,
                    Address = updateClientRequest.Address
                };

                await _clientService.UpdateClient(dni, updatedClient);

                returnValue = new StatusCodeResult(StatusCodes.Status202Accepted);
            } catch (Exception ex){
                _logger.LogError($"Exception thrown: {ex.Message}");
                returnValue = new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
            return returnValue;
        }
    }
}

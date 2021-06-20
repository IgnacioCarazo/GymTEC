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
    /// Crea la direccion en la cual se crea el cliente.
    /// </summary>
    /// <returns>
    /// StatusCodeResult 201 y 500
    /// </returns>
    class CreateClient
    {
        private readonly ILogger _logger;
        private readonly IClientService _clientService;

        public CreateClient(MongoClient mongoClient,ILogger<CreateClient> logger, IClientService clientService)
        {
            _logger = logger;
            _clientService = clientService;
        }

        [FunctionName(nameof(CreateClient))]
        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "Client")] HttpRequest req) {
            IActionResult returnValue = null;
            try {
                var incomingRequest = await new StreamReader(req.Body).ReadToEndAsync();
                var clientRequest = JsonConvert.DeserializeObject<Client>(incomingRequest);

                var client = new Client{
                     Name = clientRequest.Name,
                     SecondaryLastName = clientRequest.SecondaryLastName,
                     PrimaryLastName = clientRequest.PrimaryLastName,
                     Email = clientRequest.Email,
                     Password = clientRequest.Password,
                     DNI = clientRequest.DNI,
                     Age = clientRequest.Age,
                     Weight = clientRequest.Weight,
                     Imc = clientRequest.Imc,
                     Birthday = clientRequest.Birthday,
                     Address = clientRequest.Address,
                 };
                await _clientService.CreateClient(client);
                returnValue = new StatusCodeResult(StatusCodes.Status201Created);

            } catch (Exception ex) {
                _logger.LogError($"Exception thrown: {ex.Message}");
                Console.Write("-----------");
                Console.Write(ex.Message);
                Console.Write("-----------");
                returnValue = new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
            return returnValue;
        }
    }
}

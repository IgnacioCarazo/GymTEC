using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;
using MongoClientAPI.API.services;

namespace MongoClientAPI.API.functions{
    /// <summary>
    /// Crea la direccion en la cual se obtiene el cliente.
    /// </summary>
    /// <returns>
    /// StatusCodeResult 404 y 500
    /// </returns>
    class GetClient
    {
        private readonly ILogger _logger;
        private readonly IClientService _clientService;
        public GetClient(MongoClient mongoClient,ILogger<GetClient> logger, IClientService clientService) {
            _logger = logger;
            _clientService = clientService;
        }

        [FunctionName(nameof(GetClient))]
        public async Task<IActionResult> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Client/{dni}")] HttpRequest req,int dni)
        {
            IActionResult returnValue = null;
            try{
                var client = await _clientService.GetClient(dni);
                if (client == null){
                    _logger.LogWarning($"Client with id: {dni} doesn't exist.");
                    returnValue = new StatusCodeResult(StatusCodes.Status404NotFound);
                }

                returnValue = new OkObjectResult(client);
            } catch (Exception ex) {
                _logger.LogError($"Couldn't find Client with id: {dni}. Exception thrown: {ex.Message}");
                Console.Write("-----------");
                Console.Write(ex.Message);
                Console.Write("-----------");
                returnValue = new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
            return returnValue;
        }
    }
}

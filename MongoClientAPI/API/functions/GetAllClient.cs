using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using MongoClientAPI.API.services;

namespace MongoClientAPI.API.functions{
    /// <summary>
    /// Crea la direccion en la cual se obtiene todos los clientes.
    /// </summary>
    /// <returns>
    /// StatusCodeResult 404 y 500
    /// </returns>
    class GetAllClient
    {
        private readonly ILogger<GetAllClient> _logger;
        private readonly IClientService _clientService;
        public GetAllClient(ILogger<GetAllClient> logger, IClientService clientService){
            _logger = logger;
            _clientService = clientService;
        }

        [FunctionName(nameof(GetAllClient))]
        public async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "Clients")] HttpRequest req){
            IActionResult result;
            try{
                var clients = await _clientService.GetClients();
                if (clients == null){
                    _logger.LogWarning("No Clients found!");
                    result = new StatusCodeResult(StatusCodes.Status404NotFound);
                }
                result = new OkObjectResult(clients);
            }catch (Exception ex){
                _logger.LogError($"Internal Server Error. Exception thrown: {ex.Message}");
                result = new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
            return result;
        }
    }
}

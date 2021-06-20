using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using System;
using MongoClientAPI.API.services;

namespace MongoClientAPI.API.functions{
    /// <summary>
    /// Crea la direccion en la cual se borra el cliente.
    /// </summary>
    /// <returns>
    /// StatusCodeResult 204, 404 y 500
    /// </returns>
    class DeleteClient
    {
        private readonly ILogger _logger;
        private readonly IClientService _clientService;
        public DeleteClient(ILogger<DeleteClient> logger, IClientService clientService){
            _logger = logger;
            _clientService = clientService;
        }

        [FunctionName(nameof(DeleteClient))]
        public async System.Threading.Tasks.Task<IActionResult> RunAsync([HttpTrigger(AuthorizationLevel.Anonymous, "delete", Route = "Client/{idCed}")] HttpRequest req, int dni)
        {
            IActionResult returnValue = null;
            try{
                var clientToDelete = await _clientService.GetClient(dni);
                if (clientToDelete == null){
                    _logger.LogWarning($"Client with id: {dni} doesn't exist.");
                    returnValue = new StatusCodeResult(StatusCodes.Status404NotFound);
                }

                await _clientService.RemoveClient(clientToDelete);
                returnValue = new StatusCodeResult(StatusCodes.Status204NoContent);
            }catch (Exception ex){
                _logger.LogError($"Exception thrown: {ex.Message}");
                returnValue = new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
            return returnValue;
        }
    }
}

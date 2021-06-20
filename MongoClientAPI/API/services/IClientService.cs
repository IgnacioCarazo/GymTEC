using MongoClientAPI.API.models;
using System.Collections.Generic;
using System.Threading.Tasks;
namespace MongoClientAPI.API.services{
    /// <summary>
    /// Interfaz de las funciones de la API
    /// </summary>
    interface IClientService
    {
        /// <summary>
        /// Get all clients from the Clients collection
        /// </summary>
        /// <returns></returns>
        Task<List<Client>> GetClients();

        /// <summary>
        /// Get a client by its idCed from the Clients collection
        /// </summary>
        /// <param name="dni"></param>
        /// <returns></returns>
        Task<Client> GetClient(int dni);

        /// <summary>
        /// Insert a client into the Clients collection
        /// </summary>
        /// <param name="client"></param>
        /// <returns></returns>
        Task CreateClient(Client clientIn);

        /// <summary>
        /// Updates an existing book in the Books collection
        /// </summary>
        /// <param name="dni"></param>
        /// <param name="client"></param>
        /// <returns></returns>
        Task UpdateClient(int dni, Client clientIn);

        /// <summary>
        /// Removes a client from the Clients collection
        /// </summary>
        /// <param name="client"></param>
        /// <returns></returns>
        Task RemoveClient(Client clientIn);

        /// <summary>
        /// Removes a client with the specified idCed from the Clients collection
        /// </summary>
        /// <param name="dni"></param>
        /// <returns></returns>
        Task RemoveClientById(int dni);
    }
}

using BackEndData.Interfaces;
using BackEndModel;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SQLBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : Controller
    {
        private readonly IService _serviceI;

        /// <summary>
        /// constructor de la clase
        /// </summary>
        /// <param name="controlI">interfaz Control</param>
        public ServiceController(IService serviceI) => _serviceI = serviceI;


        [HttpGet]
        public async Task<IActionResult> GtAll()
        {
            return Ok(await _serviceI.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRead(int id)
        {
            return Ok(await _serviceI.Get(id));
        }


        [HttpPost]
        public async Task<IActionResult> Insrt([FromBody] Service service)
        {
            if (service == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _serviceI.Insert(service))
            {
                return BadRequest("Error or Already Exists");
            }
            return Ok(await _serviceI.GetAll());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Dlete(int id)
        {
            if (!await _serviceI.Delete(new Service { id = id }))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _serviceI.GetAll());
        }

        [HttpPut]
        public async Task<IActionResult> Updt([FromBody] Service service)
        {
            if (service == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _serviceI.Update(service))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _serviceI.GetAll());
        }
    }
}

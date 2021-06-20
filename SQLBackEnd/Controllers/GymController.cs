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
    public class GymController : Controller
    {
         /// <summary>
    /// Clase controlador para peticiones http de controller
    /// </summary>
    
    
        private readonly IGym _gymI;

        /// <summary>
        /// constructor de la clase
        /// </summary>
        /// <param name="controlI">interfaz Control</param>
        public GymController(IGym gymI) => _gymI = gymI;


        [HttpGet]
        public async Task<IActionResult> GtAll()
        {
            return Ok(await _gymI.GetAll());
        }

        [HttpGet("{name}")]
        public async Task<IActionResult> GetRead(string name)
        {
            return Ok(await _gymI.Get(name));
        }


        [HttpPost]
        public async Task<IActionResult> Insrt([FromBody] Gym gym)
        {
            if (gym == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _gymI.Insert(gym))
            {
                return BadRequest("Error or Already Exists");
            }
            return Ok(await _gymI.GetAll());
        }

        [HttpDelete("{name}")]
        public async Task<IActionResult> Dlete(string name)
        {
            if(!await _gymI.Delete(new Gym { name = name }))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _gymI.GetAll());
        }

        [HttpPut]
        public async Task<IActionResult> Updt([FromBody] Gym gym)
        {
            if (gym == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if(!await _gymI.Update(gym))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _gymI.GetAll());
        }

    }
    
}

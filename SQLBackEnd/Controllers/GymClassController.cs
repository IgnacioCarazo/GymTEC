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
    public class GymClassController : Controller
    {
        private readonly IGymClass _gymClassI;

        /// <summary>
        /// constructor de la clase
        /// </summary>
        /// <param name="controlI">interfaz Control</param>
        public GymClassController(IGymClass gymClassI) => _gymClassI = gymClassI;


        [HttpGet]
        public async Task<IActionResult> GtAll()
        {
            return Ok(await _gymClassI.GetAll());
        }

        [HttpGet("{className}")]
        public async Task<IActionResult> GetRead(string className)
        {
            return Ok(await _gymClassI.Get(className));
        }


        [HttpPost]
        public async Task<IActionResult> Insrt([FromBody] GymClass gymClass)
        {
            if (gymClass == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _gymClassI.Insert(gymClass))
            {
                return BadRequest("Error or Already Exists");
            }
            return Ok(await _gymClassI.GetAll());
        }

        [HttpDelete("{className}")]
        public async Task<IActionResult> Dlete(string className)
        {
            if (!await _gymClassI.Delete(new GymClass { className = className }))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _gymClassI.GetAll());
        }

        [HttpPut]
        public async Task<IActionResult> Updt([FromBody] GymClass gymClass)
        {
            if (gymClass == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _gymClassI.Update(gymClass))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _gymClassI.GetAll());
        }
    }
}

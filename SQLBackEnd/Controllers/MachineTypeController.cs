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
    public class MachineTypeController : Controller
    {
        private readonly IMachineType _machineTypeI;

        /// <summary>
        /// constructor de la clase
        /// </summary>
        /// <param name="controlI">interfaz Control</param>
        public MachineTypeController(IMachineType machineTypeI) => _machineTypeI = machineTypeI;


        [HttpGet]
        public async Task<IActionResult> GtAll()
        {
            return Ok(await _machineTypeI.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRead(int id)
        {
            return Ok(await _machineTypeI.Get(id));
        }


        [HttpPost]
        public async Task<IActionResult> Insrt([FromBody] MachineType machineType)
        {
            if (machineType == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _machineTypeI.Insert(machineType))
            {
                return BadRequest("Error or Already Exists");
            }
            return Ok(await _machineTypeI.GetAll());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Dlete(int id)
        {
            if (!await _machineTypeI.Delete(new MachineType { id = id }))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _machineTypeI.GetAll());
        }

        [HttpPut]
        public async Task<IActionResult> Updt([FromBody] MachineType machineType)
        {
            if (machineType == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _machineTypeI.Update(machineType))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _machineTypeI.GetAll());
        }
    }
}

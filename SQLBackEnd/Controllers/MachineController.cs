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
    public class MachineController : Controller
    {
        private readonly IMachine _machineI;

        /// <summary>
        /// constructor de la clase
        /// </summary>
        /// <param name="controlI">interfaz Control</param>
        public MachineController(IMachine machineI) => _machineI = machineI;


        [HttpGet]
        public async Task<IActionResult> GtAll()
        {
            return Ok(await _machineI.GetAll());
        }

        [HttpGet("{serialNumber}")]
        public async Task<IActionResult> GetRead(int serialNumber)
        {
            return Ok(await _machineI.Get(serialNumber));
        }


        [HttpPost]
        public async Task<IActionResult> Insrt([FromBody] Machine machine)
        {
            if (machine == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _machineI.Insert(machine))
            {
                return BadRequest("Error or Already Exists");
            }
            return Ok(await _machineI.GetAll());
        }

        [HttpDelete("{serialNumer}")]
        public async Task<IActionResult> Dlete(int serialNumber)
        {
            if (!await _machineI.Delete(new Machine { serialNumber = serialNumber }))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _machineI.GetAll());
        }

        [HttpPut]
        public async Task<IActionResult> Updt([FromBody] Machine machine)
        {
            if (machine == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _machineI.Update(machine))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _machineI.GetAll());
        }
    }
}

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
    public class SpreadsheetTypeController : Controller
    {
        private readonly ISpreadsheetType _spreadsheetTypeI;

        /// <summary>
        /// constructor de la clase
        /// </summary>
        /// <param name="controlI">interfaz Control</param>
        public SpreadsheetTypeController(ISpreadsheetType spreadsheetTypeI) => _spreadsheetTypeI = spreadsheetTypeI;


        [HttpGet]
        public async Task<IActionResult> GtAll()
        {
            return Ok(await _spreadsheetTypeI.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRead(int id)
        {
            return Ok(await _spreadsheetTypeI.Get(id));
        }


        [HttpPost]
        public async Task<IActionResult> Insrt([FromBody] SpreadsheetType spreadsheetType)
        {
            if (spreadsheetType == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _spreadsheetTypeI.Insert(spreadsheetType))
            {
                return BadRequest("Error or Already Exists");
            }
            return Ok(await _spreadsheetTypeI.GetAll());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Dlete(int id)
        {
            if (!await _spreadsheetTypeI.Delete(new SpreadsheetType { id = id }))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _spreadsheetTypeI.GetAll());
        }

        [HttpPut]
        public async Task<IActionResult> Updt([FromBody] SpreadsheetType spreadsheetType)
        {
            if (spreadsheetType == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _spreadsheetTypeI.Update(spreadsheetType))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _spreadsheetTypeI.GetAll());
        }
    }
}

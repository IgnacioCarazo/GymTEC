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
    public class TreatmentController : Controller
    {
        private readonly ITreatment _treatmentI;

        /// <summary>
        /// constructor de la clase
        /// </summary>
        /// <param name="controlI">interfaz Control</param>
        public TreatmentController(ITreatment treatmentI) => _treatmentI = treatmentI;


        [HttpGet]
        public async Task<IActionResult> GtAll()
        {
            return Ok(await _treatmentI.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRead(int id)
        {
            return Ok(await _treatmentI.Get(id));
        }


        [HttpPost]
        public async Task<IActionResult> Insrt([FromBody] Treatment treatment)
        {
            if (treatment == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _treatmentI.Insert(treatment))
            {
                return BadRequest("Error or Already Exists");
            }
            return Ok(await _treatmentI.GetAll());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Dlete(int id)
        {
            if (!await _treatmentI.Delete(new Treatment { id = id }))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _treatmentI.GetAll());
        }

        [HttpPut]
        public async Task<IActionResult> Updt([FromBody] Treatment treatment)
        {
            if (treatment == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _treatmentI.Update(treatment))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _treatmentI.GetAll());
        }
    }
}

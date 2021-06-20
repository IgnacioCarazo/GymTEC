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
    public class JobController : Controller
    {
        private readonly IJob _jobI;

        /// <summary>
        /// constructor de la clase
        /// </summary>
        /// <param name="controlI">interfaz Control</param>
        public JobController(IJob jobI) => _jobI = jobI;


        [HttpGet]
        public async Task<IActionResult> GtAll()
        {
            return Ok(await _jobI.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRead(int id)
        {
            return Ok(await _jobI.Get(id));
        }


        [HttpPost]
        public async Task<IActionResult> Insrt([FromBody] Job job)
        {
            if (job == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _jobI.Insert(job))
            {
                return BadRequest("Error or Already Exists");
            }
            return Ok(await _jobI.GetAll());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Dlete(int id)
        {
            if (!await _jobI.Delete(new Job { id = id }))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _jobI.GetAll());
        }

        [HttpPut]
        public async Task<IActionResult> Updt([FromBody] Job job)
        {
            if (job == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _jobI.Update(job))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _jobI.GetAll());
        }
    }
}

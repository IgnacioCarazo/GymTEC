using BackEndData.Interfaces;
using BackEndModel;
using Microsoft.AspNetCore.Mvc;
using SQLBackEnd.DataManagment;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SQLBackEnd.Controllers
{
    /// <summary>
    /// Clase controlador para peticiones http de controller
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly IEmployee _employeeI;

        /// <summary>
        /// constructor de la clase
        /// </summary>
        /// <param name="controlI">interfaz Control</param>
        public EmployeeController(IEmployee employeeI) => _employeeI = employeeI;


        [HttpGet]
        public async Task<IActionResult> GtAll()
        {
            return Ok(await _employeeI.GetAll());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRead(int id)
        {
            return Ok(await _employeeI.Get(id));
        }


        [HttpPost]
        public async Task<IActionResult> Insrt([FromBody] Employee employee)
        {
            if (employee == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _employeeI.Insert(employee))
            {
                return BadRequest("Error or Already Exists");
            }
            return Ok(await _employeeI.GetAll());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Dlete(int id)
        {
            if(!await _employeeI.Delete(new Employee { id = id }))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _employeeI.GetAll());
        }

        [HttpPut]
        public async Task<IActionResult> Updt([FromBody] Employee employee)
        {
            if (employee == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if(!await _employeeI.Update(employee))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _employeeI.GetAll());
        }

        [HttpGet("login/{email}/{password}")]
        public async Task<IActionResult> GetLogin(string email, string password)
        {
            Employee empLog = await _employeeI.Get(email);
            if (empLog == null)
            {
                empLog = new Employee();
                empLog.role = "";
                return Ok(empLog);
            }
            if (EmployeeManagment.logAuthorization(empLog, password) == false)
            {
                empLog.role = "";
            }
            return Ok(empLog);
        }


    }
}

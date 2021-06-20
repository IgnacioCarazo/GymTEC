using BackEndData.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SQLBackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenerateWorksheetController : Controller
    {
        private readonly IGenerateWorksheet _generateWorksheetI;

        /// <summary>
        /// constructor de la clase
        /// </summary>
        /// <param name="controlI">interfaz Control</param>
        public GenerateWorksheetController(IGenerateWorksheet generateWorksheetI) => _generateWorksheetI = generateWorksheetI;


        [HttpGet]
        public async Task<IActionResult> GtAll()
        {
            return Ok(await _generateWorksheetI.GetAll());
        }


    }
}

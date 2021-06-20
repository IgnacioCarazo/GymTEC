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
    public class ProductController : Controller
    {
        private readonly IProduct _productI;

        /// <summary>
        /// constructor de la clase
        /// </summary>
        /// <param name="controlI">interfaz Control</param>
        public ProductController(IProduct productI) => _productI = productI;


        [HttpGet]
        public async Task<IActionResult> GtAll()
        {
            return Ok(await _productI.GetAll());
        }

        [HttpGet("{barCode}")]
        public async Task<IActionResult> GetRead(int barCode)
        {
            return Ok(await _productI.Get(barCode));
        }


        [HttpPost]
        public async Task<IActionResult> Insrt([FromBody] Product product)
        {
            if (product == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _productI.Insert(product))
            {
                return BadRequest("Error or Already Exists");
            }
            return Ok(await _productI.GetAll());
        }

        [HttpDelete("{barCode}")]
        public async Task<IActionResult> Dlete(int barCode)
        {
            if (!await _productI.Delete(new Product { barCode = barCode }))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _productI.GetAll());
        }

        [HttpPut]
        public async Task<IActionResult> Updt([FromBody] Product product)
        {
            if (product == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!await _productI.Update(product))
            {
                return BadRequest("Error or No Exists");
            }
            return Ok(await _productI.GetAll());
        }
    }
}

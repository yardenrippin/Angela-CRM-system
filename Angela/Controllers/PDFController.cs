using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Angela.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PDFController : ControllerBase
    {

        [HttpPost("pdf")]
        public string getpdf([FromBody] PDF mypdf)
        {
            PDF pDF = new PDF(mypdf.Name, mypdf.HTML, mypdf.type);

            string file= pDF.creat();
            if (!String.IsNullOrEmpty(file))
            {
                return file;
            }
            else
            {
                return null;
            }
            
        }
    }
}
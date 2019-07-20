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
    public class EmailController : ControllerBase
    {
        [HttpPost("open")]
        public bool openEmail([FromBody] Email email)
        {
            Email mail = new Email(email.from, email.to, email.body, email.subject, email.attachment);

            return mail.open();

        }


     

       
    }
}
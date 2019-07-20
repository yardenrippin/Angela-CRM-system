using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace Angela.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BeneficiaryController : ControllerBase
    {

       [HttpGet("getbyid")]
       public List<Beneficiary> beneficiaries(int beneficiaryID)
        {
            try
            {
                List<Beneficiary> beneficiaries = new List<Beneficiary>();
                string sql = "SELECT beneficiaryID,beneficiaryName,beneficiaryMail,beneficiaryPhone,beneficiaryFax,beneficiaryAddress FROM beneficiarys where beneficiaryID=@beneficiaryID  ";
                DB.PullFromBD(sql, (cmd) => cmd.Parameters.AddWithValueCheckNull("@beneficiaryID", beneficiaryID),
                    (dr) => beneficiaries.Add(new Beneficiary(dr)));
                if (beneficiaries.Count > 0)
                {
                    return beneficiaries;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception)
            {

                return null;
            }
       

        }
        [HttpPost("add")]
        public int ADD([FromBody] Beneficiary obj)
        {
            try
            {

                List<Beneficiary> beneficiaries = new List<Beneficiary>();
                string sql = "SELECT beneficiaryID,beneficiaryName,beneficiaryMail,beneficiaryPhone,beneficiaryFax,beneficiaryAddress FROM beneficiarys  WHERE beneficiaryName =@beneficiaryName AND beneficiaryPhone=@beneficiaryPhone";
                DB.PullFromBD(sql, (cmd) =>
                {
                    cmd.Parameters.AddWithValueCheckNull("@beneficiaryName", obj.beneficiaryName);
                    cmd.Parameters.AddWithValueCheckNull("@beneficiaryPhone", obj.beneficiaryPhone);


                }, (dr) => beneficiaries.Add(new Beneficiary(dr)));


                if (beneficiaries.Count > 0)
                {

                    return beneficiaries[0].beneficiaryID;

                }
                else
                {
                    string msql = "INSERT INTO beneficiarys(beneficiaryName,beneficiaryMail,beneficiaryPhone,beneficiaryFax,beneficiaryAddress)" +
                        "OUTPUT INSERTED.beneficiaryID VALUES(@beneficiaryName,@beneficiaryMail,@beneficiaryPhone,@beneficiaryFax,@beneficiaryAddress)";
                    return DB.ExecuteCommand(msql, (cmd) => {



                        cmd.Parameters.AddWithValueCheckNull("@beneficiaryName", obj.beneficiaryName);
                        cmd.Parameters.AddWithValueCheckNull("@beneficiaryMail", obj.beneficiaryMail);
                        cmd.Parameters.AddWithValueCheckNull("@beneficiaryPhone", obj.beneficiaryPhone);
                        cmd.Parameters.AddWithValueCheckNull("@beneficiaryFax", obj.beneficiaryFax);
                        cmd.Parameters.AddWithValueCheckNull("@beneficiaryAddress", obj.beneficiaryAddress);


                    }, true);

                }
            }
            catch (Exception)
            {

                return -1;
            }






        }


    }

    
}



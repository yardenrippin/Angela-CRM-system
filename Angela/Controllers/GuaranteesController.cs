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
    public class GuaranteesController : ControllerBase
    {

        [HttpPost("add")]
        public int Add([FromBody] Guarantees obj)
        {
            try
            {
                string sql = "INSERT INTO Guarantees(DateCreated,EmployeeID,CustomerID,CastumerName,GuaranteeNumber,BeneficiaryID,StartDate,expirationDate,GuaranteeType,Essence,About,Amount,EstimatedAmount," +
               "Commission,CommissionPercent,DocumentsCommission,DocumentsCommissionPercent,IndexType,IndexDate,Currency,CurrencyValue,Status,Note,SentTObusinessManager," +
               "SentTOcustomer,SentToManagerSignature,Starttreatment,Endoftreatment,Extension)OUTPUT INSERTED.GuaranteeID VALUES(@DateCreated,@EmployeeID,@CustomerID,@CastumerName,@GuaranteeNumber,@BeneficiaryID,@StartDate,@expirationDate,@GuaranteeType,@Essence,@About,@Amount,@EstimatedAmount," +
               "@Commission,@CommissionPercent,@DocumentsCommission,@DocumentsCommissionPercent,@IndexType,@IndexDate,@Currency,@CurrencyValue,@Status,@Note,@SentTObusinessManager," +
               "@SentTOcustomer,@SentToManagerSignature,@Starttreatment,@Endoftreatment,@Extension)";
                return DB.ExecuteCommand(sql, (cmd) => {


                    cmd.Parameters.AddWithValueCheckNull("@DateCreated", obj.DateCreated);
                    cmd.Parameters.AddWithValueCheckNull("@EmployeeID", obj.EmployeeID);
                    cmd.Parameters.AddWithValueCheckNull("@CustomerID", obj.CustomerID);
                    cmd.Parameters.AddWithValueCheckNull("@CastumerName", obj.CastumerName);
                    cmd.Parameters.AddWithValueCheckNull("@GuaranteeNumber", obj.GuaranteeNumber);
                    cmd.Parameters.AddWithValueCheckNull("@BeneficiaryID", obj.BeneficiaryID);
                    cmd.Parameters.AddWithValueCheckNull("@StartDate", obj.StartDate);
                    cmd.Parameters.AddWithValueCheckNull("@expirationDate", obj.ExpirationDate);
                    cmd.Parameters.AddWithValueCheckNull("@GuaranteeType", obj.GuaranteeType);
                    cmd.Parameters.AddWithValueCheckNull("@Essence", obj.Essence);
                    cmd.Parameters.AddWithValueCheckNull("@About", obj.About);
                    cmd.Parameters.AddWithValueCheckNull("@Amount", obj.@Amount);
                    cmd.Parameters.AddWithValueCheckNull("@EstimatedAmount", obj.EstimatedAmount);
                    cmd.Parameters.AddWithValueCheckNull("@Commission", obj.Commission);
                    cmd.Parameters.AddWithValueCheckNull("@CommissionPercent", obj.CommissionPercent);
                    cmd.Parameters.AddWithValueCheckNull("@DocumentsCommission", obj.DocumentsCommission);
                    cmd.Parameters.AddWithValueCheckNull("@DocumentsCommissionPercent", obj.DocumentsCommissionPercent);
                    cmd.Parameters.AddWithValueCheckNull("@IndexType", obj.IndexType);
                    cmd.Parameters.AddWithValueCheckNull("@IndexDate", obj.IndexDate);
                    cmd.Parameters.AddWithValueCheckNull("@Currency", obj.Currency);
                    cmd.Parameters.AddWithValueCheckNull("@CurrencyValue", obj.CurrencyValue);
                    cmd.Parameters.AddWithValueCheckNull("@Status", obj.Status);
                    cmd.Parameters.AddWithValueCheckNull("@Note", obj.Note);
                    cmd.Parameters.AddWithValueCheckNull("@SentTObusinessManager", obj.SentTObusinessManager);
                    cmd.Parameters.AddWithValueCheckNull("@SentTOcustomer", obj.SentTOcustomer);
                    cmd.Parameters.AddWithValueCheckNull("@SentToManagerSignature", obj.SentToManagerSignature);
                    cmd.Parameters.AddWithValueCheckNull("@Starttreatment", obj.Starttreatment);
                    cmd.Parameters.AddWithValueCheckNull("@Endoftreatment", obj.Endoftreatment);
                    cmd.Parameters.AddWithValueCheckNull("@Extension", obj.Extension);



                }, true);
            }
            catch (Exception)
            {

               return -1;
            }
           
         }
        

         [HttpGet("getByCustomer")]
        public List<Guarantees> ByCustomer(int CustomerID,string Guaranteenumber)
        {
            try
            {
                List<Guarantees> ByCustomer = new List<Guarantees>();
                string sql = "SELECT GuaranteeID,DateCreated,EmployeeID,CustomerID,CastumerName,GuaranteeNumber,BeneficiaryID,StartDate,expirationDate,GuaranteeType,Essence,About,Amount,EstimatedAmount," +
                    "Commission,CommissionPercent,DocumentsCommission,DocumentsCommissionPercent,IndexType,IndexDate,Currency,CurrencyValue,Status,Note,SentTObusinessManager," +
                    "SentTOcustomer,SentToManagerSignature,Starttreatment,Endoftreatment,Extension " + "FROM Guarantees where CustomerID=@CustomerID AND GuaranteeNumber=@Guaranteenumber;";
                DB.PullFromBD(sql, (cmd) => {
                    cmd.Parameters.AddWithValue("@CustomerID", CustomerID);
                    cmd.Parameters.AddWithValue("@Guaranteenumber", @Guaranteenumber);
                },

                (dr) => ByCustomer.Add(new Guarantees(dr)));



                if (ByCustomer.Count > 0)
                {
                    return ByCustomer;
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

        [HttpGet("updateExtension")]
        public string  Guarantees(int guaranteeid ,string Extension)
        {
            try
            {
                string myExtension = Extension;
                string sql = "UPDATE Guarantees SET  Extension=@Extension where GuaranteeID=@GuaranteeID ";


                DB.ExecuteCommand(sql, (cmd) => {

                    cmd.Parameters.AddWithValueCheckNull("@GuaranteeID", guaranteeid);
                    cmd.Parameters.AddWithValueCheckNull("@Extension", myExtension);


                });

                return myExtension;
            }
            catch (Exception)
            {

                return "";
            }
          
        }
        [HttpGet("updateEmploye")]
        public bool Guarantees(int employeeid,int guaranteeid)
        {
            try
            {
                
                string sql = "UPDATE Guarantees SET  EmployeeID=@EmployeeID where GuaranteeID=@GuaranteeID ";


                DB.ExecuteCommand(sql, (cmd) => {

                    cmd.Parameters.AddWithValueCheckNull("@GuaranteeID", guaranteeid);
                    cmd.Parameters.AddWithValueCheckNull("@EmployeeID", employeeid);


                });

                return true;
            }
            catch (Exception)
            {

                return false;
            }

        }


    }
}

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
    public class CustomersController : ControllerBase
    {

        [HttpGet("get")]
        public List<Customer> CustomersList(int AcountNumber)

        {
            try
            {
                if (AcountNumber == 0)
                {
                    return null;
                }

                string sql = "SELECT CustomerID,AcountNumber,CompantName,Contactman,CompanyMail,CompanyAddress,CompanyPhone,CompanyFax,GroupID,Guaranteecounter" +
                ",ExecutionCommission,FormalCommission,CreditsecurityCommission,DocumentsCommission From Customers where AcountNumber=@AcountNumber";
                List<Customer> customers = new List<Customer>();


                DB.PullFromBD(sql, (cmd) => cmd.Parameters.AddWithValueCheckNull("@AcountNumber", AcountNumber),

                    (dr) => customers.Add(new Customer(dr)));
                if (customers.Count > 0)
                {
                    return customers;
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
        [HttpGet("increasecounter")]
        public bool Increase(int counter ,int CustomerID)
        {
            try
            {
                if (counter < 0 && CustomerID <= 0)
                {
                    return false;
                }
                else
                {
                    string sql = "UPDATE Customers SET Guaranteecounter=@Guaranteecounter where CustomerID=@CustomerID";
                    DB.ExecuteCommand(sql, (cmd) =>
                    {
                        cmd.Parameters.AddWithValueCheckNull("@CustomerID", CustomerID);
                        cmd.Parameters.AddWithValueCheckNull("@Guaranteecounter", counter + 1);
                    });
                    return true;
                }
            }
            catch (Exception)
            {

                return false;
            }
        
          
        }
        [HttpGet("firstordefualt")]
        public bool FirstOrdefualt(int AcountNumber)
        {
            
            List<Customer> customers = new List<Customer>();
            string sql = "SELECT  top 1 AcountNumber From Customers where AcountNumber=@AcountNumber";
            DB.PullFromBD(sql, (cmd) => cmd.Parameters.AddWithValueCheckNull("@AcountNumber", AcountNumber)

             , (dr) => customers.Add(new Customer()));


            if (customers.Count > 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        [HttpPost("Add")]
        public int add([FromBody] Customer customers)
        {

            Customer customer = new Customer();
            try
            {
                string sql = "INSERT INTO Customers(AcountNumber,CompantName,Contactman,CompanyMail,CompanyAddress,CompanyPhone,CompanyFax,GroupID,Guaranteecounter" +
               ",ExecutionCommission,FormalCommission,CreditsecurityCommission,DocumentsCommission)OUTPUT INSERTED.CustomerID VALUES" +
               "(@AcountNumber,@CompantName,@Contactman,@CompanyMail,@CompanyAddress,@CompanyPhone,@CompanyFax,@GroupID,@Guaranteecounter" +
               ",@ExecutionCommission,@FormalCommission,@CreditsecurityCommission,@DocumentsCommission)";
                return DB.ExecuteCommand(sql, (cmd) =>
                {
                    cmd.Parameters.AddWithValueCheckNull("@AcountNumber", customers.AcountNumber);
                    cmd.Parameters.AddWithValueCheckNull("@CompantName", customers.CompantName);
                    cmd.Parameters.AddWithValueCheckNull("@Contactman", customers.Contactman);
                    cmd.Parameters.AddWithValueCheckNull("@CompanyMail", customers.CompanyMail);
                    cmd.Parameters.AddWithValueCheckNull("@CompanyAddress", customers.CompanyAddress);
                    cmd.Parameters.AddWithValueCheckNull("@CompanyPhone", customers.CompanyPhone);
                    cmd.Parameters.AddWithValueCheckNull("@CompanyFax", customers.CompanyFax);
                    cmd.Parameters.AddWithValueCheckNull("@GroupID", customers.GroupID);
                    cmd.Parameters.AddWithValueCheckNull("@Guaranteecounter", 0);
                    cmd.Parameters.AddWithValueCheckNull("@ExecutionCommission", customers.ExecutionCommission);
                    cmd.Parameters.AddWithValueCheckNull("@FormalCommission", customers.FormalCommission);
                    cmd.Parameters.AddWithValueCheckNull("@CreditsecurityCommission", customers.CreditsecurityCommission);
                    cmd.Parameters.AddWithValueCheckNull("@DocumentsCommission", customers.DocumentsCommission);
                }, false);
            }
            catch (Exception)
            {

                return -1;
            }
               
            }
        [HttpPost("update")]
        public int update([FromBody] Customer customers)
        {
            Customer customer = new Customer();
            string sql = "UPDATE Customers SET CompantName=@CompantName,Contactman=@Contactman,CompanyMail=@CompanyMail,CompanyAddress=@CompanyAddress" +
                ",CompanyPhone=@CompanyPhone,CompanyFax=@CompanyFax,GroupID=@GroupID,Guaranteecounter=@Guaranteecounter" +
               ",ExecutionCommission=@ExecutionCommission,FormalCommission=@FormalCommission,CreditsecurityCommission=@CreditsecurityCommission" +
               ",DocumentsCommission=@DocumentsCommission where CustomerID=@CustomerID";
            return DB.ExecuteCommand(sql, (cmd) =>
            {
                cmd.Parameters.AddWithValueCheckNull("@CustomerID", customers.CustomerID);
                
                cmd.Parameters.AddWithValueCheckNull("@CompantName", customers.CompantName);
                cmd.Parameters.AddWithValueCheckNull("@Contactman", customers.Contactman);
                cmd.Parameters.AddWithValueCheckNull("@CompanyMail", customers.CompanyMail);
                cmd.Parameters.AddWithValueCheckNull("@CompanyAddress", customers.CompanyAddress);
                cmd.Parameters.AddWithValueCheckNull("@CompanyPhone", customers.CompanyPhone);
                cmd.Parameters.AddWithValueCheckNull("@CompanyFax", customers.CompanyFax);
                cmd.Parameters.AddWithValueCheckNull("@GroupID", customers.GroupID);
                cmd.Parameters.AddWithValueCheckNull("@Guaranteecounter", customers.Guaranteecounter);
                cmd.Parameters.AddWithValueCheckNull("@ExecutionCommission", customers.ExecutionCommission);
                cmd.Parameters.AddWithValueCheckNull("@FormalCommission", customers.FormalCommission);
                cmd.Parameters.AddWithValueCheckNull("@CreditsecurityCommission", customers.CreditsecurityCommission);
                cmd.Parameters.AddWithValueCheckNull("@DocumentsCommission", customers.DocumentsCommission);
            }, false);
        }
          


        }

    }






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
    public class EmployeesController : ControllerBase
    {

        [HttpGet("login")]
        public Employees Login(string EmployeNumber,string Password)
        {
            try
            {
                Employees EM = new Employees();
                string encypt = EM.Ecrypted(Password);
                if (String.IsNullOrEmpty(EmployeNumber) || String.IsNullOrEmpty(Password))
                    return null;

                string sql = "SELECT EmployeeID,EmployeNumber,Username,Password,EmployeMail,EmployePhone,Permission,Titel,GroupID FROM Employees where EmployeNumber=@EmployeNumber";
                DB.PullFromBD(sql, (cmd) => cmd.Parameters.AddWithValueCheckNull("@EmployeNumber", EmployeNumber),
                (dr) => EM = new Employees(dr,false));


                if (encypt == EM.Password)
                {
                    EM.Password = null;
                    return EM;


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
        [HttpGet("getall")]
        public List<Employees> getall()
        {
            try
            {
                List<Employees> all = new List<Employees>();
                string sql = "SELECT EmployeeID,EmployeNumber,Username,EmployeMail,EmployePhone,Permission,Titel,GroupID FROM Employees";
                DB.PullFromBD(sql, null, (dr) => all.Add(new Employees(dr,true)));
                if (all.Count <= 0)
                {
                    return null;
                }
                else
                {//to fix it
                    //for (int i = 0; i < all.Count; i++)
                    //{
                    //    all[i].Password = null;
                    //}
                    return all;
                }
            }
            catch (Exception)
            {

                return null;
            }
           

        }

        [HttpGet("getbyid")]
        public Employees Employee(int id)
        {
            try
            {
                Employees employees = new Employees();
                string sql = "SELECT EmployeeID,EmployeNumber,Username,EmployeMail,EmployePhone,Permission,Titel,GroupID FROM Employees where EmployeeID=@EmployeeID";
                DB.PullFromBD(sql, (cmd) => cmd.Parameters.AddWithValueCheckNull("@EmployeeID", id),
               (dr) => employees = new Employees(dr,true));

                if (employees.EmployeeID >= 0)
                {
                    //employees.Password = null;
                    return employees;
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
        [HttpPost("Add")]
        public int add([FromBody] Employees employees)
        {
            try
            {
                
                string encypt = employees.Ecrypted(employees.Password);
                string sql = "INSERT INTO Employees(EmployeNumber,Username,Password,EmployeMail,EmployePhone,Permission,Titel,GroupID)OUTPUT INSERTED.EmployeeID VALUES(@EmployeNumber,@Username,@Password,@EmployeMail,@EmployePhone,@Permission,@Titel,@GroupID)";
                return DB.ExecuteCommand(sql, (cmd) => {
                    cmd.Parameters.AddWithValueCheckNull("@EmployeNumber", employees.EmployeNumber);
                    cmd.Parameters.AddWithValueCheckNull("@Username", employees.Username);
                    cmd.Parameters.AddWithValueCheckNull("@Password", encypt);
                    cmd.Parameters.AddWithValueCheckNull("@EmployeMail", employees.EmployeMail);
                    cmd.Parameters.AddWithValueCheckNull("@EmployePhone", employees.EmployePhone);
                    cmd.Parameters.AddWithValueCheckNull("@Permission", employees.Permission);
                    cmd.Parameters.AddWithValueCheckNull("@Titel", employees.Titel);
                    cmd.Parameters.AddWithValueCheckNull("@GroupID", employees.GroupID);
                }, true);
            }
            catch (Exception)
            {

                return -1;
            }


        }
        [HttpPost("update")]
        public int Update([FromBody] Employees employees)
        {
            
            string encypt = employees.Ecrypted(employees.Password);
            try
            {
                string sql = "UPDATE Employees SET EmployeNumber=@EmployeNumber,Username=" +
             "@Username,Password=@Password,EmployeMail=@EmployeMail,EmployePhone=@EmployePhone,Permission=@Permission,Titel=@Titel,GroupID=@GroupID where EmployeeID=@EmployeeID";
                return DB.ExecuteCommand(sql, (cmd) => {
                    cmd.Parameters.AddWithValueCheckNull("@EmployeeID", employees.EmployeeID);
                    cmd.Parameters.AddWithValueCheckNull("@EmployeNumber", employees.EmployeNumber);
                    cmd.Parameters.AddWithValueCheckNull("@Username", employees.Username);
                    cmd.Parameters.AddWithValueCheckNull("@Password", encypt);
                    cmd.Parameters.AddWithValueCheckNull("@EmployeMail", employees.EmployeMail);
                    cmd.Parameters.AddWithValueCheckNull("@EmployePhone", employees.EmployePhone);
                    cmd.Parameters.AddWithValueCheckNull("@Permission", employees.Permission);
                    cmd.Parameters.AddWithValueCheckNull("@Titel", employees.Titel);
                    cmd.Parameters.AddWithValueCheckNull("@GroupID", employees.GroupID);
                }, false);
            }
            catch (Exception)
            {

                return -1;
            }
         

        }
        [HttpGet("delete")]
        public bool Delete(int EmployeeID)
        {
            try
            {
                List<Employees> em = new List<Employees>();
                string sql = "SELECT  top 1 EmployeeID From Guarantees where EmployeeID=@EmployeeID";
                DB.PullFromBD(sql, (cmd) => cmd.Parameters.AddWithValueCheckNull("@EmployeeID", EmployeeID)

                 , (dr) => em.Add(new Employees()));


                if (em.Count > 0)
                {
                    return false;
                }
                else
                {
                    return DB.ExecuteCommand("DELETE FROM Employees WHERE EmployeeID = @EmployeeID",
                   (cmd) => cmd.Parameters.AddWithValue("@EmployeeID", EmployeeID)) == 1;
                }

            }
            catch (Exception)
            {

                return false;
            }
           
            
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;

namespace Angela
{
    public class Employees: IEncrypted
    {
        public int EmployeeID { get; set; }
        public string EmployeNumber { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string EmployeMail { get; set; }
        public string  EmployePhone { get; set; }
        public string Permission { get; set; }
        public string Titel { get; set; }
        public int GroupID { get; set; }

        public Employees(int employeeID, string employeNumber, string username, string employeMail, string employePhone, string permission, string titel, int groupID)
        {
            EmployeeID = employeeID;
            EmployeNumber = employeNumber;
            Username = username;
            EmployeMail = employeMail;
            EmployePhone = employePhone;
            Permission = permission;
            Titel = titel;
            GroupID = groupID;
        }

        public Employees(SqlDataReader dr,bool removepassword)
        {
            if (removepassword==false)
            {
                EmployeeID = dr.GetInt32(0);
                EmployeNumber = dr.GetString(1);
                Username = dr.GetString(2);
                Password = dr.GetString(3);
                EmployeMail = dr.GetString(4);
                EmployePhone = dr.GetString(5);
                Permission = dr.GetString(6);
                Titel = dr.GetString(7);
                GroupID = dr.GetInt32(8);
            }
            else
            {

                EmployeeID = dr.GetInt32(0);
                EmployeNumber = dr.GetString(1);
                Username = dr.GetString(2);

                EmployeMail = dr.GetString(3);
                EmployePhone = dr.GetString(4);
                Permission = dr.GetString(5);
                Titel = dr.GetString(6);
                GroupID = dr.GetInt32(7);

            }
             

          



        }
    
        public Employees()
        {

        }

     

        

        public  string Ecrypted(string str)
        {
            using (MD5CryptoServiceProvider md5Hasher = new MD5CryptoServiceProvider())
            {

                UTF8Encoding encoder = new UTF8Encoding();

                byte[] hashedBytes = md5Hasher.ComputeHash(encoder.GetBytes(str));
                return Convert.ToBase64String(hashedBytes);
            }
        }
    }
     
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace Angela
{
    public class Customer
    {
        public int CustomerID { get; set; }
        public int AcountNumber { get; set; }
        public string CompantName { get; set; }
        public string Contactman { get; set; }
        public string CompanyMail { get; set; }
        public string CompanyAddress { get; set; }
        public string CompanyPhone { get; set; }
        public string CompanyFax { get; set; }
        public int GroupID { get; set; }
        public int Guaranteecounter { get; set; }
        public decimal ExecutionCommission { get; set; }
        public decimal FormalCommission { get; set; }
        public decimal CreditsecurityCommission { get; set; }
        public decimal DocumentsCommission { get; set; }

        public Customer(int customerID, int acountNumber, string compantName, string contactman, string companyMail, string companyAddress, string companyPhone, string companyFax, int groupID ,int guaranteecounter, decimal executionCommission, decimal formalCommission, decimal creditsecurityCommission,decimal documentsCommission)
        {
            CustomerID = customerID;
            AcountNumber = acountNumber;
            CompantName = compantName;
            Contactman = contactman;
            CompanyMail = companyMail;
            CompanyAddress = companyAddress;
            CompanyPhone = companyPhone;
            CompanyFax = companyFax;
            GroupID = groupID;
            Guaranteecounter = guaranteecounter;
            ExecutionCommission = executionCommission;
            FormalCommission = formalCommission;
            CreditsecurityCommission = creditsecurityCommission;
            DocumentsCommission = documentsCommission;
    }

        public Customer(SqlDataReader dr)
        {
            CustomerID = dr.GetInt32(0);
            AcountNumber = dr.GetInt32(1);
            CompantName = dr.GetString(2);
            Contactman = dr.GetString(3);
            CompanyMail = dr.GetString(4);
            CompanyAddress = dr.GetString(5);
            CompanyPhone = dr.GetString(6);
            CompanyFax = dr.GetString(7);
            GroupID = dr.GetInt32(8);
            Guaranteecounter = dr.GetInt32(9);
            ExecutionCommission = dr.GetDecimal(10);
            FormalCommission = dr.GetDecimal(11);
            CreditsecurityCommission = dr.GetDecimal(12);
            DocumentsCommission = dr.GetDecimal(13);
           

        }
        public Customer()
        {

        }
    }
}

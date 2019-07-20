using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Text.Encodings;
using System.Globalization;

namespace Angela
{
    public class Guarantees
    {

        public int GuaranteeID { get; set; }
        public DateTime DateCreated { get; set; }
        public int EmployeeID { get; set; }
        public int CustomerID { get; set; }
        public string CastumerName { get; set; }
        public int GuaranteeNumber { get; set; }
        public int BeneficiaryID { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime ExpirationDate { get; set; }
        public string GuaranteeType { get; set; }
        public string Essence { get; set; }
        public string About { get; set; }
        public decimal Amount { get; set; }
        public decimal EstimatedAmount { get; set; }
        public decimal Commission { get; set; }
        public decimal CommissionPercent { get; set; }
        public decimal DocumentsCommission { get; set; }
        public decimal DocumentsCommissionPercent { get; set; }
        public string IndexType { get; set; }
        public DateTime IndexDate { get; set; }
        public string Currency { get; set; }
        public decimal CurrencyValue { get; set; }
        public string Status { get; set; }
        public string Note { get; set; }
        public DateTime SentTObusinessManager { get; set; }
        public DateTime SentTOcustomer { get; set; }
        public DateTime SentToManagerSignature { get; set; }
        public DateTime Starttreatment { get; set; }
        public DateTime Endoftreatment { get; set; }
        public string Extension { get; set; }
        
        public Guarantees(int guaranteeID, DateTime dateCreated, int employeeID, int customerID,string castumerName ,int guaranteeNumber, int beneficiaryID, DateTime startDate, DateTime expirationDate, string guaranteeType, string essence, string about, decimal amount, decimal estimatedAmount, decimal commission, decimal commissionPercent, decimal documentsCommission, decimal documentsCommissionPercent, string indexType, DateTime indexDate, string currency, decimal currencyValue, string status, string note, DateTime sentTObusinessManager, DateTime sentTOcustomer, DateTime sentToManagerSignature, DateTime starttreatment, DateTime endoftreatment, string extension)
        {
            GuaranteeID = guaranteeID;
            DateCreated = dateCreated;
            EmployeeID = employeeID;
            CustomerID = customerID;
            CastumerName = castumerName;
            GuaranteeNumber = guaranteeNumber;
            BeneficiaryID = beneficiaryID;
            StartDate = startDate;
            ExpirationDate = expirationDate;
            GuaranteeType = guaranteeType;
            Essence = essence;
            About = about;
            Amount = amount;
            EstimatedAmount = estimatedAmount;
            Commission = commission;
            CommissionPercent = commissionPercent;
            DocumentsCommission = documentsCommission;
            DocumentsCommissionPercent = documentsCommissionPercent;
            IndexType = indexType;
            IndexDate = indexDate;
            Currency = currency;
            CurrencyValue = currencyValue;
            Status = status;
            Note = note;
            SentTObusinessManager = sentTObusinessManager;
            SentTOcustomer = sentTOcustomer;
            SentToManagerSignature = sentToManagerSignature;
            Starttreatment = starttreatment;
            Endoftreatment = endoftreatment;
            Extension = extension;
        }

        public Guarantees(SqlDataReader dr)
        {
            GuaranteeID = dr.GetInt32(0);
            DateCreated = dr.GetDateTime(1);
            EmployeeID = dr.GetInt32(2);
            CustomerID = dr.GetInt32(3);
            CastumerName = dr.GetStringOrNull(4);
            GuaranteeNumber = dr.GetInt32(5);
            BeneficiaryID = dr.GetInt32(6);
            StartDate = dr.GetDateTime(7);
            ExpirationDate = dr.GetDateTime(8);
            GuaranteeType = dr.GetStringOrNull(9);
            Essence= dr.GetStringOrNull(10);
            About = dr.GetStringOrNull(11);
            Amount = dr.GetDecimal(12);
            EstimatedAmount = dr.GetDecimal(13);
            Commission = dr.GetDecimal(14);
            CommissionPercent = dr.GetDecimal(15);
            DocumentsCommission = dr.GetDecimal(16);
            DocumentsCommissionPercent = dr.GetDecimal(17);
            IndexType = dr.GetStringOrNull(18);
            IndexDate = dr.GetDateTime(19);
            Currency = dr.GetStringOrNull(20);
            CurrencyValue = dr.GetDecimal(21);
            Status = dr.GetStringOrNull(22);
            Note = dr.GetStringOrNull(23);
            SentTObusinessManager = dr.GetDateTime(24);
            SentTOcustomer = dr.GetDateTime(25);
            SentToManagerSignature = dr.GetDateTime(26);
            Starttreatment = dr.GetDateTime(27);
            Endoftreatment = dr.GetDateTime(28);
            Extension = dr.GetStringOrNull(29);
        }



        public Guarantees()
        {
           
        }



    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace Angela
{
    public class Beneficiary
    {
        public int beneficiaryID { get; set; }
        public string beneficiaryName { get; set; }
        public string beneficiaryMail { get; set; }
        public string beneficiaryPhone { get; set; }
        public string beneficiaryFax { get; set; }
        public string beneficiaryAddress { get; set; }

        public Beneficiary(int beneficiaryID, string beneficiaryName, string beneficiaryMail, string beneficiaryPhone, string beneficiaryFax, string beneficiaryAddress)
        {
            this.beneficiaryID = beneficiaryID;
            this.beneficiaryName = beneficiaryName;
            this.beneficiaryMail = beneficiaryMail;
            this.beneficiaryPhone = beneficiaryPhone;
            this.beneficiaryFax = beneficiaryFax;
            this.beneficiaryAddress = beneficiaryAddress;
        }

        public Beneficiary(SqlDataReader dr)
        {
            beneficiaryID = dr.GetInt32(0);
            beneficiaryName = dr.GetString(1);
            beneficiaryMail = dr.GetString(2);
            beneficiaryPhone = dr.GetString(3);
            beneficiaryFax = dr.GetString(4);
            beneficiaryAddress = dr.GetString(5);
        }
        public Beneficiary()
        {

        }
     
    }
}

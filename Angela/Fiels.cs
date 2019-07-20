using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace Angela
{
    public class Files
    {
        public int FileId { get; set; }
        public string Name { get; set; }
        public byte StoeredFile { get; set; }
        public DateTime FileDate { get; set; }
        public int GuaranteeID { get; set; }

        public Files(int fielId, string name, byte stoeredFiel, DateTime fielDate, int guaranteeID)
        {
            FileId = fielId;
            Name = name;
            StoeredFile = stoeredFiel;
            this.FileDate = fielDate;
            GuaranteeID = guaranteeID;
        }

        public Files(SqlDataReader dr)
        {
            FileId = dr.GetInt32(0);
            Name = dr.GetString(1);
            StoeredFile = dr.GetByte(2);
            FileDate = dr.GetDateTime(3);
            GuaranteeID = dr.GetInt32(4);

        }
        public Files()
        {

        }
    }
}

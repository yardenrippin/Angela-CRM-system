using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace Angela
{
    public class Groups
    {
        public int GroupID { get; set; }
        public string GroupName { get; set; }
        public string GroupMail { get; set; }
        public string GroupPhone { get; set; }
        public string GroupFax { get; set; }

        public Groups(int groupID, string groupName, string groupMail, string groupPhone, string groupFax)
        {
            GroupID = groupID;
            GroupName = groupName;
            GroupMail = groupMail;
            GroupPhone = groupPhone;
            GroupFax = groupFax;
        }

        public Groups(SqlDataReader dr)
        {
            GroupID = dr.GetInt32(0);
            GroupName = dr.GetString(1);
            GroupMail = dr.GetString(2);
            GroupPhone = dr.GetString(3);
            GroupFax = dr.GetString(4);
        }
        public Groups()
        {

        }
    }
}

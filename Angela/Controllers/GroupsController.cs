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
    public class GroupsController : ControllerBase
    {

        [HttpGet("getall")]
        public List<Groups> all()
        {

            try
            {
                List<Groups> groups = new List<Groups>();

                string sql = "SELECT GroupID, GroupName,GroupMail,GroupPhone,GroupFax FROM Groups";
                DB.PullFromBD(sql, null,
                    (dr) => groups.Add(new Groups(dr)));
                if (groups.Count > 0)
                {
                    return groups;
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
        [HttpGet("getgroup")]

        public List<Groups> groups(int groupid)
        {
            try
            {
                List<Groups> groups = new List<Groups>();

                string sql = "SELECT GroupID, GroupName,GroupMail,GroupPhone,GroupFax FROM Groups where GroupID=@groupid";
                DB.PullFromBD(sql, (cmd) => cmd.Parameters.AddWithValueCheckNull("@groupid", groupid),
                    (dr) => groups.Add(new Groups(dr)));
                if (groups.Count > 0)
                {
                    return groups;
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
        public int add([FromBody] Groups groups)
        {
            try
            {
                Groups group = new Groups();
              
                string sql = "INSERT INTO Groups(GroupName,GroupMail,GroupPhone,GroupFax)OUTPUT INSERTED.GroupID VALUES(@GroupName,@GroupMail,@GroupPhone,@GroupFax)";
                return DB.ExecuteCommand(sql, (cmd) => {
                    cmd.Parameters.AddWithValueCheckNull("@GroupName", groups.GroupName);
                    cmd.Parameters.AddWithValueCheckNull("@GroupMail", groups.GroupMail);
                    cmd.Parameters.AddWithValueCheckNull("@GroupPhone", groups.GroupPhone);
                    cmd.Parameters.AddWithValueCheckNull("@GroupFax", groups.GroupFax);
                  
                }, true);
            }
            catch (Exception)
            {

                return -1;
            }


        }
        [HttpPost("update")]
        public int Update([FromBody] Groups group)
        {
            Groups droups = new Groups();
            try
            {
                string sql = "UPDATE Groups SET GroupName=@GroupName,GroupMail=@GroupMail,GroupPhone=@GroupPhone,GroupFax=@GroupFax where GroupID=@GroupID";
                return DB.ExecuteCommand(sql, (cmd) => {
                    cmd.Parameters.AddWithValueCheckNull("@GroupID", group.GroupID);
                    cmd.Parameters.AddWithValueCheckNull("@GroupName", group.GroupName);
                    cmd.Parameters.AddWithValueCheckNull("@GroupMail", group.GroupMail);
                    cmd.Parameters.AddWithValueCheckNull("@GroupPhone", group.GroupPhone);
                    cmd.Parameters.AddWithValueCheckNull("@GroupFax", group.GroupFax);
                  
                }, false);
            }
            catch (Exception)
            {

                return -1;
            }


        }

    }
}
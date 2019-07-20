using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;

namespace Angela
{
    public static class DB
    {
        public static string connString; 

        public static void PullFromBD(string sql,Action<SqlCommand> configureCommand,Action<SqlDataReader> dowithEachRow)
        {
            using(SqlConnection conn=new SqlConnection(connString))
            {
                conn.Open();
                using(SqlCommand cmd=new SqlCommand(sql, conn))
                {
                    if (configureCommand!=null)
                    {
                        configureCommand(cmd);
                    }
                    using (SqlDataReader dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            dowithEachRow(dr);
                        }
                    }
                }
                
            }
        }
        public static int ExecuteCommand(string sql,Action<SqlCommand> configureCommand, bool shouldExecuteScalar = false)
        {
            int rowsAffected = 0;
            using(SqlConnection conn=new SqlConnection(connString))
            {
                conn.Open();
                using(SqlCommand cmd=new SqlCommand(sql, conn))
                {
                    if (configureCommand != null)
                        configureCommand(cmd);
                    rowsAffected = shouldExecuteScalar ?
                        Convert.ToInt32(cmd.ExecuteScalar()) : cmd.ExecuteNonQuery();
                }
            }
            return rowsAffected;
        }
        public static string GetStringOrNull(this SqlDataReader dr, int i)
        {
            if (dr.IsDBNull(i))
                return null;
            return dr.GetString(i);
        }

        public static void AddWithValueCheckNull(this SqlParameterCollection parameters, string parameterName, object value)
        {
            parameters.AddWithValue(parameterName, value == null ? DBNull.Value : value);
        }


    }


}



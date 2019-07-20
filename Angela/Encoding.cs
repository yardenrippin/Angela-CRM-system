using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.Text;

namespace Angela
{
    public class Encodings
    {
        public static string hebrewEncoding( ref string str)
        {
            Encoding.Convert(Encoding.Default, Encoding.UTF8, Encoding.Default.GetBytes(str));

            return str;
        }
    }
}

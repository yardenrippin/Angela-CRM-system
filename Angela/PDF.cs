using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IronPdf;
using System.IO;

namespace Angela
    
{

    public class PDF
    {

        public string Name { get; set; }
        public string HTML { get; set; }
        public string type { get; set; }

        public PDF(string name, string hTML, string type)
        {
            Name = name;
            HTML = hTML;
            this.type = type;
        }

        public PDF()
        {

        }


        public string creat()
        {

            try
            {
                string path = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);
                var Renderer = new IronPdf.HtmlToPdf();
                var PDF = Renderer.RenderHtmlAsPdf(this.HTML);
                using (MemoryStream ms = new MemoryStream(PDF.BinaryData))
                {
                    FileStream file = new FileStream(path +@"\" + this.Name +this.type, FileMode.Create, FileAccess.Write);
                    string myfile = path + @"\" + this.Name  +this.type;
                    ms.WriteTo(file);
                    file.Close();
                    ms.Close();
                    return myfile;
                }
               
                
            }
            catch (Exception)
            {

                return null;
            }

        }
    }
}

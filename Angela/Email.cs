using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Text.Encodings;
using System.Text;
using System.Net.Mail;
using static System.Uri;
using Outlook = Microsoft.Office.Interop.Outlook;
using static System.Net.Mime.MediaTypeNames;
using IronPdf;
using System.IO;
using System.Diagnostics;

namespace Angela
{
    
    public class Email
    {
        public string from { get; set; }
        public string to { get; set; }
        public string body { get; set; }
        public string subject { get; set; }
        public string attachment { get; set; }

        public Email(string from, string to, string body, string subject, string attachment)
        {
            this.from = from;
            this.to = to;
            this.body = body;
            this.subject = subject;
            this.attachment = attachment;
        }

        public Email()
        {

        }
        
      
        public bool open()
        {
            
            try
            {
                Outlook.Application objApp = new Outlook.Application();
                Outlook.MailItem mail = null;
                mail = (Outlook.MailItem)objApp.CreateItem(Outlook.OlItemType.olMailItem);

                mail.To = this.to;
                mail.Subject = this.subject;
                mail.Body = this.body;
                if (!String.IsNullOrEmpty(this.attachment))
                {
                    mail.Attachments.Add((object)this.attachment, Outlook.OlAttachmentType.olEmbeddeditem, 1, (object)this.subject);
                }
               

                mail.Display();
                return true;
            }
            catch (Exception)
            {
                return false;
            }

        }


    }
    }


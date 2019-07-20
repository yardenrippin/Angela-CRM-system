using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Text;

namespace Angela.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TempdataController : ControllerBase
    {

        static List<Tempdata> tempdatas=new List<Tempdata>();

        [HttpGet("getall")]
        public List<Tempdata> gatall()
        {
            List<Tempdata> list = new List<Tempdata>();
            list = tempdatas;
            Tempdata.Date_sort(list);
            return list;
        }

        [HttpGet("getbyemployee")]
        public List<Tempdata> Temp(int employeeID)
        {

           
                List<Tempdata> list=new List<Tempdata>();
            try
            {
                for (int i = 0; i < tempdatas.Count; i++)
                {
                    if (tempdatas[i].Guarantee.EmployeeID == employeeID)
                    {
                        list.Add(tempdatas[i]);
                    }
                }
                Tempdata.Date_sort(list);
                return list;
            }
            catch (Exception)
            {

                return null;
            }
         
        }
      
      
        [HttpPost("Add")]
        public Tempdata Add([FromBody] Tempdata obj)
        {
            try
            {
                int id;
                Tempdata tempdata;
                Guarantees guarantees;
                Customer customer;
                Employees employees;
                Beneficiary beneficiary;
                Groups groups;

                



                id = Tempdata.Binary(tempdatas, obj.Guarantee.GuaranteeID, 0, tempdatas.Count - 1);
                if (id >= 0)
                {
                    if (tempdatas[id].Guarantee.GuaranteeID == obj.Guarantee.GuaranteeID)
                    {
                        return tempdatas[id];
                    }
                }

             
                tempdata = new Tempdata(guarantees = new Guarantees(obj.Guarantee.GuaranteeID, obj.Guarantee.DateCreated, obj.Guarantee.EmployeeID, obj.Guarantee.CustomerID, obj.Guarantee.CastumerName, obj.Guarantee.GuaranteeNumber, obj.Guarantee.BeneficiaryID, obj.Guarantee.StartDate, obj.Guarantee.ExpirationDate, obj.Guarantee.GuaranteeType, obj.Guarantee.Essence,
                        obj.Guarantee.About, obj.Guarantee.Amount, obj.Guarantee.EstimatedAmount, obj.Guarantee.Commission, obj.Guarantee.CommissionPercent, obj.Guarantee.DocumentsCommission, obj.Guarantee.DocumentsCommissionPercent, obj.Guarantee.IndexType, obj.Guarantee.IndexDate,
                        obj.Guarantee.Currency, obj.Guarantee.CurrencyValue, obj.Guarantee.Status, obj.Guarantee.Note, obj.Guarantee.SentTObusinessManager, obj.Guarantee.SentTOcustomer, obj.Guarantee.SentToManagerSignature, obj.Guarantee.Starttreatment, obj.Guarantee.Endoftreatment, obj.Guarantee.Extension),
                        customer = new Customer(obj.Customer.CustomerID, obj.Customer.AcountNumber, obj.Customer.CompantName, obj.Customer.Contactman, obj.Customer.CompanyMail, obj.Customer.CompanyAddress, obj.Customer.CompanyPhone, obj.Customer.CompanyFax, obj.Customer.GroupID, obj.Customer.Guaranteecounter, obj.Customer.ExecutionCommission, obj.Customer.FormalCommission, obj.Customer.CreditsecurityCommission, obj.Customer.DocumentsCommission),
                        employees = new Employees(obj.Employees.EmployeeID, obj.Employees.EmployeNumber, obj.Employees.Username, obj.Employees.EmployeMail, obj.Employees.EmployePhone, obj.Employees.Permission, obj.Employees.Titel, obj.Employees.GroupID),
                        beneficiary = new Beneficiary(obj.Beneficiary.beneficiaryID, obj.Beneficiary.beneficiaryName, obj.Beneficiary.beneficiaryMail, obj.Beneficiary.beneficiaryPhone, obj.Beneficiary.beneficiaryFax, obj.Beneficiary.beneficiaryAddress),
                        groups = new Groups(obj.group.GroupID, obj.group.GroupName, obj.group.GroupMail, obj.group.GroupPhone, obj.group.GroupFax));
                        

                tempdatas.Add(tempdata);
                Tempdata.Bubbl(tempdatas);
                return tempdata;
            }
            catch (Exception)
            {

                return null;
            }
           
        }

      


        [HttpPost("update")]
        public bool Update([FromBody] Tempdata obj)
        {
            try
            {
                string Confirmed = "מאושר";
                string Cancel = "מבוטל";




                int i;
                i = Tempdata.Binary(tempdatas, obj.Guarantee.GuaranteeID, 0, tempdatas.Count - 1);
                if (i < 0)
                    return false;
                
                    if (tempdatas[i].Guarantee.GuaranteeID == obj.Guarantee.GuaranteeID)
                    {
                        tempdatas[i] = obj;

                        if (tempdatas[i].Guarantee.Status == Confirmed || tempdatas[i].Guarantee.Status == Cancel)
                        {
                            string sql = "UPDATE Guarantees SET  DateCreated=@DateCreated,EmployeeID=@EmployeeID,CustomerID=@CustomerID,CastumerName=@CastumerName,GuaranteeNumber=@GuaranteeNumber,BeneficiaryID=@BeneficiaryID,StartDate=@StartDate,expirationDate=@expirationDate,GuaranteeType=@GuaranteeType,Essence=@Essence,About=@About,Amount=@Amount,EstimatedAmount=@EstimatedAmount," +
                    "Commission=@Commission,CommissionPercent=@CommissionPercent,DocumentsCommission=@DocumentsCommission,DocumentsCommissionPercent=@DocumentsCommissionPercent,IndexType=@IndexType,IndexDate=@IndexDate,Currency=@Currency,CurrencyValue=@CurrencyValue,Status=@Status,Note=@Note,SentTObusinessManager=@SentTObusinessManager," +
                    "SentTOcustomer=@SentTOcustomer,SentToManagerSignature=@SentToManagerSignature,Starttreatment=@Starttreatment,Endoftreatment=@Endoftreatment,Extension=@Extension where GuaranteeID=@GuaranteeID ";
                            DB.ExecuteCommand(sql, (cmd) => {

                                cmd.Parameters.AddWithValueCheckNull("@GuaranteeID", obj.Guarantee.GuaranteeID);
                                cmd.Parameters.AddWithValueCheckNull("@DateCreated", obj.Guarantee.DateCreated);
                                cmd.Parameters.AddWithValueCheckNull("@EmployeeID", obj.Guarantee.EmployeeID);
                                cmd.Parameters.AddWithValueCheckNull("@CustomerID", obj.Guarantee.CustomerID);
                                cmd.Parameters.AddWithValueCheckNull("@CastumerName", obj.Guarantee.CastumerName);
                                cmd.Parameters.AddWithValueCheckNull("@GuaranteeNumber", obj.Guarantee.GuaranteeNumber);
                                cmd.Parameters.AddWithValueCheckNull("@BeneficiaryID", obj.Guarantee.BeneficiaryID);
                                cmd.Parameters.AddWithValueCheckNull("@StartDate", obj.Guarantee.StartDate);
                                cmd.Parameters.AddWithValueCheckNull("@expirationDate", obj.Guarantee.ExpirationDate);
                                cmd.Parameters.AddWithValueCheckNull("@GuaranteeType", obj.Guarantee.GuaranteeType);
                                cmd.Parameters.AddWithValueCheckNull("@Essence", obj.Guarantee.Essence);
                                cmd.Parameters.AddWithValueCheckNull("@About", obj.Guarantee.About);
                                cmd.Parameters.AddWithValueCheckNull("@Amount", obj.Guarantee.Amount);
                                cmd.Parameters.AddWithValueCheckNull("@EstimatedAmount", obj.Guarantee.EstimatedAmount);
                                cmd.Parameters.AddWithValueCheckNull("@Commission", obj.Guarantee.Commission);
                                cmd.Parameters.AddWithValueCheckNull("@CommissionPercent", obj.Guarantee.CommissionPercent);
                                cmd.Parameters.AddWithValueCheckNull("@DocumentsCommission", obj.Guarantee.DocumentsCommission);
                                cmd.Parameters.AddWithValueCheckNull("@DocumentsCommissionPercent", obj.Guarantee.DocumentsCommissionPercent);
                                cmd.Parameters.AddWithValueCheckNull("@IndexType", obj.Guarantee.IndexType);
                                cmd.Parameters.AddWithValueCheckNull("@IndexDate", obj.Guarantee.IndexDate);
                                cmd.Parameters.AddWithValueCheckNull("@Currency", obj.Guarantee.Currency);
                                cmd.Parameters.AddWithValueCheckNull("@CurrencyValue", obj.Guarantee.CurrencyValue);
                                cmd.Parameters.AddWithValueCheckNull("@Status", obj.Guarantee.Status);
                                cmd.Parameters.AddWithValueCheckNull("@Note", obj.Guarantee.Note);
                                cmd.Parameters.AddWithValueCheckNull("@SentTObusinessManager", obj.Guarantee.SentTObusinessManager);
                                cmd.Parameters.AddWithValueCheckNull("@SentTOcustomer", obj.Guarantee.SentTOcustomer);
                                cmd.Parameters.AddWithValueCheckNull("@SentToManagerSignature", obj.Guarantee.SentToManagerSignature);
                                cmd.Parameters.AddWithValueCheckNull("@Starttreatment", obj.Guarantee.Starttreatment);
                                cmd.Parameters.AddWithValueCheckNull("@Endoftreatment", obj.Guarantee.Endoftreatment);
                                cmd.Parameters.AddWithValueCheckNull("@Extension", obj.Guarantee.Extension);


                            });

                            tempdatas.Remove(tempdatas[i]);
                        }

                        return true;
                   


            }
                return false;
            }
            catch (Exception)
            {

                return false;
            }
         

        }
        //better than holding list and sort list of gruops 
        [HttpPost("updategroup")]
        public bool updategroup(Groups groups)
        {
            try
            {
                for (int i = 0; i < tempdatas.Count; i++)
                {
                    if (tempdatas[i].group.GroupID== groups.GroupID)
                    {
                        tempdatas[i].group = groups;
                        
                    }
                }
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }

        //better than holding list and sort list of customer 
        [HttpPost("updatecuscustomer")]
        public bool updatecuscustomer(Customer customer)
        {
                 try
            {
                for (int i = 0; i < tempdatas.Count; i++)
                {
                    if (tempdatas[i].Customer.CustomerID== customer.CustomerID)
                    {
                        tempdatas[i].Customer = customer;
                        
                    }
                }
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }
        //better than holding list and sort list of employees
        [HttpPost("updateemployee")]
        public bool updateemployee(Employees employees )
        {
            employees.Password = null;
            try
            {
                for (int i = 0; i < tempdatas.Count; i++)
                {
                    if (tempdatas[i].Employees.EmployeeID == employees.EmployeeID)
                    {
                        
                        tempdatas[i].Employees = employees;

                    }
                }
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }
    }
}
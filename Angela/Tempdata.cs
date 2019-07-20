using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Text.Encodings;
using System.Text;
using System.Net.Mail;
using static System.Net.Mime.MediaTypeNames;




namespace Angela
{
    public class Tempdata : IDisposable
    {

        public Guarantees Guarantee { get; set; }
        public Customer Customer { get; set; }
        public Employees Employees { get; set; }
        public Beneficiary Beneficiary { get; set; }
        public Groups group { get; set; }
        public Files Files { get; set; }


        public Tempdata(Guarantees Guarantee, Customer Customer, Employees Employees, Beneficiary Beneficiary, Groups group)
        {

            this.Guarantee = Guarantee;
            this.Customer = Customer;
            this.Employees = Employees;
            this.Beneficiary = Beneficiary;
            this.group = group;
            

        }
        public Tempdata()
        {

        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }

        public static List<Tempdata> Date_sort(List<Tempdata> tempdata)
        {

            DateTime date = DateTime.Today;
            int j = -1;
            Object temp;

            for (int i = 0; i < tempdata.Count; i++)
            {
                if (tempdata[i].Guarantee.Extension == "הקמה")
                {
                    j++;
                    temp = tempdata[j];
                    tempdata[j] = tempdata[i];
                    tempdata[i] = (Tempdata)temp;
                }

            }
            buabulsort(tempdata, j + 1);
            return tempdata;
        }
        public static void Bubbl(List<Tempdata> arr)
        {
            bool isSorted = false;
            int upTo = arr.Count - 1;
            while (!isSorted)
            {
                isSorted = true;
                for (int i = 0; i < upTo; i++)
                {
                    if (arr[i].Guarantee.GuaranteeID > arr[i + 1].Guarantee.GuaranteeID)
                    {
                        object temp = arr[i];
                        arr[i] = arr[i + 1];
                        arr[i + 1] =(Tempdata) temp;
                        isSorted = false;
                    }
                }
                upTo--;
            }
        }
        public static void buabulsort(List<Tempdata> tempdata, int point)
        {
            if (point < 0)
            {
                point = 0;
            }

            int r = tempdata.Count - 1;

            DateTime dateTime = DateTime.Today;
            bool isSorted = false;
            while (!isSorted)
            {
                isSorted = true;
                for (int i = point; i < r; i++)
                {
                    if (dateTime.Ticks - tempdata[i].Guarantee.ExpirationDate.Ticks < dateTime.Ticks - tempdata[i + 1].Guarantee.ExpirationDate.Ticks)
                    {
                        object temp = tempdata[i];
                        tempdata[i] = tempdata[i + 1];
                        tempdata[i + 1] = (Tempdata)temp;
                        isSorted = false;
                    }

                }
                r--;
            }



        }
        public static int Binary(List<Tempdata> arr, int x, int l, int r)
        {
            if (r >= l)
            {
                //int mid = (r + l) / 2;
                int mid = l + (r - l) / 2;
                if (arr[mid].Guarantee.GuaranteeID == x)
                    return mid;
                if (arr[mid].Guarantee.GuaranteeID > x)
                    return Binary(arr, x, l, mid - 1);
                return Binary(arr, x, mid + 1, r);
            }
            return -1;
        }


        public static void InsertionSort(List<Tempdata> arr)
        {
            int n = arr.Count;
            for (int i = 1; i < n; i++)
            {
                int x = arr[i].Guarantee.GuaranteeID;
                int j = i - 1;
                while (j >= 0 && arr[j].Guarantee.GuaranteeID > x)
                {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1].Guarantee.GuaranteeID = x;
            }


        }

        

    }

    }


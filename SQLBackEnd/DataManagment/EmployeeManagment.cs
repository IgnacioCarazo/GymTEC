using BackEndModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SQLBackEnd.DataManagment
{
    public class EmployeeManagment
    {
        public static bool logAuthorization(Employee emplog, string password)
        {
            if (emplog.password == password)
            {
                return true;
            }
            return false;
        }
    }
}

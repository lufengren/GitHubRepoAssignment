using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using viewModel.Models;

namespace viewModel.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            User singleuser=new User(){
                FirstName="Kali",
                LastName="Kay"
            };
            return View(singleuser);
        }

        

        
        
    }
}

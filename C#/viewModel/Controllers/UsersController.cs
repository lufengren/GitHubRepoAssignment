using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using viewModel.Models;

namespace viewModel.Controllers
{
    public class UsersController : Controller
    {
        public IActionResult Index()
        {
            List<User> users=new List<User>{
                new User{FirstName="Jhon",LastName="Snow"},
                new User{FirstName="Ads",LastName="Zsd"},
                new User{FirstName="Rtds",LastName="Zsd"},
                new User{FirstName="Werds",LastName="Zsd"}
            };
            // User newuser=new User(){
            //     FirstName="Test",
            //     LastName="test"
            // };
            return View(users);
        }
    }
}

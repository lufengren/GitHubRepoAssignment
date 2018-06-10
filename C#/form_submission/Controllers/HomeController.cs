using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using form_submission.Models;

namespace form_submission.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(User user)
        {
        if(ModelState.IsValid)
        {
            return Content("Successfully registered");
        }
        else
        {
            // Oh no!  We need to return a ViewResponse to preserve the ModelState, and the errors it now contains!
            return View(user);
        }
    }


            public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

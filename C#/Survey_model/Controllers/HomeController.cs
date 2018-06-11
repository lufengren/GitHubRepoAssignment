using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Survey_model.Models;

namespace Survey_model.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(Ninja newninja){
            if(ModelState.IsValid){
                return View("result",newninja);
            }else{
                return View(newninja);
            }
        }

        // [HttpPost]
        // public IActionResult result(Ninja newninja)
        // {
        //     if(ModelState.IsValid){
        //         Console.WriteLine("success");
        //         return View(newninja);
        //     }
        //     else{
        //         Console.WriteLine("wrong");
        //         return View("Index",newninja);
        //     }
        // }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

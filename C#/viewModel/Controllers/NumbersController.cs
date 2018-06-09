using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using viewModel.Models;

namespace viewModel.Controllers
{
    public class NumbersController : Controller
    {
        public IActionResult Index()
        {
            int[] numbers=new int[]{
                1,2,3,4,5
            };
            return View(numbers);
        }

        

        
        
    }
}

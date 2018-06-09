using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using viewModel.Models;

namespace viewModel.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            string article="werewrewrwerwerwerwerwdsfdsfdsfsdfdsfdsfsd";
            return View("index",article);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using lost_in_wood.Models;
using lost_in_wood.Factory;

namespace lost_in_wood.Controllers
{
    public class HomeController : Controller
    {
        private readonly WoodFactory woodFactory;
        public HomeController(){
            woodFactory=new WoodFactory();
        }
        public IActionResult Index()
        {
            ViewBag.AllResult=woodFactory.FindAll();
            return View();
        }
        [HttpGet]
        [Route("detail/{id}")]
        public IActionResult Detail(int id)
        {
            ViewBag.FindOne=woodFactory.FindByID(id);
            return View();
        }

        [HttpGet]
        [Route("NewTrail")]
        public IActionResult NewTrail()
        {
            return View();
        }
        
        [HttpPost]
        [Route("NewTrail")]
        public IActionResult NewTrail(lostinwood newone)
        {
            if(ModelState.IsValid){
                woodFactory.Add(newone);
                return RedirectToAction("Index");
            }
            else{
                return View(newone);
            }
        }
        

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

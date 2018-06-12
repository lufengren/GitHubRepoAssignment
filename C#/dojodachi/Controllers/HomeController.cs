using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dojodachi.Models;
using Microsoft.AspNetCore.Http;

namespace dojodachi.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            Dojo dachi =new Dojo();
            if(HttpContext.Session.GetInt32("fullness")==null){
            HttpContext.Session.SetInt32("fullness", dachi.Fullness);
            HttpContext.Session.SetInt32("happyness", dachi.Happyness);
            HttpContext.Session.SetInt32("energy", dachi.Energy);
            HttpContext.Session.SetInt32("meals", dachi.Meals);
            HttpContext.Session.SetString("message","");
            }
            
            ViewBag.fullness=HttpContext.Session.GetInt32("fullness");
            ViewBag.happyness=HttpContext.Session.GetInt32("happyness");
            ViewBag.energy=HttpContext.Session.GetInt32("energy");
            ViewBag.meals=HttpContext.Session.GetInt32("meals");
            ViewBag.message=HttpContext.Session.GetString("message");
            return View();
        }

        [HttpGet]
        [Route("feed")]
        public IActionResult feed(){
            int? meal=HttpContext.Session.GetInt32("meals");
            if(meal>0){
                Console.WriteLine("success");
                Random ranfullness= new Random();
                meal--;
                HttpContext.Session.SetInt32("meals",meal.Value);
                int? fullness=HttpContext.Session.GetInt32("fullness");
                fullness+=ranfullness.Next(5,10);
                HttpContext.Session.SetInt32("fullness",fullness.Value);
                string temp=$"Meal-1,Fullness+{ranfullness.Next(5,10)}";
                HttpContext.Session.SetString("message",temp);
                return RedirectToAction("Index");
            }else{
                Console.WriteLine("can not feed");
                return View();
            }
        }

        [HttpGet]
        [Route("play")]
        public IActionResult play(){
            Random ranhappyness= new Random();
            int? energy=HttpContext.Session.GetInt32("energy");
            energy-=5;
            HttpContext.Session.SetInt32("energy", energy.Value);
            int? happyness=HttpContext.Session.GetInt32("happyness");
            happyness+=ranhappyness.Next(5,10);
            HttpContext.Session.SetInt32("happyness", happyness.Value);
            string temp=$"Energy-5,Happyness+{ranhappyness.Next(5,10)}";
            HttpContext.Session.SetString("message",temp);
            return RedirectToAction("Index");
        }
        
        [HttpGet]
        [Route("work")]
        public IActionResult work(){
            Random ranmeals= new Random();
            int? energy=HttpContext.Session.GetInt32("energy");
            energy-=5;
            HttpContext.Session.SetInt32("energy", energy.Value);
            int? meals=HttpContext.Session.GetInt32("meals");
            meals+=ranmeals.Next(1,3);
            HttpContext.Session.SetInt32("meals", meals.Value);
            string temp=$"Energy-5,meals+{ranmeals.Next(1,3)}";
            HttpContext.Session.SetString("message",temp);
            return RedirectToAction("Index");
        }

        [HttpGet]
        [Route("sleep")]
        public IActionResult sleep(){
            int? energy=HttpContext.Session.GetInt32("energy");
            energy+=15;
            HttpContext.Session.SetInt32("energy", energy.Value);
            int? happyness=HttpContext.Session.GetInt32("happyness");
            happyness-=5;
            HttpContext.Session.SetInt32("happyness", happyness.Value);
            int? fullness=HttpContext.Session.GetInt32("fullness");
            fullness-=5;
            HttpContext.Session.SetInt32("fullness",fullness.Value);
            string temp="Energy+15,Fullness-5,Happyness-5";
            HttpContext.Session.SetString("message",temp);
            return RedirectToAction("Index");
        }
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

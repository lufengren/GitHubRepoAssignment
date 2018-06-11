using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using quoting_dojo.Models;
using DbConnection;

namespace quoting_dojo.Controllers
{
    public class HomeController : Controller
    {
        // private Dbconnector connector;
        // public HomeController(){
        //     connector=new Dbconnector();
        // }
        
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("quotes")]
        public IActionResult quotes(string name,string quote)
        {
            Console.WriteLine(name);
            Console.WriteLine(quote);
            string query=$"INSERT INTO quotes (name,quote) VALUES ('{name}','{quote}')";
            Dbconnector.Execute(query);
            return RedirectToAction("Index");
        }
        
        [HttpGet]
        [Route("quotes")]
        public IActionResult quotes()
        {
            List<Dictionary<string, object>> AllQuotes = Dbconnector.Query("SELECT * FROM quotes");
            ViewBag.AllQuotes=AllQuotes;
            return View();
        }


        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

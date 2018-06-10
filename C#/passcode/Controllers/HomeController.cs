using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using passcode.Models;
using Microsoft.AspNetCore.Http;

namespace passcode.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            int? count = HttpContext.Session.GetInt32("count");
            if(!count.HasValue){
                HttpContext.Session.SetInt32("count", 1);
                count=1;
            }else{
                count++;
                HttpContext.Session.SetInt32("count", count.Value);
            }
            
            ViewBag.count=count;
            string[] pool = new string[] {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"};
            Random rand = new Random();
            // string[] random=new string[14];
            string result = string.Empty;
            for(int i=0;i<14;i++){
                int index=rand.Next(0,pool.Length);
                result+=pool[index];
            }
            
            ViewBag.result=result;
            return View();
        }

        

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

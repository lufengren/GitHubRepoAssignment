using System;
using System.Collections.Generic;
using System.Diagnostics;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Restauranter.Models;

namespace Restauranter.Controllers
{
    public class HomeController : Controller
    {
        private restContext _context;
        public HomeController(restContext context){
            _context=context;
        }
        public IActionResult Index()
        {
            return View();
        }
        // public IActionResult Index(review review)
        // {
        //     List<review> results = _context.review.ToList();
        //     ViewBag.results=results;
        //     return View();
        // }
        [HttpGet]
        [Route("reviews")]
        public IActionResult reviews()
        {
            List<reviews> results = _context.reviews.OrderByDescending(x => x.created_at).ToList();
            ViewBag.results=results;
            return View();
        }

        [HttpPost]
        public IActionResult Index(reviews newreview){
            if(ModelState.IsValid){
                _context.Add(newreview);
                _context.SaveChanges();
                return RedirectToAction("reviews");
            }
            else{
                return View(newreview);
            }
            
        }
        

        
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

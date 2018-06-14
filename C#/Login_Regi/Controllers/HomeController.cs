using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Login_Regi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace Login_Regi.Controllers
{
    public class HomeController : Controller
    {
        private logregContext _context;
 
        public HomeController(logregContext context)
        {
            _context = context;
        }
        
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(logreg newuser,string confirmpass){
            if(newuser.password==confirmpass){
                if(ModelState.IsValid)
                {
                    logreg result=_context.logreg.SingleOrDefault(logreg=>logreg.email==newuser.email);
                    if(result==null){
                        PasswordHasher<logreg> Hasher = new PasswordHasher<logreg>();
                        newuser.password = Hasher.HashPassword(newuser, newuser.password);
                        _context.Add(newuser);
                        _context.SaveChanges();
                        return RedirectToAction("success");
                    }else{
                        ViewBag.err="Email already exists";
                        return View(newuser);
                    }
                }else{
                    return View(newuser);
                }
            }else{
                ViewBag.err="Confirm password did not match";
                return View(newuser);
            }
        }

        [HttpGet]
        [Route("success")]
        public IActionResult success(){
            return Content("register or login success");
        }

        [HttpGet]
        [Route("login")]
        public IActionResult login(){
            return View();
        }
        
        [HttpPost]
        [Route("login")]
        public IActionResult login(login user){
            if(ModelState.IsValid){
                logreg result=_context.logreg.SingleOrDefault(logreg=>logreg.email==user.email);
                if(result!=null){
                    var Hasher = new PasswordHasher<logreg>();
                    if(0 != Hasher.VerifyHashedPassword(result, result.password, user.password))
                    {
                        return RedirectToAction("success");
                    }else{
                        ViewBag.err="Password did not match";
                        return View(user);
                    }
                }
                else{
                    ViewBag.err="no match email";
                    return View(user);
                }
            }else{
                return View(user);
            }
        }
            
        

        
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

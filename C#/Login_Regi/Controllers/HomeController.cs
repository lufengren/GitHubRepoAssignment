using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Login_Regi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

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
            //Console.WriteLine(user);
            if(ModelState.IsValid){
                logreg result=_context.logreg.SingleOrDefault(logreg=>logreg.email==user.email);
                //Console.WriteLine(result.email,result.password);
                if(result!=null){
                    var Hasher = new PasswordHasher<logreg>();
                    if(0 != Hasher.VerifyHashedPassword(result, result.password, user.password))
                    {
                        //after login,save user id to session
                        //int? sessionid = HttpContext.Session.GetInt32("userid");
                        //string sessionname=HttpContext.Session.GetString("name");
                        //if(!sessionid.HasValue){
                            HttpContext.Session.SetInt32("userid", result.id);
                            
                            HttpContext.Session.SetInt32("balance", result.balance);
                        //}
                        //if(sessionname==null){
                            HttpContext.Session.SetString("name", result.firstname);
                        //}
                        return RedirectToAction("check");
                        //return RedirectToAction("success");
                        
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

        [HttpGet]
        [Route("check")]
        public IActionResult check(){
            ViewBag.balance=HttpContext.Session.GetInt32("balance").Value;
            Console.WriteLine(HttpContext.Session.GetInt32("balance").Value);
            ViewBag.name=HttpContext.Session.GetString("name");
            int? sessionid=HttpContext.Session.GetInt32("userid");
            
            List<log> logs=_context.log.Where(log =>log.userid==sessionid.Value).OrderByDescending(log => log.created_at).ToList();
            ViewBag.success=logs;
            return View();
        }

        [HttpPost]
        [Route("transaction")]
        public IActionResult transaction(int selection){
            Console.WriteLine(selection);
            int? balance=HttpContext.Session.GetInt32("balance");
            Console.WriteLine(balance.Value);
            if((selection<0)&&(balance.Value-selection<0)){
                return View();
            }else{
                log newlog=new log{
                    transaction=selection,
                    userid=HttpContext.Session.GetInt32("userid").Value,
                    created_at=DateTime.Now
                };
                _context.Add(newlog);
                _context.SaveChanges();
                logreg RetrievedUser = _context.logreg.SingleOrDefault(logreg => logreg.id == HttpContext.Session.GetInt32("userid").Value);
                RetrievedUser.balance = balance.Value+selection;
                _context.SaveChanges();
                HttpContext.Session.SetInt32("balance",RetrievedUser.balance);
                return RedirectToAction("check");
            }
        }
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

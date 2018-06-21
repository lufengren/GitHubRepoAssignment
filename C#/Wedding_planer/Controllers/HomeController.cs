using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Wedding_planer.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace Wedding_planer.Controllers
{
    public class HomeController : Controller
    {
        
        private weddingContext _context;
        public HomeController(weddingContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(users newuser,string confirmpass){
            if(newuser.password==confirmpass){
                if(ModelState.IsValid)
                {
                    users result=_context.users.SingleOrDefault(users=>users.email==newuser.email);
                    if(result==null){
                        PasswordHasher<users> Hasher = new PasswordHasher<users>();
                        newuser.password = Hasher.HashPassword(newuser, newuser.password);
                        _context.Add(newuser);
                        _context.SaveChanges();
                        //HttpContext.Session.SetInt32("userid", result.UserId);
                        HttpContext.Session.SetString("username",newuser.firstname);
                        ViewBag.msg="Please login";
                        return View();
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
        
        
        [HttpPost]
        [Route("login")]
        public IActionResult login(string email,string password){
            users result=_context.users.SingleOrDefault(users=>users.email==email);
            if(result!=null){
                    var Hasher = new PasswordHasher<users>();
                    if(0 != Hasher.VerifyHashedPassword(result, result.password, password))
                    {
                        HttpContext.Session.SetInt32("userid", result.UserId);
                        HttpContext.Session.SetString("username", result.firstname);
                        return RedirectToAction("dashboard");
                    }
                    else{
                        ViewBag.mssg="Password did not match";
                        return View("Index");
                    }
                }
                else{
                    ViewBag.mssg="no match email";
                    return View("Index");
                }
            }

        [HttpGet]
        [Route("dashboard")]
        public IActionResult dashboard(){
            List<weddings> allweddings=_context.weddings
            .Include(x=>x.user)
            .Include(y=>y.guests)
            .ThenInclude(z=>z.user)
            .ToList();
            ViewBag.userid=HttpContext.Session.GetInt32("userid").Value;
            ViewBag.allweddings=allweddings;
            return View();
        }

        [HttpGet]
        [Route("detail/{id}")]
        public IActionResult detail(int id){
            weddings wedding=_context.weddings
            .Include(x=>x.guests)
            .ThenInclude(y=>y.user)
            .SingleOrDefault(y=>y.weddingid==id);
            ViewBag.wedding=wedding;
            return View();
        }

        [HttpGet]
        [Route("cancel/{id}")]
        public IActionResult cancel(int id){
            int userid=HttpContext.Session.GetInt32("userid").Value;
            guests RetrievedUser = _context.guests.SingleOrDefault(w => w.UserId == userid && w.weddingid==id);
            _context.guests.Remove(RetrievedUser);
            _context.SaveChanges();
            return RedirectToAction("dashboard");
        }

        [HttpGet]
        [Route("attend/{id}")]
        public IActionResult attend(int id){
            guests newguest=new guests{
                UserId=HttpContext.Session.GetInt32("userid").Value,
                weddingid=id
            };
            _context.Add(newguest);
            _context.SaveChanges();
            return RedirectToAction("dashboard");
        }

        [HttpGet]
        [Route("delete/{id}")]
        public IActionResult delete(int id){
            weddings RetrievedUser = _context.weddings.SingleOrDefault(w => w.UserId == id);
            _context.weddings.Remove(RetrievedUser);
            _context.SaveChanges();
            return RedirectToAction("dashboard");
        }

        [HttpGet]
        [Route("newwedding")]
        public IActionResult newwedding(){
            return View();
        }
        
        [HttpPost]
        [Route("newwedding")]
        public IActionResult newwedding(weddings newplan){
            if(ModelState.IsValid){
                if(newplan.date>DateTime.Now){
                    weddings plan=new weddings{
                    wedderone=newplan.wedderone,
                    weddertwo=newplan.weddertwo,
                    date=newplan.date,
                    address=newplan.address,
                    UserId=HttpContext.Session.GetInt32("userid").Value
                    };
                    _context.Add(plan);
                    _context.SaveChanges();
                    return RedirectToAction("dashboard");
                }else{
                    ViewBag.err="Please input future time";
                    return View(newplan);
                }
                
            }else{
                return View(newplan);
            }
        }
        
        [HttpGet]
        [Route("logoff")]
        public IActionResult logoff(){
            HttpContext.Session.Clear();
            return View("Index");
        }
        
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

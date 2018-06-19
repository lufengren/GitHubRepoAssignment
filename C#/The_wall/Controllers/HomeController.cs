using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using The_wall.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;

namespace The_wall.Controllers
{
    public class HomeController : Controller
    {
        private thewallContext _context;
        public HomeController(thewallContext context)
    {
        _context = context;
    }
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(login user){
            if(ModelState.IsValid){
                users result=_context.users.SingleOrDefault(users=>users.email==user.email);
                if(result!=null){
                    var Hasher = new PasswordHasher<users>();
                    if(0 != Hasher.VerifyHashedPassword(result, result.password, user.password))
                    {
                        HttpContext.Session.SetInt32("userid", result.UserId);
                        HttpContext.Session.SetString("username", result.firstname);
                        return RedirectToAction("dashboard");
                    }
                    else{
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
        [Route("register")]
        public IActionResult register(){
            return View();
        }
        [HttpPost]
        [Route("register")]
        public IActionResult register(users newuser,string confirmpass){
            if(newuser.password==confirmpass){
                if(ModelState.IsValid)
                {
                    users result=_context.users.SingleOrDefault(users=>users.email==newuser.email);
                    if(result==null){
                        PasswordHasher<users> Hasher = new PasswordHasher<users>();
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
        [Route("dashboard")]
        public IActionResult dashboard(){
            
            int? userid=HttpContext.Session.GetInt32("userid");
            string username=HttpContext.Session.GetString("username");
            if(userid.HasValue){
                List<messages> allmessages=_context.messages
                .Include(x=>x.users)
                .Include(y=>y.comments)
                .ThenInclude(z=>z.users)
                .OrderByDescending(messages=>messages.created_at)
                .Where(messages=>messages.UserId!=userid)
                .ToList();
                ViewBag.allmessages=allmessages;
                ViewBag.username=username;
                return View();
            }else{
                return View("Index");
            }
        }

        [HttpPost]
        [Route("dashboard")]
        public IActionResult dashboard(string post){
                messages newmessage=new messages
            {
                message=post,
                UserId=HttpContext.Session.GetInt32("userid").Value,
                created_at=DateTime.Now
            };
            _context.Add(newmessage);
            _context.SaveChanges();
            return RedirectToAction("dashboard");
            }

        [HttpPost]
        [Route("comment/{id}")]
        public IActionResult comment(string comment,int id){
            comments newcomment=new comments
            {
                MessageId=id,
                UserId=HttpContext.Session.GetInt32("userid").Value,
                comment=comment,
                created_at=DateTime.Now
            };
            _context.Add(newcomment);
            _context.SaveChanges();
            return RedirectToAction("dashboard");
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

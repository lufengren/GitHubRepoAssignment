using Microsoft.AspNetCore.Mvc;
    namespace firstASP.Controllers     //be sure to use your own project's namespace!
    {
        public class ContactController : Controller   //remember inheritance??
        {
            [HttpGet]
            [Route("contact")]
            public IActionResult Index()
            {
                return View();
            }
        }
    }
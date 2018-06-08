using Microsoft.AspNetCore.Mvc;
    namespace Dojo_Survey.Controllers     //be sure to use your own project's namespace!
    {
        public class HomeController : Controller   //remember inheritance??
        {
            [HttpGet]
            [Route("")]
            public IActionResult Index()
            {
                return View();
            }
        }
    }
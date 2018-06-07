using Microsoft.AspNetCore.Mvc;
    namespace time_display.Controllers     //be sure to use your own project's namespace!
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
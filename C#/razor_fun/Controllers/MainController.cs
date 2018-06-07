using Microsoft.AspNetCore.Mvc;
    namespace razor_fun.Controllers     //be sure to use your own project's namespace!
    {
        public class MainController : Controller   //remember inheritance??
        {
            [HttpGet]
            [Route("")]
            public IActionResult Index()
            {
                return View();
            }
        }
    }
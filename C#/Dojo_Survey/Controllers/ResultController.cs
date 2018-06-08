using Microsoft.AspNetCore.Mvc;
    namespace Dojo_Survey.Controllers     //be sure to use your own project's namespace!
    {
        public class ResultController : Controller   //remember inheritance??
        {
            [HttpPost]
            [Route("result")]
            public IActionResult result(string name,string location,string language,string comment)
            {
                ViewBag.name=name;
                ViewBag.location=location;
                ViewBag.language=language;
                ViewBag.comment=comment;
                return View();
            }
        }
    }
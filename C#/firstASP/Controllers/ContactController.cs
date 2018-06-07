using Microsoft.AspNetCore.Mvc;
    namespace firstASP.Controllers     //be sure to use your own project's namespace!
    {
        public class ContactController : Controller   //remember inheritance??
        {
            [HttpGet]
            [Route("contact")]
            public string Index()
            {
                return "These is mt contact";
            }
        }
    }
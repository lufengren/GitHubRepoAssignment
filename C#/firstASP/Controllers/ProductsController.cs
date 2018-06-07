using Microsoft.AspNetCore.Mvc;
    namespace firstASP.Controllers     //be sure to use your own project's namespace!
    {
        public class ProductsController : Controller   //remember inheritance??
        {
            [HttpGet]
            [Route("projects")]
            public string Index()
            {
                return "These are my projects";
            }
        }
    }
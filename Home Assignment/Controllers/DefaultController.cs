using System.Web.Mvc;

namespace Home_Assignment.Controllers
{
    public class DefaultController : Controller
    {
        // GET: Default
        public ActionResult Index()
        {
            Session["TrialsNumber"] = 0;
            return View();
        }

        [HttpPost]
        public string Validate(string username, string password)
        {
            if (username == "Test" && password == "1234")
            {
                Session["TrialsNumber"] = 0;
                return "True";
            }
            var trialsNumber = (int)Session["TrialsNumber"];
            Session["TrialsNumber"] = trialsNumber + 1;
            return trialsNumber == 2 ? "404" : "False";
        }

        public ActionResult Error404()
        {
            return HttpNotFound();
        }
    }
}
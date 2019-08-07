using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace BrightSparkTask.Controllers
{
    public class SettingsController : ApiController
    {
        [Route("api/myfileupload")]
        [HttpPost]
        public string MyFileUpload()
        {
            var request = HttpContext.Current.Request;
            var filePath = "C:\\temp\\" + request.Headers["filename"];
            using (var fs = new System.IO.FileStream(filePath, System.IO.FileMode.Create))
            {
                request.InputStream.CopyTo(fs);
            }
            return "uploaded";
        }
    }
}

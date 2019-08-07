using BrightSparkTask.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BrightSparkTask.Controllers
{
    public class CalcController : ApiController
    {
        public CalcController()
        {
        }
        public IHttpActionResult GetSum(double x, double y)
        {            
            return Ok(x + y);
        }
        public IHttpActionResult GetSub(double x, double y)
        {
            return Ok(x - y);
        }
        public IHttpActionResult GetMult(double x, double y)
        {
            return Ok(x * y);
        }
        public IHttpActionResult GetDiv(double x, double y)
        {
            return Ok(x / y);
        }
    }
}

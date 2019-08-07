using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BrightSparkTask.Models
{
    // Models returned by MeController actions.
    public class ResultViewModel
    {
        public double Result { get; set; }
    }
}
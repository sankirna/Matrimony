using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net;
using Matrimony.API.Infrastructure;

namespace Matrimony.Framework.Filters
{
    public class ApiValidationFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                //the only output i want are the error descriptions, nothing else
                var data = context.ModelState
                    .Values
                    .SelectMany(v => v.Errors.Select(b => b.ErrorMessage))
                    .ToList();
                HttpStatusCode code = HttpStatusCode.BadRequest;
                context.Result = new JsonResult(code.ToErrorApiResponse(data)) { StatusCode = 400 };
            }
            //base.OnActionExecuting(context);
        }
    }
}

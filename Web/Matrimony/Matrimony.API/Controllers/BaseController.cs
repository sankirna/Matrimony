using Matrimony.Framework.Filters;
using Matrimony.Framework.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Matrimony.API.Controllers
{
    //[Authorize]
    [Route("api/[controller]/[Action]")]
    [ApiController]
    [ApiValidationFilter]
    public class BaseController : ControllerBase
    {
        protected BaseResponseModel<T> Success<T>(T data)
        {
            BaseResponseModel<T> response = new BaseResponseModel<T>();
            response.StatusCode = HttpStatusCode.OK;
            response.StatusDescription=HttpStatusCode.OK.ToString();
            response.Data = data;
            return response;
        }
    }
}

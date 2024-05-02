using Matrimony.Framework.Models;
using System.Net;

namespace Matrimony.API.Infrastructure
{
    public static class APIResponseHelper
    {
        public static BaseResponseModel<T> ToSuccessApiResponse<T>(this HttpStatusCode code, T data)
        {
            return code.ToApiResponse(data, true);
        }

        public static BaseResponseModel<T> ToErrorApiResponse<T>(this HttpStatusCode code, T data)
        {
            return code.ToApiResponse(data, false);
        }

        public static BaseResponseModel<T> ToApiResponse<T>(this HttpStatusCode code, T data, bool isSuccess)
        {
            BaseResponseModel<T> response = new BaseResponseModel<T>();
            response.Success = isSuccess;
            response.StatusCode = code;
            response.StatusDescription = code.ToString();
            response.Data = data;
            return response;
        }
    }
}

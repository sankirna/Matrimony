using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Matrimony.Framework.Models
{
    public class BaseResponseModel<T>
    {
        public bool Success { get; set; }
        public int StatusCode { get; set; }
        public string Status { get; set; }
        public T Data { get; set; }
    }
}

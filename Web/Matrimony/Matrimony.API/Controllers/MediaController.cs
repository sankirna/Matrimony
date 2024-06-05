using Matrimony.API.Models.Countries;
using Matrimony.API.Models.Media;
using Matrimony.Service.Profiles;
using Microsoft.AspNetCore.Mvc;
using Nop.Core.Infrastructure;
using System.Text;

namespace Matrimony.API.Controllers
{
    public class MediaController : BaseController
    {
        protected readonly INopFileProvider _fileService;

        public MediaController(INopFileProvider fileService)
        {
            _fileService= fileService;
        }

        [HttpPost]
        public virtual async Task<IActionResult> Upload(FileUploadRequestModel model)
        {
            if (model.FileAsBase64.Contains(","))
            {
                model.FileAsBase64 = model.FileAsBase64.Substring(model.FileAsBase64.IndexOf(",") + 1);
            }

            byte[] bytes = System.Convert.FromBase64String(model.FileAsBase64);
            string path = "staticfiles/profile/sing.jpeg";
            _fileService.CreateFile(path);

            await _fileService.WriteAllBytesAsync(path, bytes);
            //prepare model
            return Success(model);
        }
    }
}

using Matrimony.API.Models.Media;
using Matrimony.API.Models.Profiles;
using Matrimony.Core;
using Microsoft.AspNetCore.Hosting;
using Nop.Core.Infrastructure;

namespace Matrimony.API.Factories.Media
{
    public class MediaFactoryModel : IMediaFactoryModel
    {
        protected readonly INopFileProvider _fileService;
        protected readonly IWebHostEnvironment _webHostEnvironment;

        public MediaFactoryModel(IWebHostEnvironment webHostEnvironment
                               , INopFileProvider fileService)
        {
            _webHostEnvironment= webHostEnvironment;
            _fileService = fileService;
        }

        public virtual async Task<FileUploadRequestModel> UploadRequestModelAsync(FileUploadRequestModel model)
        {
            if (model.FileAsBase64.Contains(","))
            {
                model.FileAsBase64 = model.FileAsBase64.Substring(model.FileAsBase64.IndexOf(",") + 1);
            }

            string path = string.Format( "{0}{1}", model.FileType.ToGetFolderPath(), model.FileName.ToGetFileName());
            byte[] bytes = Convert.FromBase64String(model.FileAsBase64);
            _fileService.CreateFile(path);
            await _fileService.WriteAllBytesAsync(path, bytes);

            return model;
        }
    }
}

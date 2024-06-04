using Matrimony.Core.Enums;

namespace Matrimony.API.Models.Media
{
    public class FileUploadRequestModel
    {
        public string Base64String { get; set; }
        //public byte[] FileData { get; set; }
        public string FileName { get; set; }
        public FileType FileType { get; set; }
    }
}

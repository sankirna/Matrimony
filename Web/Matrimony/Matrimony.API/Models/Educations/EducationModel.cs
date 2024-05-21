using Matrimony.Framework.Models;
using Nop.Web.Framework.Models;

namespace Matrimony.API.Models.Educations
{
    public partial record EducationModel : BaseNopEntityModel
    {
        public string Name { get; set; } = null!;
    }
}

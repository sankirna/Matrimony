using Matrimony.Framework.Models;
using Nop.Web.Framework.Models;

namespace Matrimony.API.Models.Families
{
    public partial record FamilyModel : BaseNopEntityModel
    {
        public string Name { get; set; } = null!;
    }
}

using Matrimony.Framework.Models;
using Nop.Web.Framework.Models;

namespace Matrimony.API.Models.Occupations
{
    public partial record OccupationModel : BaseNopEntityModel
    {
        public string Name { get; set; } = null!;
    }
}

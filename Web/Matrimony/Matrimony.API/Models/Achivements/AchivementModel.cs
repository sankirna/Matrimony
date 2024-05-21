using Matrimony.Framework.Models;
using Nop.Web.Framework.Models;

namespace Matrimony.API.Models.Achivements
{
    public partial record AchivementModel : BaseNopEntityModel
    {
        public string Name { get; set; } = null!;
    }
}

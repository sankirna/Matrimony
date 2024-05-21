using Matrimony.Framework.Models;
using Nop.Web.Framework.Models;

namespace Matrimony.API.Models.Addresss
{
    public partial record AddressModel : BaseNopEntityModel
    {
        public string Name { get; set; } = null!;
    }
}

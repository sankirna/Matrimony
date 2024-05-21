using Matrimony.Framework.Models;
using Nop.Web.Framework.Models;

namespace Matrimony.API.Models.Addresss
{
    public partial record AddressModel : BaseNopEntityModel
    {
        public int ProfileId { get; set; }

        public string? Address1 { get; set; }

        public string? Address2 { get; set; }

        public string? Landmark { get; set; }

        public string? CityId { get; set; }

        public string? StateId { get; set; }

        public string? CountryId { get; set; }

        public string? PinNo { get; set; }

        public string? TypeId { get; set; }

        public int? DisplayOrder { get; set; }
    }
}

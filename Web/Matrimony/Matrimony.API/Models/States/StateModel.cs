using Matrimony.Framework.Models;

namespace Matrimony.API.Models.States
{
    public partial record StateModel : BaseNopEntityModel
    {
        public string Name { get; set; } = null!;
        public int CountryId { get; set; }
    }
}

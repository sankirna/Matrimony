using Matrimony.Framework.Models;


namespace Matrimony.API.Models.Cities
{
    public partial record CityModel : BaseNopEntityModel
    {
        public string Name { get; set; } = null!;
        public int StateId { get; set; }
    }
}


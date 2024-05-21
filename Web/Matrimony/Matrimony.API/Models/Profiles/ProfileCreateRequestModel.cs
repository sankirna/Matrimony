using Matrimony.Framework.Models;

namespace Matrimony.API.Models.Profiles
{
    public partial record ProfileCreateRequestModel : BaseNopEntityModel
    {
        public int UserId { get; set; }

        public string FirstName { get; set; } = null!;

        public string? MiddleName { get; set; }

        public string? LastName { get; set; }

        public int Sex { get; set; }

        public string Email { get; set; } = null!;

        public string? AlternateEmail { get; set; }

        public string? PhoneNo { get; set; }

        public string? AlternatePhoneNo { get; set; }

        public string? Langauge { get; set; }

        public string? OtherInformation { get; set; }
    }
}

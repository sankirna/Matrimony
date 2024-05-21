using Matrimony.API.Models.Countries;
using Matrimony.API.Models.Profiles;

namespace Matrimony.API.Factories.Profiles
{
    public interface IProfileFactoryModel
    {
        Task<ProfileListModel> PrepareProfileListModelAsync(ProfileSearchModel searchModel);
    }
}

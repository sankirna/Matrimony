using Matrimony.API.Infrastructure.Mapper.Extensions;
using Matrimony.API.Models.Profiles;
using Matrimony.Service.Profiles;
using Nop.Web.Framework.Models.Extensions;

namespace Matrimony.API.Factories.Profiles
{
    public class ProfileFactoryModel : IProfileFactoryModel
    {
        protected readonly IProfileService _profileService;
        public ProfileFactoryModel(IProfileService profileService)
        {
            _profileService = profileService;
        }

        /// <summary>
        /// Prepare paged profile list model
        /// </summary>
        /// <param name="searchModel">Profile search model</param>
        /// <returns>
        /// A task that represents the asynchronous operation
        /// The task result contains the profile list model
        /// </returns>
        public virtual async Task<ProfileListModel> PrepareProfileListModelAsync(ProfileSearchModel searchModel)
        {
            ArgumentNullException.ThrowIfNull(searchModel);

            //get profiles
            var profiles = await _profileService.GetProfilesAsync(name: searchModel.Name,
                pageIndex: searchModel.Page - 1, pageSize: searchModel.PageSize);

            //prepare list model
            var model = await new ProfileListModel().PrepareToGridAsync(searchModel, profiles, () =>
            {
                return profiles.SelectAwait(async profile =>
                {
                    //fill in model values from the entity
                    var profileModel = profile.ToModel<ProfileModel>();
                    return profileModel;
                });
            });

            return model;
        }
    }
}

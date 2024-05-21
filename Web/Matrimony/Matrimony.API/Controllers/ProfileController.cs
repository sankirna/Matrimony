using AutoMapper;
using Matrimony.API.Auth;
using Matrimony.API.Factories.Countries;
using Matrimony.API.Factories.Profiles;
using Matrimony.API.Infrastructure.Mapper.Extensions;
using Matrimony.API.Models.Addresss;
using Matrimony.API.Models.Countries;
using Matrimony.API.Models.Profiles;
using Matrimony.Core;
using Matrimony.Core.Domain;
using Matrimony.Core.IndentityModels;
using Matrimony.Service.Account;
using Matrimony.Service.Achivements;
using Matrimony.Service.Addresss;
using Matrimony.Service.Countries;
using Matrimony.Service.Educations;
using Matrimony.Service.Families;
using Matrimony.Service.Occupations;
using Matrimony.Service.Profiles;
using Microsoft.AspNetCore.Mvc;
using Nop.Core;
using Profile = Matrimony.Core.Domain.Profile;

namespace Matrimony.API.Controllers
{
    public class ProfileController : BaseController
    {
        protected readonly IWorkContext _workContext;
        private readonly IAuthenticateService _authenticateService;
        protected readonly IProfileFactoryModel _profileFactoryModel;
        protected readonly IProfileService _profileService;
        protected readonly IAddressService _addressService;
        protected readonly IFamilyService _familyService;
        protected readonly IEducationService _educationService;
        protected readonly IOccupationService _occupationService;
        protected readonly IAchivementService _achivementService;

        public ProfileController(IWorkContext workContext
                               , IAuthenticateService authenticateService
                               , IProfileFactoryModel profileFactoryModel
                               , IProfileService profileService
                               , IAddressService addressService
                               , IFamilyService familyService
                               , IEducationService educationService
                               , IOccupationService occupationService
                               , IAchivementService achivementService)
        {
            _workContext = workContext;
            _authenticateService = authenticateService;
            _profileFactoryModel = profileFactoryModel;
            _profileService = profileService;
            _addressService = addressService;
            _familyService = familyService;
            _educationService = educationService;
            _occupationService = occupationService;
            _achivementService = achivementService;
        }

        #region Private Methods

        private async Task UpdateAddresses(int profileId, List<AddressModel> requestAddresses)
        {
            if (requestAddresses != null)
            {
                var addresses = await _addressService.GetByProfileIdAsync(profileId);
                var existingIds = addresses.Select(x => x.Id);
                var requestIds = requestAddresses.Select(x => x.Id);
                var updateIds = requestIds.Intersect(existingIds);
                var deleteIds = existingIds.Except(requestIds);
                var addedIds = requestIds.Except(existingIds);

                var deleteAddresses = addresses.Where(x => deleteIds.Contains(x.Id));
                foreach (var address in deleteAddresses)
                {
                    await _addressService.DeleteAsync(address);
                }

                var updateAddresses = requestAddresses.Where(x => updateIds.Contains(x.Id));
                foreach (var addressRequest in updateAddresses)
                {
                    var address = addresses.FirstOrDefault(x => x.Id == addressRequest.Id);
                    if (address == null)
                        throw new NopException("address not found");
                    addressRequest.ProfileId = profileId;
                    address = addressRequest.ToEntity(address);
                    await _addressService.UpdateAsync(address);
                }

                var addAddresses = requestAddresses.Where(x => addedIds.Contains(x.Id));
                foreach (var addressRequest in addAddresses)
                {
                    addressRequest.ProfileId = profileId;
                    var address = addressRequest.ToEntity<Address>();
                    await _addressService.InsertAsync(address);
                }
            }
        }

        #endregion

        [HttpPost]
        public virtual async Task<IActionResult> Get(int id)
        {
            var model = await _profileFactoryModel.PrepareProfileEditModelAsync(id);
            return Success(model);
        }

        [HttpPost]
        public virtual async Task<IActionResult> List(ProfileSearchModel searchModel)
        {
            //prepare model
            var model = await _profileFactoryModel.PrepareProfileListModelAsync(searchModel);
            return Success(model);
        }

        [HttpPost]
        public virtual async Task<IActionResult> Create(ProfileCreateRequestModel model)
        {
            // check existing profile exist or not
            var isExists = await _profileService.CheckDuplicateAsync(0, model.Email);
            if (isExists)
            {
                return StatusCode(StatusCodes.Status400BadRequest, new Response { Status = "Error", Message = "User Profile is already exist." });
            }

            // check existing
            ApplicationUser user = await _authenticateService.FindByNameAsync(model.Email);

            // create user use profile id
            if (user == null)
            {
                user = new()
                {
                    Email = model.Email,
                    SecurityStamp = Guid.NewGuid().ToString(),
                    UserName = model.Email
                };
                var result = await _authenticateService.CreateAsync(user, "Test#123");//TODO need to create randomaly
                if (!result)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });
                }
                if (!await _authenticateService.RoleExistsAsync(UserRoles.User))
                    await _authenticateService.CreateAsync(UserRoles.User);

                user = await _authenticateService.FindByNameAsync(model.Email);
            }

            //Assing user role
            if (await _authenticateService.RoleExistsAsync(UserRoles.User))
            {
                await _authenticateService.AddToRoleAsync(user, UserRoles.User);
            }

            // creare profile
            var profile = model.ToEntity<Profile>();
            profile.UserId = user.Id;
            await _profileService.InsertAsync(profile);
            return Success(profile.ToModel<ProfileCreateRequestModel>());
        }


        [HttpPost]
        public virtual async Task<IActionResult> Edit(ProfileEditRequestModel model)
        {
            int profileId = model.Id;

            var profile = await _profileService.GetByIdAsync(model.Id);
            if (profile == null)
                throw new NopException("profile not found");

            string email = profile.Email;
            profile = model.Profile.ToEntity(profile);
            profile.Email = email;
            await _profileService.UpdateAsync(profile);

            await UpdateAddresses(profileId, model.Addresses);

            return Success(model);

        }
    }
}

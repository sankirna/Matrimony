using Matrimony.API.Auth;
using Matrimony.API.Factories.Countries;
using Matrimony.API.Factories.Profiles;
using Matrimony.API.Infrastructure.Mapper.Extensions;
using Matrimony.API.Models.Countries;
using Matrimony.API.Models.Profiles;
using Matrimony.Core;
using Matrimony.Core.Domain;
using Matrimony.Core.IndentityModels;
using Matrimony.Service.Account;
using Matrimony.Service.Countries;
using Matrimony.Service.Profiles;
using Microsoft.AspNetCore.Mvc;

namespace Matrimony.API.Controllers
{
    public class ProfileController : BaseController
    {
        protected readonly IWorkContext _workContext;
        private readonly IAuthenticateService _authenticateService;
        protected readonly IProfileFactoryModel _profileFactoryModel;
        protected readonly IProfileService _profileService;

        public ProfileController(IWorkContext workContext
                               , IAuthenticateService authenticateService
                               , IProfileFactoryModel profileFactoryModel
                               , IProfileService profileService)
        {
            _workContext = workContext;
            _authenticateService = authenticateService;
            _profileFactoryModel = profileFactoryModel;
            _profileService = profileService;
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
    }
}

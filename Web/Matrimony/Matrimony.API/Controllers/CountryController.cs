using Matrimony.API.Factories.Countries;
using Matrimony.API.Models.Countries;
using Matrimony.Core;
using Matrimony.Service;
using Matrimony.Service.Countries;
using Microsoft.AspNetCore.Mvc;
using Nop.Web.Framework.Models.Extensions;

namespace Matrimony.API.Controllers
{
    public class CountryController : BaseController
    {
        protected readonly IWorkContext _workContext;
        protected readonly ICountryFactoryModel _countryFactoryModel;

        public CountryController(IWorkContext workContext
            , ICountryFactoryModel countryFactoryModel)
        {
            _workContext= workContext;
            _countryFactoryModel = countryFactoryModel;
        }

        [HttpPost]
        public virtual async Task<IActionResult> List(CountrySearchModel searchModel)
        {
            //prepare model
            var model = await _countryFactoryModel.PrepareCompanyListModelAsync(searchModel);
            return Success(model);
        }
    }
}

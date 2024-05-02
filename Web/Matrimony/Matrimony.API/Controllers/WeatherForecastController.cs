using Matrimony.API.Auth;
using Matrimony.API.Infrastructure.Mapper.Extensions;
using Matrimony.API.Models;
using Matrimony.Core.Domain;
using Matrimony.Framework.Filters;
using Matrimony.Service;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Matrimony.API.Controllers
{
    //[Authorize]
    [Route("api/[controller]/[Action]")]
    [ApiController]
    [ApiValidationFilter]
    public class WeatherForecastController : ControllerBase
    {
        protected readonly ITestService _testService;

        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, ITestService testService)
        {
            _logger = logger;
            _testService = testService;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var test = _testService.GetIds();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet]
        public object All()
        {
            return _testService.GetAll().Select(x => x.ToModel<TestResponseModel>()).ToList();
        }

        [HttpPost]
        public object Create(TestRequestModel model)
        {
            var test= ModelState.IsValid;
            _testService.Create(model.ToEntity<Test>());
            return model;
        }

        [HttpPost]
        public object Update(TestRequestModel model)
        {
            _testService.Update(model.ToEntity<Test>());
            return model;
        }

        [HttpPost]
        public object Delete(TestRequestModel model)
        {
            _testService.Delete(model.ToEntity<Test>());
            return model;
        }
    }
} 

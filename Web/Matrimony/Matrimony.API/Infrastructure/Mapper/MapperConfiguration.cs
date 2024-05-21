using AutoMapper;
using Matrimony.API.Models;
using Matrimony.API.Models.Countries;
using Matrimony.API.Models.Profiles;
using Matrimony.Core.Domain;
using Nop.Core.Infrastructure.Mapper;
using Profile = AutoMapper.Profile;

namespace Matrimony.API.Infrastructure.Mapper
{
    public partial class MapperConfiguration : Profile, IOrderedMapperProfile
    {
        public MapperConfiguration()
        {
            CreateTestMaps();
            CreateCountryMap();
            CreateProfileMap();
        }

        /// <summary>
        /// Create warehouse maps 
        /// </summary>
        protected virtual void CreateTestMaps()
        {
            CreateMap<Test, TestRequestModel>();
            CreateMap<TestRequestModel, Test>();

            CreateMap<Test, TestResponseModel>();
            CreateMap<TestResponseModel, Test>();
        }

        public virtual void CreateCountryMap()
        {
            CreateMap<Country, CountryModel>();
            CreateMap<CountryModel, Country>();
        }

        public virtual void CreateProfileMap()
        {
            CreateMap<Matrimony.Core.Domain.Profile, ProfileCreateRequestModel>().ReverseMap();
        }

        public int Order => 0;
    }
}

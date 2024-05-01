using AutoMapper;
using Matrimony.API.Models;
using Matrimony.Core.Domain;
using Nop.Core.Infrastructure.Mapper;

namespace Matrimony.API.Infrastructure.Mapper
{
    public partial class MapperConfiguration : Profile, IOrderedMapperProfile
    {
        public MapperConfiguration()
        {
            CreateTestMaps();
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
        public int Order => 0;
    }
}

using AutoMapper;
using Matrimony.API.Models;
using Matrimony.API.Models.Achivements;
using Matrimony.API.Models.Addresss;
using Matrimony.API.Models.Countries;
using Matrimony.API.Models.Educations;
using Matrimony.API.Models.Families;
using Matrimony.API.Models.Occupations;
using Matrimony.API.Models.Profiles;
using Matrimony.Core;
using Matrimony.Core.Domain;
using Matrimony.Framework.Models;
using Nop.Core.Infrastructure.Mapper;
using Profile = AutoMapper.Profile;

namespace Matrimony.API.Infrastructure.Mapper
{
    public partial class MapperConfiguration : Profile, IOrderedMapperProfile
    {
        public MapperConfiguration()
        {
            CreateCommonMap();
            CreateCountryMap();
            CreateProfileMap();
            CreateAchivementMap();
            CreateAddressMap();
            CreateEducationMap();
            CreateFamilyMap();
            CreateOccupationMap();
        }

        public virtual void CreateCommonMap()
        {
            CreateMap<EnumClass, EnumModel>();
        }

        public virtual void CreateCountryMap()
        {
            CreateMap<Country, CountryModel>();
            CreateMap<CountryModel, Country>();
        }

        public virtual void CreateProfileMap()
        {
            CreateMap<Matrimony.Core.Domain.Profile, ProfileModel>().ReverseMap();
            CreateMap<Matrimony.Core.Domain.Profile, ProfileCreateRequestModel>().ReverseMap();
        }

        public virtual void CreateAchivementMap()
        {
            CreateMap<Achivement, AchivementModel>().ReverseMap();
            CreateMap<Achivement, AchivementRequestModel>().ReverseMap();
        }

        public virtual void CreateAddressMap()
        {
            CreateMap<Address, AddressModel>().ReverseMap();
            CreateMap<Address, AddressRequestModel>().ReverseMap();
        }

        public virtual void CreateEducationMap()
        {
            CreateMap<Education, EducationModel>().ReverseMap();
            CreateMap<Education, EducationRequestModel>().ReverseMap();
        }

        public virtual void CreateFamilyMap()
        {
            CreateMap<Family, FamilyModel>().ReverseMap();
            CreateMap<Family, FamilyRequestModel>().ReverseMap();
        }

        public virtual void CreateOccupationMap()
        {
            CreateMap<Occupation, OccupationModel>().ReverseMap();
            CreateMap<Occupation, OccupationRequestModel>().ReverseMap();
        }

        public int Order => 0;
    }
}

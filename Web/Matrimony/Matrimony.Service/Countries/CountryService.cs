using Matrimony.Core;
using Matrimony.Core.Domain;
using Matrimony.Data;

namespace Matrimony.Service.Countries
{
    public class CountryService : ICountryService
    {
        protected readonly IRepository<Country> _countryRepository;
        public CountryService(IRepository<Country> countryRepository)
        {
            _countryRepository = countryRepository;
        }

        public virtual async Task<IPagedList<Country>> GetCountriesAsync(string name,
            int pageIndex = 0, int pageSize = int.MaxValue, bool getOnlyTotalCount = false)
        {
            var countries = await _countryRepository.GetAllPagedAsync(query =>
            {
                if (!string.IsNullOrWhiteSpace(name))
                    query = query.Where(c => c.Name.Contains(name));

                return query;
            }, pageIndex, pageSize, getOnlyTotalCount, includeDeleted: false);

            return countries;
        }

        public virtual async Task<Country> GetByIdAsync(int Id)
        {
            return await _countryRepository.GetByIdAsync(Id);
        }

        /// <summary>
        /// Insert a customer
        /// </summary>
        /// <param name="Country">Customer</param>
        /// <returns>A task that represents the asynchronous operation</returns>
        public virtual async Task InsertAsync(Country country)
        {
            await _countryRepository.InsertAsync(country);
        }

        /// <summary>
        /// Updates the customer
        /// </summary>
        /// <param name="customer">Customer</param>
        /// <returns>A task that represents the asynchronous operation</returns>
        public virtual async Task UpdateAsync(Country country)
        {
            await _countryRepository.UpdateAsync(country);
        }

        /// <summary>
        /// Delete a customer
        /// </summary>
        /// <param name="customer">Customer</param>
        /// <returns>A task that represents the asynchronous operation</returns>
        public virtual async Task DeleteAsync(Country customer)
        {
            ArgumentNullException.ThrowIfNull(customer);

            await _countryRepository.DeleteAsync(customer);
        }
    }
}

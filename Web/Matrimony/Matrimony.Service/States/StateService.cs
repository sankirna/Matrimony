using Matrimony.Core;
using Matrimony.Core.Domain;
using Matrimony.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Matrimony.Service.States
{
    public class StateService : IStateService
    {
        protected readonly IRepository<State> _entityRepository;

        public StateService(IRepository<State> entityRepository)
        {
            _entityRepository = entityRepository;
        }

        public virtual async Task<IPagedList<State>> GetStatesAsync(string name, int pageIndex = 0, int pageSize = int.MaxValue, bool getOnlyTotalCount = false)
        {
            var states = await _entityRepository.GetAllPagedAsync(query =>
            {
                if (!string.IsNullOrWhiteSpace(name))
                    query = query.Where(s => s.Name.Contains(name));

                return query;
            }, pageIndex, pageSize, getOnlyTotalCount, includeDeleted: false);

            return states;
        }

        public virtual async Task<State> GetByIdAsync(int Id)
        {
            return await _entityRepository.GetByIdAsync(Id);
        }

        public virtual async Task InsertAsync(State entity)
        {
            await _entityRepository.InsertAsync(entity);
        }

        public virtual async Task UpdateAsync(State entity)
        {
            await _entityRepository.UpdateAsync(entity);
        }

        public virtual async Task DeleteAsync(State entity)
        {
            ArgumentNullException.ThrowIfNull(entity);
            await _entityRepository.DeleteAsync(entity);
        }
    }
}

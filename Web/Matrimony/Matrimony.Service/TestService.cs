using Matrimony.Core.Domain;
using Matrimony.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Matrimony.Service
{
    public class TestService : ITestService
    {
        protected readonly IRepository<Test> _testRepository;
        public TestService(IRepository<Test> testRepository)
        {
                _testRepository = testRepository;
        }

        public IList<int> GetIds()
        {
            return _testRepository.GetAll().ToList().Select(x=>x.Id).ToList();
        }
    }
}

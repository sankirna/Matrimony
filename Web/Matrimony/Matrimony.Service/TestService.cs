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

        public void Create(Test entity)
        {
            _testRepository.Insert(entity);
        }

        public void Delete(Test entity)
        {
            _testRepository.Delete(entity);
        }

        public IList<Test> GetAll()
        {
            return _testRepository.GetAll().ToList();
        }

        public IList<int> GetIds()
        {
            return _testRepository.GetAll().ToList().Select(x => x.Id).ToList();
        }

        public void Update(Test entity)
        {
            _testRepository.Update(entity);
        }
    }
}

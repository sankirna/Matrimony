using Matrimony.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Matrimony.Service
{
    public interface ITestService
    {
        IList<int> GetIds();
        IList<Test> GetAll();
        void Create(Test entity);
        void Update(Test entity);
        void Delete(Test entity);
    }
}

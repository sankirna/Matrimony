using Matrimony.Core.IndentityModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Matrimony.Service.Account
{
    internal interface IAuthenticateService
    {
        ApplicationUser FindByNameAsync(string username);
        ApplicationUser CheckPasswordAsync(ApplicationUser user, string password);
        ApplicationUser CreateAsync(ApplicationUser user, string password);
        IList<string> GetRolesAsync(ApplicationUser user);
        Task<bool> RoleExistsAsync(string roleName);
    }
}

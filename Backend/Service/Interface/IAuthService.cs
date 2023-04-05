using Microsoft.AspNetCore.Identity;
using Model.DTO;
using Model.JWT;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Interface
{
    public interface IAuthService
    {
        Task<IdentityUser> SignUp(RegisterModel registerModel);
        Task<UserDTO> SignIn(LoginModel loginModel);

    }
}

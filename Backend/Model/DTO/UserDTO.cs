using Microsoft.AspNetCore.Identity;
using Model.JWT;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.DTO
{
    public class UserDTO
    {
        public IdentityUser ?User { get; set; }
        public JWTToken ?Token { get; set; }

    }
}

﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.JWT
{
    public class JWTToken
    {
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
    }

}

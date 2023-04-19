﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.DTO
{
    public class PostDTO
    {
        public string title { get; set; }
        public string message { get; set; }
        public Byte[]? photo { get; set; }
    }
}

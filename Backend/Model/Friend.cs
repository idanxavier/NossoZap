﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class Friend
    {
        [Key]
        public string id {  get; set; }
        public DateTime addedAt { get; set; }
        public string userId { get; set; }
        public string friendId { get; set; }
        public string friendName { get; set; }
    }
}

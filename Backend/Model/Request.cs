using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class Request
    {
        public int id { get; set; }
        public string fromUserId { get; set; }
        public string toUserId { get; set; }
        public DateTime date { get; set; }  
        public bool accepted { get; set; }
    }
}

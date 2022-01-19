using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class Log
    {
        public int logId { get; set; }
        public string dtInclusao { get; set; }
        public string acao { get; set; }
        public int usuarioFk { get; set; }
    }
}

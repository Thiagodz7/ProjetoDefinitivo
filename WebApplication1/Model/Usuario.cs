using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class Usuario
    {
        public int usuarioId { get; set; }

        [Required]
        public string usuario { get; set; }

        [Required]
        public string senha { get; set; }
    }
}

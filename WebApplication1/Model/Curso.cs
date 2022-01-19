using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class Curso
    {
        public int cursoId { get; set; }
        public string descricao { get; set; }
        public string dtInicio { get; set; }
        public string dtTermino { get; set; }
        public int qtdAlunos { get; set; }
        public int categoriaFk { get; set; }

    }
}

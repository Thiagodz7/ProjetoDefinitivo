using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Model;

namespace WebApplication1.Data
{
    public class WebApplication1Context : DbContext
    {
        public WebApplication1Context (DbContextOptions<WebApplication1Context> options)
            : base(options)
        {
        }

        public DbSet<WebApplication1.Model.Curso> Curso { get; set; }

        public DbSet<WebApplication1.Model.Categoria> Categoria { get; set; }

        public DbSet<WebApplication1.Model.Log> Log { get; set; }

        public DbSet<WebApplication1.Model.Usuario> Usuario { get; set; }

    }
}

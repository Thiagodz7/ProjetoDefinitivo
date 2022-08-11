using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebApplication1.Model;

namespace WebApplication1.Map
{
    public class CursoMap : IEntityTypeConfiguration<Curso>
    {
        public void Configure(EntityTypeBuilder<Curso> builder)
        {
            builder.ToTable("Curso", "dbo");
            builder.HasKey(x => x.cursoId);
            builder.Property(x => x.cursoId)
                .IsRequired()
                .HasColumnName("cursoId");
            builder.Property(x => x.descricao)
                   .HasColumnName("descricao")
                   .IsRequired()
                   .HasMaxLength(100);
            builder.Property(x => x.dtInicio)
                   .HasColumnName("dtInicio")
                   .IsRequired()
                   .HasMaxLength(100);
            builder.Property(x => x.dtTermino)
                   .HasColumnName("dtTermino")
                   .IsRequired()
                   .HasMaxLength(100);
            builder.Property(x => x.qtdAlunos)
                   .HasColumnName("qtdAlunos"); 
            builder.Property(x => x.categoriaId)
                   .HasColumnName("categoriaId")
                   .IsRequired();

            builder.HasOne(x => x.categoria).WithMany().HasForeignKey(x => x.categoriaId).OnDelete(DeleteBehavior.NoAction);
        }
    }
}

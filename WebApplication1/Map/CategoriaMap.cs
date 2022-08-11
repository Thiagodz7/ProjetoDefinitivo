using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using WebApplication1.Model;

namespace WebApplication1.Map
{
    public class CategoriaMap : IEntityTypeConfiguration<Categoria>
    {
        public void Configure(EntityTypeBuilder<Categoria> builder)
        {
            builder.ToTable("Categoria", "dbo");
            builder.HasKey(x => x.categoriaId);
            builder.Property(x => x.categoriaId)
                .HasColumnName("categoriaoId")
                .IsRequired();
            builder.Property(x => x.categoria)
                   .HasColumnName("categoria")
                   .IsRequired()
                   .HasMaxLength(100);
            builder.Property(x => x.descricao)
                   .HasColumnName("descricao")
                   .HasMaxLength(100);
        }
    }
}

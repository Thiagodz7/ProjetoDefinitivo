using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class Inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categoria",
                columns: table => new
                {
                    categoriaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    categoria = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    descricao = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categoria", x => x.categoriaId);
                });

            migrationBuilder.CreateTable(
                name: "Curso",
                columns: table => new
                {
                    cursoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    descricao = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    dtInicio = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    dtTermino = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    qtdAlunos = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    categoriaFk = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Curso", x => x.cursoId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Categoria");

            migrationBuilder.DropTable(
                name: "Curso");
        }
    }
}

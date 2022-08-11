using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class TesteObJnaFK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "categoriaId",
                table: "Curso",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Curso_categoriaId",
                table: "Curso",
                column: "categoriaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Curso_Categoria_categoriaId",
                table: "Curso",
                column: "categoriaId",
                principalTable: "Categoria",
                principalColumn: "categoriaId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Curso_Categoria_categoriaId",
                table: "Curso");

            migrationBuilder.DropIndex(
                name: "IX_Curso_categoriaId",
                table: "Curso");

            migrationBuilder.DropColumn(
                name: "categoriaId",
                table: "Curso");
        }
    }
}

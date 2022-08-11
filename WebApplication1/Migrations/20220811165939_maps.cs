using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication1.Migrations
{
    public partial class maps : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Curso_Categoria_categoriaId",
                table: "Curso");

            migrationBuilder.DropColumn(
                name: "categoriaFk",
                table: "Curso");

            migrationBuilder.EnsureSchema(
                name: "dbo");

            migrationBuilder.RenameTable(
                name: "Curso",
                newName: "Curso",
                newSchema: "dbo");

            migrationBuilder.RenameTable(
                name: "Categoria",
                newName: "Categoria",
                newSchema: "dbo");

            migrationBuilder.RenameColumn(
                name: "categoriaId",
                schema: "dbo",
                table: "Categoria",
                newName: "categoriaoId");

            migrationBuilder.AlterColumn<string>(
                name: "dtTermino",
                schema: "dbo",
                table: "Curso",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "dtInicio",
                schema: "dbo",
                table: "Curso",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "descricao",
                schema: "dbo",
                table: "Curso",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<int>(
                name: "categoriaId",
                schema: "dbo",
                table: "Curso",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "descricao",
                schema: "dbo",
                table: "Categoria",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "categoria",
                schema: "dbo",
                table: "Categoria",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Curso_Categoria_categoriaId",
                schema: "dbo",
                table: "Curso",
                column: "categoriaId",
                principalSchema: "dbo",
                principalTable: "Categoria",
                principalColumn: "categoriaoId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Curso_Categoria_categoriaId",
                schema: "dbo",
                table: "Curso");

            migrationBuilder.RenameTable(
                name: "Curso",
                schema: "dbo",
                newName: "Curso");

            migrationBuilder.RenameTable(
                name: "Categoria",
                schema: "dbo",
                newName: "Categoria");

            migrationBuilder.RenameColumn(
                name: "categoriaoId",
                table: "Categoria",
                newName: "categoriaId");

            migrationBuilder.AlterColumn<string>(
                name: "dtTermino",
                table: "Curso",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100);

            migrationBuilder.AlterColumn<string>(
                name: "dtInicio",
                table: "Curso",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100);

            migrationBuilder.AlterColumn<string>(
                name: "descricao",
                table: "Curso",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100);

            migrationBuilder.AlterColumn<int>(
                name: "categoriaId",
                table: "Curso",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "categoriaFk",
                table: "Curso",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "descricao",
                table: "Categoria",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "categoria",
                table: "Categoria",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100);

            migrationBuilder.AddForeignKey(
                name: "FK_Curso_Categoria_categoriaId",
                table: "Curso",
                column: "categoriaId",
                principalTable: "Categoria",
                principalColumn: "categoriaId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

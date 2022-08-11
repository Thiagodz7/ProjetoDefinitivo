﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApplication1.Data;

namespace WebApplication1.Migrations
{
    [DbContext(typeof(WebApplication1Context))]
    [Migration("20220810184818_Teste ObJ na FK")]
    partial class TesteObJnaFK
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.12")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebApplication1.Model.Categoria", b =>
                {
                    b.Property<int>("categoriaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("categoria")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("descricao")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("categoriaId");

                    b.ToTable("Categoria");
                });

            modelBuilder.Entity("WebApplication1.Model.Curso", b =>
                {
                    b.Property<int>("cursoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("categoriaFk")
                        .HasColumnType("int");

                    b.Property<int?>("categoriaId")
                        .HasColumnType("int");

                    b.Property<string>("descricao")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("dtInicio")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("dtTermino")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("qtdAlunos")
                        .HasColumnType("int");

                    b.HasKey("cursoId");

                    b.HasIndex("categoriaId");

                    b.ToTable("Curso");
                });

            modelBuilder.Entity("WebApplication1.Model.Log", b =>
                {
                    b.Property<int>("logId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("acao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("dtInclusao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("usuario")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("logId");

                    b.ToTable("Log");
                });

            modelBuilder.Entity("WebApplication1.Model.Usuario", b =>
                {
                    b.Property<int>("usuarioId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("senha")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("usuario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("usuarioId");

                    b.ToTable("Usuario");
                });

            modelBuilder.Entity("WebApplication1.Model.Curso", b =>
                {
                    b.HasOne("WebApplication1.Model.Categoria", "categoria")
                        .WithMany()
                        .HasForeignKey("categoriaId");

                    b.Navigation("categoria");
                });
#pragma warning restore 612, 618
        }
    }
}

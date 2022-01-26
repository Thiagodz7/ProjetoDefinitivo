import Cursos from "../components/Cursos";
import Menu from "../components/Menu";
import Link from "next/link";

export default function Pagina() {
  return (
    <div>
      <Menu></Menu>

      <div className="container">
        <h1>Bem Vindo a CursosCast!</h1>
      </div>
    </div>
  );
}

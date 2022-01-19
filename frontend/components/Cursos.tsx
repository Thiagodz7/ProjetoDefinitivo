import axios from "axios";
import { useState, useEffect} from "react";
import Menu from "./Menu";

export default function Cursos(propCursos : any){
    const baseUrl = "https://localhost:5001/api/Cursos";
    const [data, setData] = useState([]);
  
    const cursoGet = async () => {
      await axios
        .get(baseUrl)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    useEffect(() => {
      cursoGet();
    });
  
    return (
    <div>
            <div className="container">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Descrição</th>
                  <th>Data Inicio</th>
                  <th>Data Término</th>
                  <th>Qtd Alunos</th>
                  <th>Categoria</th>
                  <th>Operação</th>
                </tr>
              </thead>
              <tbody>
                {data.map((curso) => (
                  <tr key={curso.cursoId}>
                    <th>{curso.cursoId}</th>
                    <th>{curso.descricao}</th>
                    <th>{curso.dtInicio}</th>
                    <th>{curso.dtTermino}</th>
                    <th>{curso.qtdAlunos}</th>
                    <th>{curso.categoriaFk}</th>
                    <th><button className="btn-sm btn-success">Editar</button>-<button className="btn-sm btn-danger">Bloquear</button></th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    )
}

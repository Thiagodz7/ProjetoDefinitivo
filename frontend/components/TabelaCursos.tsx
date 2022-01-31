import { useState} from "react";
import { Modal } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { cursoApi } from "../pages/api/curso.api";
import { Curso } from "../pages/api/curso.api";

export default function TabelaCursos(){
    const [curso, setCurso] = useState([]);
    const [cursoAtt, setCursoAtt] = useState({} as Curso);

    function mostrarDados(){
       cursoApi.lista()
      .then((response) => {
          setCurso(response.data);
        })
  }
  mostrarDados();

  function editar(){
    cursoApi.put(cursoAtt.cursoId, cursoAtt)
    .then(result => abrirFecharModalEditar())
  }
  function deletar(){
    return "a";
  }

  const selecionar=(cursoAtt, opcao)=>{
    setCursoAtt(cursoAtt);
    (opcao == 'Editar') ?
    abrirFecharModalEditar(): abrirFecharModalDeletar();
  }

    const handleChange = (e) => {
      const { name, value } = e.target;
      setCursoAtt({
        ...cursoAtt,
        [name]: value,
      });
      console.log(cursoAtt);
    };

    const [modalEditar, setModalEditar] = useState(false);
    const abrirFecharModalEditar = () => {
      setModalEditar(!modalEditar);
    };

    const [modalDeletar, setModalDeletar] = useState(false);
    const abrirFecharModalDeletar = () => {
      setModalDeletar(!modalDeletar);
    };
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
              {curso.map((curso) => (
                  <tr key={curso.id}>
                    <th>{curso.cursoId}</th>
                    <th>{curso.descricao}</th>
                    <th>{curso.dtInicio}</th>
                    <th>{curso.dtTermino}</th>
                    <th>{curso.qtdAlunos}</th>
                    <th>{curso.categoriaFk}</th>
                    <th><button onClick={()=>selecionar(curso, "Editar")} className="btn-sm btn-success">Editar</button>-<button onClick={()=>selecionar(curso, "deletar")}  className="btn-sm btn-danger" >Excluir</button></th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

      <Modal show={modalEditar}> 
        <Modal.Header closeButton={!modalEditar}>
          <Modal.Title>Editar um Curso</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form-group">
            <label>ID: </label>
            <br />
            <input
              readOnly value={cursoAtt && cursoAtt.cursoId}
              name="descricao"
              type="disable"
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <label>Descrição: </label>
            <br />
            <input
              name="descricao"
              type="text"
              className="form-control"
              onChange={handleChange}
              value={cursoAtt && cursoAtt.descricao}
            />
            <br />
            <label>Data Inicio: </label>
            <br />
            <input
              name="dtInicio"
              type="date"
              className="form-control"
              onChange={handleChange}
              value={cursoAtt && cursoAtt.dtInicio}
            />
            <br />
            <label>Data de Término: </label>
            <br />
            <input
              name="dtTermino"
              type="date"
              className="form-control"
              onChange={handleChange}
              value={cursoAtt && cursoAtt.dtTermino}
            />
            <br />
            <label>Quantidade de Alunos: </label>
            <br />
            <input
              name="qtdAlunos"
              type="number"
              className="form-control"
              onChange={handleChange}
              value={cursoAtt && cursoAtt.qtdAlunos}
            />
            <br />
            <label>Categoria: </label>
            <br />
            <input
              name="categoriaFk"
              type="number"
              className="form-control"
              onChange={handleChange}
              value={cursoAtt && cursoAtt.categoriaFk}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-primary" onClick={() => editar()}>
            Editar
          </button>{" "}
          <button
            className="btn btn-danger"

            onClick={()=>setModalEditar(true)}
          >
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>

{/* ------------Modal DELETAR------------------ */}
      <Modal show={modalDeletar}> 
        <Modal.Header closeButton={!modalDeletar}>
          <Modal.Title>Deletando um Curso</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            Confirma a exclusão deste curso : {cursoAtt && cursoAtt.descricao}?
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-danger" onClick={() => deletar()}>
            Sim
          </button>{" "}
          <button
            className="btn btn-secondary"
            onClick={()=>setModalDeletar(true)}
          >
            Não
          </button>
        </Modal.Footer>
      </Modal>
      </div>
    )
}

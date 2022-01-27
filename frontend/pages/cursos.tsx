import Menu from "../components/Menu";
import TabelaCursos from "../components/TabelaCursos";
import { cursoApi } from "./api/curso.api";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import {
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import { Curso } from "./api/curso.api";

export default function Cursos(propCursos) {
  const baseUrl = "https://localhost:5001/api/Cursos";
  const [curso, setCurso] = useState<Curso>({} as Curso);
  
  function salvar(){
    cursoApi.post(curso)
    .then(result => abrirFecharModalIncluir())
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso({
      ...curso,
      [name]: value,
    });
    console.log(curso);
  };

  const [modalIncluir, setModalIncluir] = useState(false);
  const abrirFecharModalIncluir = () => {
    setModalIncluir(!modalIncluir);
  };
  return (
    <div>
      <div>{/* Navbar */}
        <Menu></Menu>
      </div>

      <div className="container">
        {/* Cabeça da Pagina */}
        <Row>
          <Col md="2">
            <h1>CURSOS</h1>
          </Col>
          <Col>
            <button
              onClick={() => abrirFecharModalIncluir()}
              className="btn btn-warning"
            >
              Cadastrar Curso
            </button>
          </Col>
        </Row>
      </div>

      <div>
        {/* Tabela Cursos */}
        <TabelaCursos/> 
      </div>

      <Modal show={modalIncluir}>
        {/* Modal para Cadastros */}
        <Modal.Header closeButton={!modalIncluir}>
          <Modal.Title>Cadastre um Curso</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form-group">
            <label>Descrição: </label>
            <br />
            <input
              name="descricao"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <label>Data Inicio: </label>
            <br />
            <input
              name="dtInicio"
              type="date"
              className="form-control" 
              onChange={handleChange}
            />
            <br />
            <label>Data de Término: </label>
            <br />
            <input
              name="dtTermino"
              type="date"
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <label>Quantidade de Alunos: </label>
            <br />
            <input
              name="qtdAlunos"
              type="number"
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <label>Categoria: </label>
            <br />
            <input
              name="categoriaFk"
              type="number"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-primary" onClick={()=>salvar()}>
            Salvar
          </button>{" "}
          <button
            className="btn btn-danger"
            onClick={()=>abrirFecharModalIncluir()}
          >
            Cancelar
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

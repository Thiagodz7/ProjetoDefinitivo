import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import axios from "axios";
import Cursos from "../components/Cursos";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Row,
  Col,
  Modal,
} from "react-bootstrap";

export default function cursos(propCursos) {
  const baseUrl = "https://localhost:5001/api/Cursos";
  const [data, setData] = useState([]);
  const cursoPost = async () => {
    delete cursoSelecionado.cursoId;
    await axios
      .post(baseUrl, cursoSelecionado)
      .then((response) => {
        setData(data.concat(response.data));
        abrirFecharModalIncluir();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [cursoSelecionado, setCursoSelecionado] = useState({
    cursoId: "",
    descricao: "",
    dtInicio: "",
    dtTermino: "",
    qtdAlunos: 0,
    categoriaFk: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCursoSelecionado({
      ...cursoSelecionado,
      [name]: value,
    });
    console.log(cursoSelecionado);
  };

  const [modalIncluir, setModalIncluir] = useState(false);
  const abrirFecharModalIncluir = () => {
    setModalIncluir(!modalIncluir);
  };

  return (
    <div>
      <div>
        <Menu></Menu>
      </div>

      <div className="container">
        <Row>
          <Col md="2">
            <h1>CURSOS</h1>
          </Col>
          <Col>
            <button
              onClick={() => abrirFecharModalIncluir()}
              className="btn btn-warning"
            >
              Ver Cursos
            </button>
          </Col>
        </Row>
      </div>

      <div>
        <Cursos></Cursos>
      </div>

      <Modal show={modalIncluir} onHide={modalIncluir}>
        <Modal.Header closeButton>
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
              onChange={handleChange }
            />
            <br />
            <label>Data Inicio: </label>
            <br />
            <input
              name="dtInicio"
              type="date"
              className="form-control" 
              onChange={handleChange }
            />
            <br />
            <label>Data de Término: </label>
            <br />
            <input
              name="dtTermino"
              type="date"
              className="form-control"
              onChange={handleChange }
            />
            <br />
            <label>Quantidade de Alunos: </label>
            <br />
            <input
              name="qtdAlunos"
              type="number"
              className="form-control"
              onChange={handleChange }
            />
            <br />
            <label>Categoria: </label>
            <br />
            <input
              name="categoriaFk"
              type="number"
              className="form-control"
              onChange={handleChange }
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-primary" onClick={()=>cursoPost()}>
            Incluir
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

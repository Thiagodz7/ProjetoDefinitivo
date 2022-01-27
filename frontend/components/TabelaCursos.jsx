import axios from "axios";
import { useState, useEffect} from "react";
import { Modal } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TabelaCursos(){
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

    const cursoPut = async () => { 
      await axios
        .put(baseUrl+"/"+cursoSelecionado.cursoId, cursoSelecionado)
        .then((response) => {
          var resposta=response.data
          var dadosAuxiliar=data;
          dadosAuxiliar.map(curso=>{
            if(curso.cursoId===cursoSelecionado.cursoId)
            {
              curso.descricao = resposta.descricao;
              curso.dtInicio = resposta.dtInicio;
              curso.dtTermino = resposta.dtTermino;
              curso.qtdAlunos = resposta.qtdAlunos;
              curso.categoriaFk = resposta.categoriaFk;
            } 
            });
            abrirFecharModalEditar();
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const cursoDelete = async () => { 
      await axios
        .delete(baseUrl+"/"+cursoSelecionado.cursoId)
        .then((response) => {
            setData(data.filter(curso=> curso.cursoId !== response.data));
            abrirFecharModalDeletar();
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
  
    useEffect(() => {
      cursoGet();
    });

    const selecionarCurso=(curso, opcao)=>{
      setCursoSelecionado(curso);
      (opcao == 'Editar') ?
      abrirFecharModalEditar(): abrirFecharModalDeletar();
    }

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
                {data.map((curso) => (
                  <tr key={curso.cursoId}>
                    <th>{curso.cursoId}</th>
                    <th>{curso.descricao}</th>
                    <th>{curso.dtInicio}</th>
                    <th>{curso.dtTermino}</th>
                    <th>{curso.qtdAlunos}</th>
                    <th>{curso.categoriaFk}</th>
                    <th><button onClick={()=>selecionarCurso(curso, "Editar")} className="btn-sm btn-success">Editar</button>-<button onClick={()=>selecionarCurso(curso, "Excluir")}  className="btn-sm btn-danger" >Excluir</button></th>
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
              readOnly value={cursoSelecionado && cursoSelecionado.cursoId}
              name="descricao"
              type="disable"
              className="form-control"
              onChange={handleChange}
              value={cursoSelecionado && cursoSelecionado.cursoId}
            />
            <br />
            <label>Descrição: </label>
            <br />
            <input
              name="descricao"
              type="text"
              className="form-control"
              onChange={handleChange}
              value={cursoSelecionado && cursoSelecionado.descricao}
            />
            <br />
            <label>Data Inicio: </label>
            <br />
            <input
              name="dtInicio"
              type="date"
              className="form-control"
              onChange={handleChange}
              value={cursoSelecionado && cursoSelecionado.dtInicio}
            />
            <br />
            <label>Data de Término: </label>
            <br />
            <input
              name="dtTermino"
              type="date"
              className="form-control"
              onChange={handleChange}
              value={cursoSelecionado && cursoSelecionado.dtTermino}
            />
            <br />
            <label>Quantidade de Alunos: </label>
            <br />
            <input
              name="qtdAlunos"
              type="number"
              className="form-control"
              onChange={handleChange}
              value={cursoSelecionado && cursoSelecionado.qtdAlunos}
            />
            <br />
            <label>Categoria: </label>
            <br />
            <input
              name="categoriaFk"
              type="number"
              className="form-control"
              onChange={handleChange}
              value={cursoSelecionado && cursoSelecionado.categoriaFk}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-primary" onClick={() => cursoPut()}>
            Editar
          </button>{" "}
          <button
            className="btn btn-danger"

            onClick={()=>setModalEditar()}
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
            Confirma a exclusão deste curso : {cursoSelecionado && cursoSelecionado.descricao}?
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn btn-danger" onClick={() => cursoDelete()}>
            Sim
          </button>{" "}
          <button
            className="btn btn-secondary"
            onClick={()=>setModalDeletar()}
          >
            Não
          </button>
        </Modal.Footer>
      </Modal>
      </div>
    )
}

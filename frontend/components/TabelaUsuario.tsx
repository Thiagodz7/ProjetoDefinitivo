import { useState} from "react";
import { Modal } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { userApi } from "../pages/api/usuario.api";

export default function TabelaUsuario(){
    const [usuario, setData] = useState([]);
    function mostrarDados(){
        userApi.lista()
        .then((response) => {
            setData(response.data);
          })
    }

    mostrarDados();
    return (
    <div>
            <div className="container">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Usuário</th>
                  <th>Senha</th>
                </tr>
              </thead>
              <tbody>
                {usuario.map((usuario) => (
                  <tr key={usuario.id}>
                    <th>{usuario.usuario}</th>
                    <th>{usuario.senha}</th>
                    <th><button className="btn-sm btn-success">Editar</button>-<button className="btn-sm btn-danger" >Excluir</button></th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    )
}
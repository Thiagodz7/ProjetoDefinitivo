import Menu from "../components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { userApi } from "./api/usuario.api";
import { useState } from "react";
import  TabelaUsuario  from "../components/TabelaUsuario"
export default function Usuario(){
  
  const [usuario, setUsuario] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({
      ...usuario,
      [name]: value,
    });
    console.log(usuario);
  };

  function salvar(){
    userApi.post(usuario);
  }

  return ( 
    <div>
      <Menu></Menu>
      <div>

        <div className="container">
          <div className="form-group">
            <label>usuario: </label>
            <br />
            <input
              name="usuario"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
            <br />
            <label>senha: </label>
            <br />
            <input
              name="senha"
              type="password"
              className="form-control"
              onChange={handleChange}
            />
            <br />
          </div>
          <button className="btn btn-primary" onClick={() => salvar()}>
            cadastrar-se
          </button>{" "}
        </div>
      </div>
      <TabelaUsuario/>
    </div>
  );
}

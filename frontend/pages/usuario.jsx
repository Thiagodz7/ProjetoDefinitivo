import Menu from "../components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Row, Col, Modal } from "react-bootstrap";
import usuarioApi from "./api/usuarioAPi";

export default function Usuario(){
  let a;  
  a = new usuarioApi();
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
              onChange={a.handleChange}
            />
            <br />
            <label>senha: </label>
            <br />
            <input
              name="senha"
              type="password"
              className="form-control"
              onChange={a.handleChange}
            />
            <br />
          </div>
          <button className="btn btn-primary" onClick={() => a.usuarioPost()}>
            cadastrar-se
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

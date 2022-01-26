import axios from "axios";
import { useEffect, useState } from "react";

export default function usuarioApi() {
  const baseUrl = "https://localhost:5001/api/Usuarios";
  const [data, setData] = useState([]);

  const [usuarioSelecionado, setUsuarioSelecionado] = useState({
    usuarioId: 0,
    usuario: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuarioSelecionado({
      ...usuarioSelecionado,
      [name]: value,
    });
    console.log(usuarioSelecionado);
  };

  const usuarioPost = async () => {
    delete usuarioSelecionado.usuarioId;
    await axios
      .post(baseUrl, usuarioSelecionado)
      .then((response) => {
        setData(data.concat(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selecionarUsuario = (usuario, opcao) => {
    setUsuarioSelecionado(usuario);
  };

  const usuarioGet = async () => {
    await axios
      .get(baseUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const usuarioPut = async () => {
    await axios
      .put(baseUrl + "/" + usuarioSelecionado.usuarioId, usuarioSelecionado)
      .then((response) => {
        var resposta = response.data;
        var dadosAuxiliar = data;
        dadosAuxiliar.map((usuarioo) => {
          if (usuario.usuarioId === usuarioSelecionado.usuarioId) {
            usuario.usuario = resposta.usuario;
            usuario.senha = resposta.senha;
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const usuarioDelete = async () => {
    await axios
      .delete(baseUrl + "/" + cursoSelecionado.cursoId)
      .then((response) => {
        setData(data.filter((usuario) => usuario.usuarioId !== response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    usuarioGet();
  });
}

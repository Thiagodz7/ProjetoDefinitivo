import { API } from "./base.api";

const baseURL = "/Cursos";

export interface Curso{
    cursoId: number,
    descricao: string,
    dtInicio: string,
    dtTermino: string,
    qtdAlunos: number,
    categoriaFk: number,
}

export const cursoApi = {
  async post(curso: Curso) {
    return API.post(baseURL, curso);
  },

  async put(id, curso:Curso) {
    return API.put(`${baseURL}/${id}`, curso);
  },

  async get(id) {
    return API.get(baseURL, { params: { id: id } });
  },

  async list() {
    return API.get(baseURL);
  },

  async delete(id) {
    return API.delete(baseURL, { params: { id: id } });
  },
};
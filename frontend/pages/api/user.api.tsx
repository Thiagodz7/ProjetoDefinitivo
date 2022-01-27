import { API } from "./base.api";

const baseURL = "/Usuarios";

export const userApi = {
  async post(usuario) {
    return API.post(baseURL, usuario);
  },

  async put(id, usuario) {
    return API.put(`${baseURL}/${id}`, usuario);
  },

  async get(id) {
    return API.get(baseURL, { params: { id: id } });
  },

  async list() {
    return API.get(baseURL);
  },

  async delete(usuario) {
    return API.delete(baseURL, usuario);
  },
};


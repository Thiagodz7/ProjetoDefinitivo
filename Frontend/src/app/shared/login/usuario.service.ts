import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://localhost:5001/api/Usuarios'
  formUsuario: Usuario = new Usuario();
  listUsuario: Usuario[];

  postUsuario() {
    return this.http.post(this.baseURL, this.formUsuario);
  }

  putUsuario() {
    return this.http.put(`${this.baseURL}/${this.formUsuario.usuarioId}`, this.formUsuario);
  }

  deleteUsuario(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.listUsuario = res as Usuario[]);
  }

}

import { Injectable } from '@angular/core';
import { Categoria } from './categoria.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  readonly categoriaURL = 'https://localhost:5001/api/Categorias'
  formCategoria: Categoria = new Categoria();
  listCategoria: Categoria[];

  postCategoria() {
    return this.http.post(this.categoriaURL, this.formCategoria);
  }

  putCategoria() {
    return this.http.put(`${this.categoriaURL}/${this.formCategoria.categoriaId}`, this.formCategoria);
  }

  deleteCategoria(id: number) {
    return this.http.delete(`${this.categoriaURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.categoriaURL)
      .toPromise()
      .then(res =>this.listCategoria = res as Categoria[]);
  }

}

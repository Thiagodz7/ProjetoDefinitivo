import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Curso } from 'src/app/shared/curso.model';
import { CursoService } from 'src/app/shared/curso.service';
import { Categoria } from 'src/app/shared/categoria.model';
import { CategoriaService } from 'src/app/shared/categoria.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cursos-cad',
  templateUrl: './cursos-cad.component.html',
  styleUrls: ['./cursos-cad.component.css']
})
export class CursosCadComponent implements OnInit {

  constructor(public service: CursoService , public serviceCategoria: CategoriaService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
    this.serviceCategoria.refreshList();
  }

  populateForm(selectedRecord: Curso) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  getCategoriaId(){
    let cmbTipo = (<HTMLSelectElement>document.getElementById("cmbTipo")).value;
    this.service.formData.categoriaFk = Number(cmbTipo);
  }

  onDelete(id: number) {
    if (confirm('Tem Certeza que Deseja Deletar esse Curso?')) {
      this.service.deleteCurso(id)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.error("Deletado com Sucesso", 'Curso');
          },
          err => { console.log(err) }
        )
    }
  }

onSubmit(form: NgForm) {
  if (this.service.formData.cursoId == 0)
    this.insertRecord(form);
  else
    this.updateRecord(form);
}

insertRecord(form: NgForm) {
  this.service.postCursos().subscribe(
    res => {
      this.resetForm(form);
      this.service.refreshList();
      this.toastr.success('Registrado com Sucesso!', 'Curso')
    },
    err => { console.log(err); }
  );
}

updateRecord(form: NgForm) {
  this.service.putCurso().subscribe(
    res => {
      this.resetForm(form);
      this.service.refreshList();
      this.toastr.info('Atualizado com Sucesso!', 'Cliente')
    },
    err => { console.log(err); }
  );
}

resetForm(form: NgForm) {
  form.form.reset();
  this.service.formData = new Curso();
}

}

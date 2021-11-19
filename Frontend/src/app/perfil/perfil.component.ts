import { Component, OnInit } from '@angular/core';
import { LogService } from '../shared/log.service';
import { UsuarioService } from '../shared/login/usuario.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../shared/login/usuario.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public serviceLog: LogService, public serviceUsuario: UsuarioService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.serviceLog.refreshList();
    this.serviceUsuario.refreshList();
  }

  onSubmit(form: NgForm) {
      this.updateRecord(form);
  }

  updateRecord(form: NgForm) {
    this.serviceUsuario.putUsuario().subscribe(
      res => {
        this.resetForm(form);
        this.serviceUsuario.refreshList();
        this.toastr.info('Senha Alterada com Sucesso!', 'Administrador: ' + this.serviceLog.nome)
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.serviceUsuario.formUsuario = new Usuario();
  }
}

import { Component, NgModule, OnInit } from '@angular/core';
import { Usuario } from './shared/login/usuario.model';
import { UsuarioService } from './shared/login/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { LogService } from './shared/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CastGroupApp';

  constructor(public serviceUsuario: UsuarioService , public serviceLog: LogService ,
    private toastr: ToastrService) { }

    ngOnInit(): void {
        this.serviceUsuario.refreshList();
    }

    mostraNav : boolean = false;
    ocultaLogin : boolean = false;
    cadastrou : boolean = false;
    user : string;
    senha: string;
    public nome: any;

    validarLogin(){
      this.serviceUsuario.refreshList();
      let login = this.serviceUsuario.listUsuario;
      this.user = (<HTMLInputElement>document.getElementById("usuario")).value;
       console.log(this.user)
      this.senha = (<HTMLInputElement>document.getElementById("senha")).value;
       console.log(this.senha)


      for(let i=0;i < login.length;i++){
        if(this.user == login[i].usuario && this.senha == login[i].senha){
          this.mostraNav = true;
          this.ocultaLogin = true;
          this.toastr.success('AEEEE, Tu  conseguiu!', 'Usuário Logado')

          this.nome = (<HTMLLabelElement>document.getElementById("nome")).textContent;
          this.serviceLog.nome = this.user;
          this.serviceUsuario.formUsuario.usuarioId = login[i].usuarioId;
          this.cadastrou = true;
        }
        else if(this.user != login[i].usuario && this.senha != login[i].senha && this.cadastrou == false){
          this.mostraNav = false;
          this.ocultaLogin = false;
          /* this.toastr.error('Tente Novamente', 'Usuário e/ou Senha Incorreta') */
        }
      }
    }

    resetForm(form: NgForm) {
      form.form.reset();
      this.serviceUsuario.formUsuario = new Usuario();
    }
}

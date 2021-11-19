import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Curso } from 'src/app/shared/curso.model';
import { CursoService } from 'src/app/shared/curso.service';
import { Categoria } from 'src/app/shared/categoria.model';
import { CategoriaService } from 'src/app/shared/categoria.service';
import { FormsModule } from '@angular/forms';
import { Log } from '../shared/log.model';
import { LogService } from '../shared/log.service';
import { UsuarioService } from '../shared/login/usuario.service';

@Component({
  selector: 'app-cursos-cad',
  templateUrl: './cursos-cad.component.html',
  styleUrls: ['./cursos-cad.component.css']
})
export class CursosCadComponent implements OnInit {

  constructor(public service: CursoService , public serviceCategoria: CategoriaService,public serviceLog: LogService,
    private toastr: ToastrService, public serviceUsuario: UsuarioService) { }

  ngOnInit(): void {
    this.service.refreshList();
    this.serviceCategoria.refreshList();
    this.serviceLog.refreshList();
  }

  populateForm(selectedRecord: Curso) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

/* ---------------------------------------------- */

  getCategoriaId(){
    let cmbTipo = (<HTMLSelectElement>document.getElementById("cmbTipo")).value;
    this.service.formData.categoriaFk = Number(cmbTipo);

    if(this.service.formData.categoriaFk == 0)
    {
      (<HTMLLabelElement>document.getElementById("erro4")).textContent = 'Campo Precisa ser preenchido!';
    }
  }
  apagaLabelCategoria(){
    (<HTMLLabelElement>document.getElementById("erro4")).textContent = ''
  }
/* ---------------------------------------------- */

  validaDescricao(){
    if(this.service.formData.descricao == '')
    {
      (<HTMLLabelElement>document.getElementById("erro")).textContent = 'Campo Precisa ser preenchido!';
    }
  }
  apagaLabelDescricao(){
    (<HTMLLabelElement>document.getElementById("erro")).textContent = ''
  }

/* ---------------------------------------------- */
  validaDtInicio(){
    if(this.service.formData.dtInicio == '')
    {
      (<HTMLLabelElement>document.getElementById("erro2")).textContent = 'Campo Precisa ser preenchido!';
    }
  }
/* ---------------------------------------------- */
  validaDtTermino(){
    if(this.service.formData.dtTermino == '')
    {
      (<HTMLLabelElement>document.getElementById("erro3")).textContent = 'Campo Precisa ser preenchido!';
    }
  }
/* ---------------------------------------------- */
  comparaData(){
    (<HTMLLabelElement>document.getElementById("erro2")).textContent = '';
    (<HTMLLabelElement>document.getElementById("erro3")).textContent = '';

      var data_1 = new Date(this.service.formData.dtInicio);
      console.log(data_1);

      var data_2 = new Date(this.service.formData.dtTermino);
      console.log(data_2);

      var dataAgora = new Date();
      dataAgora.setDate(dataAgora.getDate() - 1);
      console.log(dataAgora)
      /* console.log(dataAgora); */

      if (data_1 > data_2) {
        this.toastr.error("Data Inicial não pode ser maior/igual que a Data final","TEM ERRO ÁI NA DATA");
        this.service.formData.dtInicio = " "
        this.service.formData.dtTermino = " "
     }
     if (data_1 < dataAgora || data_2 < dataAgora) {
      this.toastr.error("As Datas não podem estar marcadas no Passado","VIAJANTE NO TEMPO?");
      this.service.formData.dtInicio = " "
      this.service.formData.dtTermino = " "
   }

   let datas
   datas = this.service.list
   for(let i=0;i < datas.length;i++){
     if(this.service.formData.dtInicio == datas[i].dtInicio)
     {
      this.toastr.error("Existe(m) curso(s) planejados(s) dentro do período informado.")
      this.service.formData.dtInicio = " "
     }
   }
   for(let i=0;i < datas.length;i++){
    if(this.service.formData.dtTermino == datas[i].dtTermino)
    {
      this.toastr.error("Existe(m) curso(s) planejados(s) dentro do período informado.")
      this.service.formData.dtTermino = " "
    }
  }
  }
/* ---------------------------------------------- */

  onDelete(id: number) {
    let dataDelete
    dataDelete = this.service.list
    var dataAgora = new Date();
     /* dataAgora.setHours(dataAgora.getHours() + 10); */  /* --->>> Para Testar Na apresentação <<<------- */
    var data_fim = new Date();

    //Inserção de Logs Cadastro
    let inclusao = new Date();
    this.serviceLog.formLog.dtInclusao = inclusao.toDateString() + " " + inclusao.toTimeString();
    this.serviceLog.formLog.acao = "Deletou";
    this.serviceLog.formLog.usuario = this.serviceLog.nome

    for(let i=0;i < dataDelete.length;i++){
      if(dataDelete[i].cursoId == id){
        data_fim = new Date(dataDelete[i].dtTermino);
        data_fim.setDate(data_fim.getDate() + 1);
        console.log(data_fim);
        console.log(dataAgora)
      }
    }

    if(dataAgora>=data_fim){
      this.toastr.error("O Curso Já Foi Realizado, portanto impossível excluir", 'Curso');
    }
   else{
      if (confirm('Tem Certeza que Deseja Deletar esse Curso?')) {
        this.service.deleteCurso(id)
          .subscribe(
            res => {
              this.service.refreshList();
              this.toastr.error("Deletado com Sucesso", 'Curso');
            },
            err => { console.log(err) }
          )

        //Comando de Log para inserir no Banco
        this.serviceLog.postLog().subscribe(
           res => {
             this.serviceLog.refreshList();
             /* this.toastr.success('EFETUADO', 'Log') */
           },
            err => { console.log(err); }
          );
      }
     }
  }
  /* ----------------------------- */
   pesquisa : string = '';
   catIdPesquisa: number = 0;
  pesquisar(){
    this.pesquisa = (<HTMLInputElement>document.getElementById("pesquisa")).value;
    let categoria = this.serviceCategoria.listCategoria;

    for(let i=0;i < categoria.length;i++){
      let compara = categoria[i].categoria;
      if(compara.toLocaleLowerCase() == this.pesquisa.toLocaleLowerCase()){
        this.catIdPesquisa = Number(categoria[i].categoriaId)
      }
      else if (this.pesquisa == ''){
        this.catIdPesquisa = 0;
      }
    }
  }

onSubmit(form: NgForm) {
  if (this.service.formData.cursoId == 0)
  {
    //Inserção de Logs Cadastro
    let inclusao = new Date();
    this.serviceLog.formLog.dtInclusao = inclusao.toDateString() + " " + inclusao.toTimeString();
    this.serviceLog.formLog.acao = "Cadastrou";
    this.serviceLog.formLog.usuario = this.serviceLog.nome
    //------------------------------
    this.insertRecord(form);
  }
  else
  {
    //Inserção de Logs Edição
    let inclusao = new Date();
    this.serviceLog.formLog.dtInclusao = inclusao.toDateString() + " " + inclusao.toTimeString();
    this.serviceLog.formLog.acao = "Editou";
    this.serviceLog.formLog.usuario = this.serviceLog.nome
    //------------------------------
    this.updateRecord(form);
  }
}

insertRecord(form: NgForm) {
  this.service.postCursos().subscribe(
    res => {
      this.resetForm(form);
      this.service.refreshList();
      /* this.toastr.success('EFETUADO', 'Log') */
    },
    err => { console.log(err); }
  );

   //Comando de Log para inserir no Banco
   this.serviceLog.postLog().subscribe(
    res => {
      this.resetForm(form);
      this.serviceLog.refreshList();
      /* this.toastr.success('EFETUADO', 'Log') */
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

     //Comando de Log para inserir no Banco
     this.serviceLog.postLog().subscribe(
      res => {
        this.resetForm(form);
        this.serviceLog.refreshList();
        this.toastr.success('EFETUADO', 'Log')
      },
      err => { console.log(err); }
    );
}

resetForm(form: NgForm) {
  form.form.reset();
  this.service.formData = new Curso();
}

resetFormLog(form: NgForm) {
  form.form.reset();
  this.serviceLog.formLog = new Log();
}

}

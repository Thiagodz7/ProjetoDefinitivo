import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CursosCadComponent } from './cursos-cad/cursos-cad.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  {path: 'cursos', component: CursosCadComponent},
  {path: 'home', component: HomeComponent },
  {path: 'log',  component: PerfilComponent},
  {path: 'cadastrar',  component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

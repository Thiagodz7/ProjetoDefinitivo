import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosCadComponent } from './cursos-cad/cursos-cad.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'cursos', component: CursosCadComponent},
  {path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

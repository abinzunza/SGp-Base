import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MostrarFuncionariosComponent } from './funcionarios/mostrar-funcionarios.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'funcionarios',
    component: MostrarFuncionariosComponent
  },
  {
    path: 'planillas',
    loadChildren: './planillas/planillas.module#PlanillasModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ } 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomeComponent2 } from './home2/home.component';
import { MostrarFuncionariosComponent } from './funcionarios/mostrar-funcionarios.component';
import { MostrarFuncionariosComponent2 } from './adminFuncionarios/mostrar-funcionarios.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
   {
    path: 'home2',
    component: HomeComponent2
  },
  {
    path: 'funcionarios',
    component: MostrarFuncionariosComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'planillas',
    loadChildren: './planillas/planillas.module#PlanillasModule'
  },
  {
    path: 'funcionarios2',
    component: MostrarFuncionariosComponent2
  },
  {
    path: 'planillas2',
    loadChildren: './adminPlanillas/planillas.module#PlanillasModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ } 

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarPlanillasComponent } from './mostrar-planillas/mostrar-planillas.component';
import { CrearPlanillaComponent } from './crear-planilla/crear-planilla.component';
import { VerPlanillaComponent } from './ver-planilla/ver-planilla.component';
import { ModificarPlanillaComponent } from './modificar-planilla/modificar-planilla.component';
import { CrearPlanillaDeactivateGuard } from '../guard/crear-planilla-deactivate.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'mostrar', pathMatch: 'full' },
	{ path: 'mostrar', component: MostrarPlanillasComponent },
  	{ path: 'crear', component: CrearPlanillaComponent, canDeactivate:[CrearPlanillaDeactivateGuard] },
  	{ path: 'ver/:id', component: VerPlanillaComponent },
  	{ path: 'modificar/:id', component: ModificarPlanillaComponent, canDeactivate:[CrearPlanillaDeactivateGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanillasRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarPlanillasComponent2 } from './mostrar-planillas2/mostrar-planillas.component';
import { VerPlanillaComponent2 } from './ver-planillas2/ver-planilla.component';
import { CrearPlanillaDeactivateGuard } from '../guard/crear-planilla-deactivate.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'mostrar2', pathMatch: 'full' },
	{ path: 'mostrar2', component: MostrarPlanillasComponent2 },
  	{ path: 'ver2/:id', component: VerPlanillaComponent2 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanillasRoutingModule { }
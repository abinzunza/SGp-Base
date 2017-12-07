import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlanillasRoutingModule } from './planillas-routing.module';
import { MostrarPlanillasComponent2 } from './mostrar-planillas2/mostrar-planillas.component';

import { VerPlanillaComponent2 } from './ver-planillas2/ver-planilla.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PlanillasRoutingModule
  ],
  declarations: [MostrarPlanillasComponent2,VerPlanillaComponent2]
})
export class PlanillasModule { }

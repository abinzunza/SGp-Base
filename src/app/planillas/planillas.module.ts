import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PlanillasRoutingModule } from './planillas-routing.module';
import { MostrarPlanillasComponent } from './mostrar-planillas/mostrar-planillas.component';
import { CrearPlanillaComponent } from './crear-planilla/crear-planilla.component';
import { VerPlanillaComponent } from './ver-planilla/ver-planilla.component';
import { ModificarPlanillaComponent } from './modificar-planilla/modificar-planilla.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PlanillasRoutingModule
  ],
  declarations: [MostrarPlanillasComponent,CrearPlanillaComponent,VerPlanillaComponent,ModificarPlanillaComponent]
})
export class PlanillasModule { }

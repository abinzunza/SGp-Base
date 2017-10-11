import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LOCALE_ID } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MostrarPlanillasComponent } from './mostrar-planillas/mostrar-planillas.component';
import { CrearPlanillaComponent } from './crear-planilla/crear-planilla.component';
import { VerPlanillaComponent } from './ver-planilla/ver-planilla.component';
import { ModificarPlanillaComponent } from './modificar-planilla/modificar-planilla.component';
import { CrearPlanillaDeactivateGuard } from './guard/crear-planilla-deactivate.guard';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/mostrarPlanillas', pathMatch: 'full' },
	{ path: 'mostrarPlanillas', component: MostrarPlanillasComponent },
  { path: 'crearPlanilla', component: CrearPlanillaComponent, canDeactivate:[CrearPlanillaDeactivateGuard] },
  { path: 'verPlanilla/:id', component: VerPlanillaComponent },
  { path: 'modificarPlanilla/:id', component: ModificarPlanillaComponent, canDeactivate:[CrearPlanillaDeactivateGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    MostrarPlanillasComponent,
    CrearPlanillaComponent,
    VerPlanillaComponent,
    ModificarPlanillaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-ES" },CrearPlanillaDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
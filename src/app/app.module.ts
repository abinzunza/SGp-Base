import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LOCALE_ID } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MostrarPlanillasComponent } from './mostrar-planillas/mostrar-planillas.component';
import { CrearPlanillaComponent } from './crear-planilla/crear-planilla.component';

const appRoutes: Routes = [
	{ path: 'crearPlanilla', component: CrearPlanillaComponent},
	{ path: 'mostrarPlanillas', component: MostrarPlanillasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MostrarPlanillasComponent,
    CrearPlanillaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-ES" }],
  bootstrap: [AppComponent]
})
export class AppModule { }

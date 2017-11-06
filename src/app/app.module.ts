import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LOCALE_ID } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MostrarFuncionariosComponent } from './funcionarios/mostrar-funcionarios.component';

import { CrearPlanillaDeactivateGuard } from './guard/crear-planilla-deactivate.guard';
import { PaginadorService } from './servicios/paginador.service';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MostrarFuncionariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-ES" },CrearPlanillaDeactivateGuard,PaginadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

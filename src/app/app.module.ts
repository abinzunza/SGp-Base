import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LOCALE_ID } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeComponent2 } from './home2/home.component';
import { MostrarFuncionariosComponent } from './funcionarios/mostrar-funcionarios.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MostrarFuncionariosComponent2 } from './adminFuncionarios/mostrar-funcionarios.component';

import { CrearPlanillaDeactivateGuard } from './guard/crear-planilla-deactivate.guard';
import { PaginadorService } from './servicios/paginador.service';
import { UserService } from './servicios/user.service';

import { AuthService } from './servicios/auth.service';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent2,
    MostrarFuncionariosComponent,
    LoginComponent,
    MostrarFuncionariosComponent2,
    RegisterComponent
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

  providers: [{ provide: LOCALE_ID, useValue: "es-ES" },CrearPlanillaDeactivateGuard,PaginadorService,UserService,AuthService],

  bootstrap: [AppComponent]
})
export class AppModule { }

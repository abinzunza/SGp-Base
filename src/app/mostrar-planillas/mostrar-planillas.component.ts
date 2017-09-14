import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-planillas',
  template: '<a routerLink="/crearPlanilla"><button>Crear planilla</button></a>',
  styles: []
})
export class MostrarPlanillasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

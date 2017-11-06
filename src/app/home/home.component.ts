import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<h1>Inicio!</h1>',
  styles: []
})
export class HomeComponent implements OnInit {

	lat: number = -33.052086;
 	lng: number = -71.608562;

  constructor() { }

  ngOnInit() {
  }

}

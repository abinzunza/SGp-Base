import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

	lat: number = -33.052086;
 	lng: number = -71.608562;

  constructor() { }

  ngOnInit() {
  }

}

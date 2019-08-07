import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['li{border-left:1px solid #ccc;padding-right:5px}']
})

export class AppComponent {
	
	width;

	ngOnInit(){
		this.width = window.innerWidth;
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
	  	this.width = window.innerWidth;
	}
}
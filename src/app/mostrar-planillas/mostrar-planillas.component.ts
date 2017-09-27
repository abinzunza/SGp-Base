import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../servicios/turno.service';

@Component({
    selector: 'app-mostrar-planillas',
    templateUrl: './mostrar-planillas.component.html',
	  styleUrls: ['./mostrar-planillas.component.css'],
    providers: [TurnoService]
})

export class MostrarPlanillasComponent implements OnInit {

	  planillas;
  	
    constructor(private turnoService:TurnoService) { }

  	ngOnInit(){
  	    this.turnoService.listarPlanillas().subscribe(res => this.planillas = res);
  	}

  	eliminarPlanilla(fechaAux,i){
  	    this.planillas.splice(i,1);
    		let fecha = new Date(fechaAux);
    		this.turnoService.eliminarPlanilla(fecha);
  	}

}

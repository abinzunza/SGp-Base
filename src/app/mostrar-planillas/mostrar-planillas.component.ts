import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../servicios/turno.service';
declare var swal:any;

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
  	    this.turnoService.listarPlanillas().subscribe(res => this.planillas = res.reverse());
  	}

  	eliminarPlanilla(fechaAux,i){
  		swal({
            text: '¿Estás seguro?',
            type: 'warning',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showCancelButton: true,
            reverseButtons: true,
            showCloseButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: 'green',
		    cancelButtonColor: 'red'
        }).then((isOk: boolean) => {
            if(isOk){
            	this.planillas.splice(i,1);
    			this.turnoService.eliminarPlanilla(new Date(fechaAux));
            }
        },(dismiss)=>console.log("Modal dismiss by",dismiss));
  	}

}

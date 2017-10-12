import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { TurnoService } from '../servicios/turno.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-verPlanilla',
  templateUrl: './ver-planilla.component.html',
  styleUrls: ['./ver-planilla.component.css'],
  providers: [TurnoService]
})

export class VerPlanillaComponent implements OnInit {

	empleados = {};
	planilla = null;
	diaSeleccionado = -1;
	turnoSeleccionado = -1;
	diasSemana = [];
	turnosModal:any[] = [];

	constructor(private turnoService:TurnoService, private route: ActivatedRoute, private modalService:NgbModal){}
	
	ngOnInit(){
		this.diasSemana = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
		this.turnoService.obtenerEmpleados()
			.subscribe(resEmpleados => resEmpleados.forEach(elemento => this.empleados[elemento._id] = {nombre:elemento.nombre,cargo:elemento.cargo}));
		this.route.params.subscribe(params => this.turnoService.obtenerPlanilla(new Date(params['id'])).subscribe(resPlanilla => this.planilla = resPlanilla));
	}

	detalleTurno(dia,turno,modal){
		this.turnosModal.length = 0; //Limpia arr modal
		var turnos = this.planilla.dias[dia].turnos.filter(function(t){return (t.inicio === turno || (Number(t.inicio+t.duracion) > turno) && t.inicio < turno)});
		if(turnos.length!==0){
			this.diaSeleccionado = dia;
			this.turnoSeleccionado = turno;
			for(let i = 0;i<turnos.length;++i) {
				this.turnosModal.push({
					nombre:this.empleados[turnos[i].empleado].nombre,
					cargo:this.empleados[turnos[i].empleado].cargo,
					inicio:(turnos[i].inicio+8)+":00",
					fin:(turnos[i].inicio+turnos[i].duracion+8)+":00",
					idx:Number(this.planilla.dias[dia].turnos.indexOf(turnos[i]))
				});
			}
			this.modalService.open(modal);
		}
	}

	hayTurnos(n:number,dia:number) {
		var turnos = this.planilla.dias[dia].turnos.filter(function(t){return (t.inicio === n || (Number(t.inicio+t.duracion) > n) && t.inicio < n)})
		return turnos.length;
	}

}
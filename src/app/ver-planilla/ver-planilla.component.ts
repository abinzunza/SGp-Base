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

	constructor(private turnoService:TurnoService, private route: ActivatedRoute, private modalService:NgbModal){}
	
	ngOnInit(){
		this.diasSemana = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
		this.turnoService.obtenerEmpleados()
			.subscribe(resEmpleados => resEmpleados.forEach(elemento => this.empleados[elemento._id] = {nombre:elemento.nombre,cargo:elemento.cargo}));
		this.route.params.subscribe(params => this.turnoService.obtenerPlanilla(new Date(params['id'])).subscribe(resPlanilla => this.planilla = resPlanilla));
	}

	detalleTurno(dia,turno,modal){
		if(this.planilla.dias[dia].turnos[turno].empleados.length!==0){
			this.diaSeleccionado = dia;
			this.turnoSeleccionado = turno;
			this.modalService.open(modal);
		}
	}

}
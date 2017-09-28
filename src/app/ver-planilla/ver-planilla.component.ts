import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { TurnoService } from '../servicios/turno.service';

@Component({
  selector: 'app-verPlanilla',
  templateUrl: './ver-planilla.component.html',
  styleUrls: ['./ver-planilla.component.css'],
  providers: [TurnoService]
})

export class VerPlanillaComponent implements OnInit {

	empleados = {};
	semana = null;
	fecha_inicio:Date;

	constructor(private turnoService:TurnoService, private route: ActivatedRoute){}
	
	ngOnInit(){
		this.route.params.subscribe(params => this.fecha_inicio = new Date(params['id']));
		this.turnoService.obtenerEmpleados()
			.subscribe(resEmpleados => resEmpleados.forEach(elemento => this.empleados[elemento._id] = {nombre:elemento.nombre,cargo:elemento.cargo}));
		this.turnoService.obtenerPlanilla(this.fecha_inicio)
			.subscribe(resPlanilla => this.semana = resPlanilla);
	}

}
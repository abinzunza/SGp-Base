import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { TurnoService } from '../servicios/turno.service';
import { IPlanillaCanDeactivate } from '../guard/iplanilla-candeactivate';

@Component({
    selector: 'app-modificarPlanilla',
  	templateUrl: './modificar-planilla.component.html',
  	styleUrls: ['./modificar-planilla.component.css'],
  	providers: [TurnoService]
})

export class ModificarPlanillaComponent implements OnInit, IPlanillaCanDeactivate {

	unsavedChanges:boolean = false;
	fecha_inicio:Date;
	id_dia:number = -1;
	id_turno:number = -1;
	id_cargo:number = -1;
	id_empleado:number = -1;
	semana = null;
	cargos:string[] = [];
	empleados = {};
	objectKeys = Object.keys;

	constructor(private turnoService:TurnoService, private route: ActivatedRoute){}

	ngOnInit(){
		this.cargos = ['Auxiliar','Laboratorio','Matrona','Paramedico','Secretaria'];
		this.route.params.subscribe(params => this.fecha_inicio = new Date(params['id']));
		this.turnoService.obtenerEmpleados()
			.subscribe(resEmpleados => resEmpleados.forEach(elemento => this.empleados[elemento._id] = {nombre:elemento.nombre,cargo:elemento.cargo}));
		this.turnoService.obtenerPlanilla(this.fecha_inicio)
			.subscribe(resPlanilla => this.semana = resPlanilla);
	}

	agregarTurno(){
		if(this.comprobarSeleccion()){
			this.unsavedChanges = true;
			this.semana.dias[this.id_dia].turnos[this.id_turno].empleado = this.objectKeys(this.empleados)[this.id_empleado];
			this.resetIds();
		}else
			console.log("Error: Seleccione un valor para cada campo.");
	}

	eliminarTurno(turno){
		this.unsavedChanges = true;
		turno.empleado = null;
	}

	comprobarSeleccion(){
		return this.id_dia != -1 && this.id_turno != -1 && this.id_cargo != -1 && this.id_empleado != -1;
	}

	resetIds(){
		this.id_dia = -1;
		this.id_turno = -1;
		this.id_cargo = -1;
		this.id_empleado = -1;
	}

	modificarPlanilla(){
		this.unsavedChanges = false;
		this.turnoService.modificarPlanilla({
			fecha_inicio:this.semana.fecha_inicio,
			fecha_fin:this.semana.fecha_fin,
			dias:this.semana.dias
		});
	}

	puedeDesactivar(){
		if(!this.unsavedChanges)return true;
		return confirm('¿Realmente quieres salir? Perderás todos los cambios no guardados.');
	}

}
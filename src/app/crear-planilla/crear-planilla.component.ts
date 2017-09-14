import { Component } from '@angular/core';
import { Semana } from '../entidades/semana';
import { Turno } from '../entidades/turno';
import { Empleado } from '../entidades/empleado';
import { TurnoService } from '../servicios/turno.service';

@Component({
  selector: 'app-crearPlanilla',
  templateUrl: './crear-planilla.component.html',
  styleUrls: ['./crear-planilla.component.css'],
  providers: [TurnoService]
})

export class CrearPlanillaComponent {

	fechaInicial:Date = null;
	fechaFinal:Date = null;
	id_semana:number = 0;
	id_dia:number = 0;
	id_turno:number = 0;
	id_actividad:number = 0;
	id_empleado:number = 0;
	semana:Semana = null;
	actividades:string[] = [];
	empleados:Empleado[] = [];


	constructor(private turnoService:TurnoService){
		this.fechaInicial = new Date();
		this.fechaInicial.setDate(this.fechaInicial.getDate()-1);
		this.fechaInicial.setDate(this.fechaInicial.getDate()-this.fechaInicial.getDay()+1);
		this.fechaFinal = new Date(this.fechaInicial);
		this.fechaFinal.setDate(this.fechaFinal.getDate()+6);
		this.semana = new Semana(this.fechaInicial,this.fechaFinal);
		this.actividades = ['Auxiliar','Laboratorio','Matrona','Médico','Paramédico','Secretaria'];
		this.empleados = new Array(new Empleado('Cristian','Paramédico'), new Empleado('Consuelo', 'Matrona'), new Empleado('Diego', 'Médico'));
	}
	
	guardarPlanilla(){
		this.turnoService.guardarPlanilla({
			fecha_inicio:this.semana.fechaInicial,
			fecha_fin:this.semana.fechaFinal,
			dias:this.semana.dias
		});
	}

	agregarTurno(){
		this.semana.dias[this.id_dia].turnos[this.id_turno].actividad = this.actividades[this.id_actividad];
		this.semana.dias[this.id_dia].turnos[this.id_turno].empleado = this.empleados[this.id_empleado].nombre;
	}

	eliminarTurno(turno:Turno){
		turno.actividad = null;
		turno.empleado = null;
	}

}
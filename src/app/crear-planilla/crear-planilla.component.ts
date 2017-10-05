import { Component, OnInit} from '@angular/core';
import { Semana } from '../entidades/semana';
import { TurnoService } from '../servicios/turno.service';
import { Router } from '@angular/router';
import { IPlanillaCanDeactivate } from '../guard/iplanilla-candeactivate';

@Component({
  selector: 'app-crearPlanilla',
  templateUrl: './crear-planilla.component.html',
  styleUrls: ['./crear-planilla.component.css'],
  providers: [TurnoService]
})

export class CrearPlanillaComponent implements OnInit, IPlanillaCanDeactivate {

	unsavedChanges:boolean = false;
	fechaInicial:Date = null;
	fechaFinal:Date = null;
	id_dia:number = -1;
	id_turno:number = -1;
	id_cargo:number = -1;
	id_empleado:number = -1;
	semana = null;
	cargos:string[] = [];
	empleados = {};
	objectKeys = Object.keys;

	constructor(private turnoService:TurnoService, private router:Router){}

	ngOnInit(){
		this.asignarFecha();
		this.cargos = ['TENS','Administrativo','Lab Biología','Matron(a)','Lab Andrología'];
		this.turnoService.obtenerEmpleados()
			.subscribe(resEmpleados => resEmpleados.forEach(elemento => this.empleados[elemento._id] = {nombre:elemento.nombre,cargo:elemento.cargo,horas:0}));
		this.semana = new Semana(this.fechaInicial,this.fechaFinal);
	}

	asignarFecha(){
		this.turnoService.obtenerFecha().subscribe(res => {
			this.fechaInicial = new Date(res.fecha_inicio);
			this.fechaFinal = new Date(res.fecha_fin);
		});
	}

	agregarTurno(){
		if(this.comprobarSeleccion()){
			if(this.semana.dias[this.id_dia].turnos[this.id_turno].empleado.indexOf(this.objectKeys(this.empleados)[this.id_empleado])===-1){
				if(this.empleados[this.objectKeys(this.empleados)[this.id_empleado]].horas<2 || confirm("Éste empleado cumplió las 2 horas. ¿Estás seguro de añadirle un nuevo turno?")){
					this.unsavedChanges = true;
					this.empleados[this.objectKeys(this.empleados)[this.id_empleado]].horas++;
					this.semana.dias[this.id_dia].turnos[this.id_turno].empleado.push(this.objectKeys(this.empleados)[this.id_empleado]);
					this.resetIds();
				}
			}else
				alert("Éste empleado ya se encuentra en éste turno.");
		}else
			alert("Error: Seleccione un valor para cada campo.");
	}

	eliminarTurno(turno,pos){
		this.unsavedChanges = true;
		this.empleados[turno.empleado[pos]].horas--;
		turno.empleado.splice(pos,1);
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

	guardarPlanilla(){
		this.unsavedChanges = false;
		this.turnoService.guardarPlanilla({
			fecha_inicio:this.fechaInicial,
			fecha_fin:this.fechaFinal,
			dias:this.semana.dias
		}).subscribe(null,null,()=>this.router.navigate(['/mostrarPlanillas']));
	}

	puedeDesactivar(){
		if(!this.unsavedChanges)return true;
		return confirm('¿Realmente quieres salir? Perderás todos los cambios no guardados.');
	}

}
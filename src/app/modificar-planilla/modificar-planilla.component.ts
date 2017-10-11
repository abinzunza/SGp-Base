import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TurnoService } from '../servicios/turno.service';
import { IPlanillaCanDeactivate } from '../guard/iplanilla-candeactivate';
declare var swal:any;

@Component({
    selector: 'app-modificarPlanilla',
  	templateUrl: './modificar-planilla.component.html',
  	styleUrls: ['./modificar-planilla.component.css'],
  	providers: [TurnoService]
})

export class ModificarPlanillaComponent implements OnInit, IPlanillaCanDeactivate {
	
	unsavedChanges:boolean = false;
	id_dia:number = -1;
	id_turno:number = -1;
	id_cargo:number = -1;
	id_empleado:number = -1;
	diaSeleccionado = -1;
	turnoSeleccionado = -1;
	empleados = {};
	objectKeys = Object.keys;
	cargos = [];
	diasSemana = [];
	planilla = null;

	constructor(private turnoService:TurnoService, private route: ActivatedRoute, private router:Router, private modalService:NgbModal){}

	ngOnInit(){
		this.cargos = ['Administrativo','Tens','Matron(a)','Lab Biología','Lab Andrología'];
		this.diasSemana = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
		this.turnoService.obtenerEmpleados()
			.subscribe(resEmpleados => resEmpleados.forEach(elemento => this.empleados[elemento._id] = {nombre:elemento.nombre,cargo:elemento.cargo,horas:0}));
		this.route.params.subscribe(params => this.turnoService.obtenerPlanilla(new Date(params['id'])).
			subscribe(resPlanilla => {
				this.planilla = resPlanilla;
				this.planilla.dias.forEach(dia=>dia.turnos.forEach(turno=>turno.empleados.forEach(empleado=>this.empleados[empleado].horas++)));
			}));
	}

	modificarPlanilla(){
		this.unsavedChanges = false;
		this.turnoService.modificarPlanilla(this.planilla).subscribe(null,null,()=>this.router.navigate(['/mostrarPlanillas']));
	}

	agregarTurno(){
		if(this.comprobarSeleccion()){
			if(this.planilla.dias[this.id_dia].turnos[this.id_turno].empleados.indexOf(this.objectKeys(this.empleados)[this.id_empleado])===-1){
				if(this.empleados[this.objectKeys(this.empleados)[this.id_empleado]].horas<1){
					this.unsavedChanges = true;
					this.empleados[this.objectKeys(this.empleados)[this.id_empleado]].horas++;
					this.planilla.dias[this.id_dia].turnos[this.id_turno].empleados.push(this.objectKeys(this.empleados)[this.id_empleado]);
					this.resetIds();
				}else
					swal({
			            text: 'Éste empleado cumplió las 44 horas. ¿Estás seguro de añadirle un nuevo turno?',
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
			            	this.unsavedChanges = true;
							this.empleados[this.objectKeys(this.empleados)[this.id_empleado]].horas++;
							this.planilla.dias[this.id_dia].turnos[this.id_turno].empleados.push(this.objectKeys(this.empleados)[this.id_empleado]);
							this.resetIds();
			            }
			        },(dismiss)=>console.log("Modal dismiss by",dismiss));
			}else
				swal({title: 'Oops...',text: 'Éste empleado ya se encuentra en éste turno',type: 'error',allowOutsideClick: false,allowEscapeKey: false,allowEnterKey: false,showCloseButton: true});
		}else
			swal({title: 'Oops...',text: 'Seleccione un valor para cada campo',type: 'error',allowOutsideClick: false,allowEscapeKey: false,allowEnterKey: false,showCloseButton: true});
	}

	eliminarTurno(turno,pos){
		this.unsavedChanges = true;
		this.empleados[turno.empleados[pos]].horas--;
		turno.empleados.splice(pos,1);
	}

	detalleTurno(dia,turno,modal){
		if(this.planilla.dias[dia].turnos[turno].empleados.length!==0){
			this.diaSeleccionado = dia;
			this.turnoSeleccionado = turno;
			this.modalService.open(modal);
		}
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

	puedeDesactivar(){
		return !this.unsavedChanges;
	}

}
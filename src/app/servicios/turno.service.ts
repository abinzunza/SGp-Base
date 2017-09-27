import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TurnoService {

	headers = new Headers();;

	constructor(private http:Http) {}
  
	guardarPlanilla(planilla){
	  	return this.http.post('http://localhost:2100/crearPlanilla',planilla,this.headers);
	}

	obtenerEmpleados(){
    	return this.http.get('http://localhost:2100/obtenerEmpleados').map(res=>res.json());
	}

	obtenerPlanilla(fecha:Date){
		let fechaInicial = fecha.getFullYear() + "-" + (fecha.getMonth()+1) + "-" + fecha.getDate();
		let fechaAux = new Date(fechaInicial);
		fechaAux.setDate(fechaAux.getDate()+7);
		let fechaFinal = fechaAux.getFullYear() + "-" + (fechaAux.getMonth()+1) + "-" + fechaAux.getDate();
		return this.http.get('http://localhost:2100/obtenerPlanilla?fechaInicial='+fechaInicial+'&fechaFinal='+fechaFinal).map(res=>res.json());
	}

	listarPlanillas(){
		return this.http.get('http://localhost:2100/obtenerPlanillas').map(res => res.json());
	}

	obtenerFecha(){
		return this.http.get('http://localhost:2100/obtenerFecha').map(res => res.json());
	}

	modificarPlanilla(planilla){
		this.http.put('http://localhost:2100/modificarPlanilla',planilla,this.headers).subscribe();
	}

	eliminarPlanilla(fecha:Date){
		let fechaInicial = fecha.getFullYear() + "-" + (fecha.getMonth()+1) + "-" + fecha.getDate();
		let fechaAux = new Date(fechaInicial);
		fechaAux.setDate(fechaAux.getDate()+7);
		let fechaFinal = fechaAux.getFullYear() + "-" + (fechaAux.getMonth()+1) + "-" + fechaAux.getDate();
		this.http.delete('http://localhost:2100/eliminarPlanilla?fechaInicial='+fechaInicial+'&fechaFinal='+fechaFinal,this.headers)
		.subscribe();
	}
 
}
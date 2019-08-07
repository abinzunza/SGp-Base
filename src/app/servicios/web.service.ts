import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebService {

	private url:string;
	private headers:Headers;

	constructor(private http:Http) {
		this.url = 'http://localhost:2100/';
		this.headers = new Headers();
	}
  
	guardarPlanilla(planilla){
	  	return this.http.post(this.url + 'crearPlanilla',planilla);
	}

	crearUsuario(user) {
		return this.http.post(this.url + 'crearUsuario',user);
	}

	loginUsuario(query){
		return this.http.get(this.url + 'doLogin?username=' + query.username +'&password=' + query.password).map(res => res.json());
	}

	obtenerPlanilla(fecha:Date){
		let fechaInicial = fecha.getFullYear() + "-" + (fecha.getMonth()+1) + "-" + fecha.getDate();
		let fechaAux = new Date(fechaInicial);
		fechaAux.setDate(fechaAux.getDate()+7);
		let fechaFinal = fechaAux.getFullYear() + "-" + (fechaAux.getMonth()+1) + "-" + fechaAux.getDate();
		return this.http.get(this.url + 'obtenerPlanilla?fechaInicial='+fechaInicial+'&fechaFinal='+fechaFinal).map(res=>res.json());
	}

	listarPlanillas(){
		return this.http.get(this.url + 'obtenerPlanillas').map(res => res.json());
	}

	obtenerFecha(){
		return this.http.get(this.url + 'obtenerFecha').map(res => res.json());
	}

	modificarPlanilla(planilla){
		return this.http.put(this.url + 'modificarPlanilla',planilla);
	}

	eliminarPlanilla(fecha:Date){
		let fechaInicial = fecha.getFullYear() + "-" + (fecha.getMonth()+1) + "-" + fecha.getDate();
		let fechaAux = new Date(fechaInicial);
		fechaAux.setDate(fechaAux.getDate()+7);
		let fechaFinal = fechaAux.getFullYear() + "-" + (fechaAux.getMonth()+1) + "-" + fechaAux.getDate();
		this.http.delete(this.url + 'eliminarPlanilla?fechaInicial='+fechaInicial+'&fechaFinal='+fechaFinal,this.headers)
		.subscribe();
	}

	crearFuncionario(funcionario){
		return this.http.post(this.url + 'crearFuncionario',funcionario,this.headers);
	}

 	obtenerFuncionarios(){
    	return this.http.get(this.url + 'obtenerFuncionarios').map(res=>res.json());
	}

	modificarFuncionario(funcionario){
		return this.http.put(this.url + 'modificarFuncionario',funcionario,this.headers);
	}

	eliminarFuncionario(funcionario){
		this.http.delete(this.url + 'eliminarFuncionario?_id='+funcionario._id,this.headers)
		.subscribe();
	}
 
}
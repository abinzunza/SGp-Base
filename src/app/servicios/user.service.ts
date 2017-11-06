import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {

	private url:string;
	private headers:Headers;

	constructor(private http:Http) {
		this.url = 'http://localhost:2100/';
		this.headers = new Headers();
	}

	guardarUsuario(usuario){
	  	return this.http.post(this.url + 'crearUsuario',usuario,this.headers);
	}

	obtenerUsuario(nombreUsuario:String){
		return this.http.get(this.url + 'obtenerUsuario?nombreusuario='+nombreUsuario).map(res=>res.json());
	}

}
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class UserService {

	private url:string;
	private headers:Headers;
	private isUserLoggedIn;
	public username;

	constructor(private http:Http) {
		this.url = 'http://localhost:2100/';
		this.headers = new Headers();
		this.isUserLoggedIn = false;
	}

	setUserLoggedIn(){
		this.isUserLoggedIn = true;
	}

	getUserLoggedIn() {
		return this.isUserLoggedIn;
	}

	guardarUsuario(usuario){
	  	return this.http.post(this.url + 'crearUsuario',usuario,this.headers);
	}

	obtenerUsuario(nombreUsuario:String){
		return this.http.get(this.url + 'obtenerUsuario?nombreusuario='+nombreUsuario).map(res=>res.json());
	}

	obtenerContrasena(contrasena:String){
		return this.http.get(this.url + 'obtenerContrasena?contrasena='+contrasena).map(res=>res.json());
	}

}

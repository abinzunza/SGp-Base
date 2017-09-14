import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
@Injectable()
export class TurnoService {
	constructor(private http:Http){ }
  
  guardarPlanilla(planilla){
  	let headers = new Headers();
  	this.http.post('http://localhost:2100/crearPlanilla',planilla,headers).subscribe(r=>{});
  }
 
}
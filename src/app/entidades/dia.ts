import { Turno } from './turno';
export class Dia{
	turnos:Turno[];
	constructor(public fecha:Date){
		this.turnos = [];
	}
}

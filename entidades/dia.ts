import { Turnos } from './turnos';
export class Dia{
	turnos:Turnos[];
	constructor(public fecha:Date){
		this.turnos = new Array(
			new Turnos(),new Turnos(),new Turnos(),new Turnos(),new Turnos(),new Turnos(),new Turnos(),new Turnos(),new Turnos()
		);
	}
}
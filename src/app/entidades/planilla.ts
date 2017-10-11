import { Dia } from './dia';
export class Planilla {
	dias:Dia[];
	constructor(public fecha_inicio:Date, public fecha_fin:Date){
		this.dias = 
			new Array(
				new Dia(new Date(fecha_inicio)),
				new Dia(this.fechaDia(new Date(this.fecha_inicio),1)),
				new Dia(this.fechaDia(new Date(this.fecha_inicio),2)),
				new Dia(this.fechaDia(new Date(this.fecha_inicio),3)),
				new Dia(this.fechaDia(new Date(this.fecha_inicio),4)),
				new Dia(this.fechaDia(new Date(this.fecha_inicio),5)),
				new Dia(this.fechaDia(new Date(this.fecha_inicio),6))
			);
	}
	fechaDia(fecha:Date,offset:number):Date{
		fecha.setDate(fecha.getDate()+offset);
		return fecha;
	}
}
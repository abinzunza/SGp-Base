import { Dia } from './dia';
export class Semana {
	dias:Dia[];
	constructor(public fechaInicial:Date, public fechaFinal:Date){
		this.dias = 
			new Array(
				new Dia(fechaInicial),
				new Dia(this.fechaDia(new Date(this.fechaInicial),1)),
				new Dia(this.fechaDia(new Date(this.fechaInicial),2)),
				new Dia(this.fechaDia(new Date(this.fechaInicial),3)),
				new Dia(this.fechaDia(new Date(this.fechaInicial),4)),
				new Dia(this.fechaDia(new Date(this.fechaInicial),5)),
				new Dia(this.fechaDia(new Date(this.fechaInicial),6))
			);
	}
	fechaDia(fecha:Date,offset:number):Date{
		fecha.setDate(fecha.getDate()+offset);
		return fecha;
	}
}
import { Component, OnInit } from '@angular/core';
import { WebService } from '../../servicios/web.service';
import { PaginadorService } from '../../servicios/paginador.service';
declare var swal:any;

@Component({
    selector: 'app-mostrar-planillas',
    templateUrl: './mostrar-planillas.component.html',
	styleUrls: ['./mostrar-planillas.component.css'],
	providers: [WebService]
})

export class MostrarPlanillasComponent implements OnInit {

	private listaItems: any[];
	paginador: any = {};
	itemsPaginados: any[];
	funcionarios = {};

	constructor(private webService:WebService,private paginadorService: PaginadorService) { }

  	ngOnInit(){
  	    	this.webService.listarPlanillas().subscribe(res => this.listaItems = res.reverse(),null,()=>this.setearPagina(1));
  	}

  	eliminarPlanilla(item){
  		console.log(item);
  		if(new Date(item.fecha_inicio).getTime()>new Date().getTime())
	  		swal({
			    	text: '¿Estás seguro?',
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
			    		this.webService.obtenerFuncionarios()
							.subscribe(resFuncionarios => 
								resFuncionarios.forEach(elemento => {
									elemento.horasAcumuladas+=44;
									this.funcionarios[elemento._id] = elemento;
								})
							,null,
							()=> item.dias.forEach(dia => dia.turnos.forEach(turno =>{
								this.funcionarios[turno.funcionario].horasAcumuladas-=turno.duracion;
								this.webService.modificarFuncionario(this.funcionarios[turno.funcionario]).subscribe();
							})));
						this.listaItems.splice(this.listaItems.indexOf(item),1);
	        			this.webService.eliminarPlanilla(new Date(item.fecha_inicio));
	        			this.setearPagina(this.paginador.paginaActual-((this.paginador.indiceFinal===this.paginador.indiceInicial)?1:0));
			    	}
			},(dismiss)=>console.log("Modal dismiss by",dismiss));
		else
			swal(
			  	'Aviso!',
			  	'Sólo se pueden eliminar las planillas futuras',
			  	'info'
			)
  	}

    setearPagina(pagina:number){
        	this.paginador = this.paginadorService.obtenerPaginador(this.listaItems.length, pagina);
        	this.itemsPaginados = this.listaItems.slice(this.paginador.indiceInicial, this.paginador.indiceFinal + 1);
    }

}

import { Component, OnInit } from '@angular/core';
import { WebService } from '../servicios/web.service';
import { PaginadorService } from '../servicios/paginador.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RutValidator } from '../validaciones/rut';
import { EmailValidator } from '../validaciones/email';
import { CelValidator } from '../validaciones/cel';
declare var swal:any;

@Component({
	selector: 'app-mostrar-funcionarios',
	templateUrl: './mostrar-funcionarios.component.html',
	styleUrls: ['./mostrar-funcionarios.component.css'],
	providers: [WebService]
})
export class MostrarFuncionariosComponent implements OnInit {

  	listaItems;
	paginador: any = {};
	itemsPaginados: any[];
	funcionario:any = null;
	form: FormGroup;
	modo:String;
	modal:any;
	
	constructor(private webService:WebService,private paginadorService: PaginadorService,private modalService:NgbModal,private fb:FormBuilder) { }

  	ngOnInit(){
  	    this.webService.obtenerFuncionarios()
  	    	.subscribe(resFuncionarios => this.listaItems = resFuncionarios,null,()=>this.setearPagina(1));
  	}

  	eliminarFuncionario(funcionario){
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
		    		this.listaItems.splice(this.listaItems.indexOf(funcionario),1);
        			this.webService.eliminarFuncionario(funcionario);
        			this.setearPagina(this.paginador.paginaActual-((this.paginador.indiceFinal===this.paginador.indiceInicial)?1:0));
        			this.webService.listarPlanillas().
        				subscribe(planillas=>
        					planillas.forEach(planilla=>{
        						planilla.dias.forEach(dia=>
        							dia.turnos.forEach(turno=>{
        								if(funcionario._id==turno.funcionario)dia.turnos.splice(dia.turnos.indexOf(turno),1);
        							})
        						);
        						this.webService.modificarPlanilla(planilla).subscribe();
        					})
        				);
        		}
		},(dismiss)=>console.log("Modal dismiss by",dismiss));
  	}

  	detalleFuncionario(funcionario,modal){
		this.funcionario = funcionario;
		this.modalService.open(modal);
	}

	crearFuncionario(modal){
		this.modo = 'Crear';
		this.form = this.fb.group({
			nombre:'',
			apellido:'',
			rut:['',RutValidator.verificarRut],
			cargo:'',
			telefono:['',CelValidator.verificarFormatoCel],
			email:['',EmailValidator.verificarFormatoEmail]
		});
		this.modal = this.modalService.open(modal);
	}

	modificarFuncionario(funcionario,modal){
		this.funcionario = funcionario;
		this.modo = 'Modificar';
		this.form = this.fb.group({
			nombre:this.funcionario.nombre,
			apellido:this.funcionario.apellido,
			rut:[this.funcionario.rut,RutValidator.verificarRut],
			cargo:this.funcionario.cargo,
			telefono:[this.funcionario.telefono,CelValidator.verificarFormatoCel],
			email:[this.funcionario.email,EmailValidator.verificarFormatoEmail]
		});
		this.modal = this.modalService.open(modal);
	}

	guardarFuncionario(funcionario){
		if(this.modo==='Crear'){
			if(this.comprobarRut(funcionario.rut))
				this.webService.crearFuncionario(funcionario).subscribe(nuevoFuncionario => this.listaItems.push(nuevoFuncionario.json()),null,()=>{
					this.modal.close();
					this.setearPagina(this.paginador.paginaActual + ((this.listaItems.length===1 && this.paginador.paginaActual===0)?1:0));
				});
			else
				swal({title: 'Oops...',text: 'Éste rut ya se encuentra registrado',type: 'error',allowOutsideClick: false,allowEscapeKey: false,allowEnterKey: false,showCloseButton: true});
		}
		else {
			funcionario._id = this.funcionario._id;
			this.webService.modificarFuncionario(funcionario).subscribe(()=>this.listaItems[this.listaItems.indexOf(this.funcionario)] = funcionario,null,()=>{
				this.modal.close();
				this.setearPagina(this.paginador.paginaActual);
			});
		}
	}

	comprobarRut(rut){
		for(let i=0;i<this.listaItems.length;i++)
			if(this.listaItems[i].rut == rut)
				return false;
		return true;
	}

    setearPagina(pagina:number){
   		this.paginador = this.paginadorService.obtenerPaginador(this.listaItems.length, pagina);
   		this.itemsPaginados = this.listaItems.slice(this.paginador.indiceInicial, this.paginador.indiceFinal + 1);
   	}

}
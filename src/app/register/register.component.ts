import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebService } from '../servicios/web.service';
import { UserService } from '../servicios/user.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
declare var swal:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

	listaItems;
	modo:String;
	form: FormGroup;


	constructor(private userService:UserService,private fb:FormBuilder) { }

	ngOnInit() {
	}

	crearUsuario(){
  		this.modo = 'Crear';
		this.form = this.fb.group({
			nombre:'',
			apellido:'',
			nombreUsuario:'',
			contrasena:''
		});
  	}

  	guardarUsuario(usuario){
		if(this.modo==='Crear'){
			if(this.comprobarUsuario(usuario.nombreUsuario))
				this.userService.guardarUsuario(usuario).subscribe(nuevoUsuario => this.listaItems.push(nuevoUsuario.json()),null,()=>{});
			else
				swal({title: 'Oops...',text: 'Éste nombreUsuario ya se encuentra registrado',type: 'error',allowOutsideClick: false,allowEscapeKey: false,allowEnterKey: false,showCloseButton: true});
		}/*
		else {
			usuario._id = this.usuario._id;
			this.userService.modificarUsuario(usuario).subscribe(()=>this.listaItems[this.listaItems.indexOf(this.usuario)] = usuario,null,()=>{
				this.modal.close();
				this.setearPagina(this.paginador.paginaActual);
			});
		}*/
	}

	comprobarUsuario(username){
		for(let i=0;i<this.listaItems.length;i++)
			if(this.listaItems[i].nombreUsuario == username)
				return false;
		return true;
	}

}
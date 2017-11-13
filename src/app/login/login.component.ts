import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebService } from '../servicios/web.service';
import { UserService } from '../servicios/user.service';
import { AlertService } from '../servicios/alert.service';
import { AuthenticationService } from '../servicios/authentication.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
declare var swal:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  providers: [UserService,AuthenticationService,AlertService]
})
export class LoginComponent implements OnInit {

	listaItems;
	modo:String;
	form: FormGroup;
	
	constructor(private userService:UserService,private fb:FormBuilder) { }

	ngOnInit() {}

	obtenerUsuario(usuario){
        if(this.comprobarUsuario(usuario.nombreUsuario)){
            if(this.comprobarContrasena(usuario.nombreUsuario.contrasena)){
              this.userService.obtenerUsuario(usuario);
            }
        }
    }

    comprobarUsuario(username){
        for(let i=0;i<this.listaItems.length;i++)
            if(this.listaItems[i].nombreUsuario == username)
                return true;
        return false;
    }

    comprobarContrasena(contrasena){
        for(let i=0;i<this.listaItems.length;i++)
            if(this.listaItems[i].contrasena == contrasena)
                return true;
        return false;
    }
    
	



}
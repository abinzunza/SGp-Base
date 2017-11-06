import { Component, OnInit } from '@angular/core';
import { WebService } from '../servicios/web.service';
import { UserService } from '../servicios/user.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
declare var swal:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

	listaItems;
	modo:String;
	form: FormGroup;
	
	constructor(private userService:UserService,private fb:FormBuilder) { }

	ngOnInit() {
	}

	obtenerUsuario(){}

	obtenerContrasena(){}

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebService } from '../servicios/web.service';

import { PaginadorService } from '../servicios/paginador.service';
import { UserService } from '../servicios/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from '../servicios/alert.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RutValidator } from '../validaciones/rut';
import { EmailValidator } from '../validaciones/email';
import { CelValidator } from '../validaciones/cel';
declare var swal:any;


@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [WebService]
})
export class RegisterComponent implements OnInit {

	listaItems;
	paginador: any = {};
	itemsPaginados: any[];
	usuarios:any = null;
	regform: FormGroup;
	logform: FormGroup;
	modo:String;
	modal:any;

  constructor(private router:Router, private user:UserService, private webService:WebService,private paginadorService: PaginadorService,private modalService:NgbModal,private fb:FormBuilder) { }

  ngOnInit() {
  }
  
  registrarUser(e) {
      e.preventDefault();
      var regBody = {
          username:e.target.elements[0].value,
          nombre:e.target.elements[1].value,
          apellido:e.target.elements[2].value,
          tipouser:e.target.elements[3].value,
          password:e.target.elements[4].value,
          rut:[e.target.elements[5].value,RutValidator.verificarRut],
          telefono:[e.target.elements[6].value,CelValidator.verificarFormatoCel],
          email:[e.target.elements[7].value,EmailValidator.verificarFormatoEmail]
          }

      this.webService.crearUsuario(regBody).subscribe(res => {
          console.log('Usuario creado exitosamente');
          //falta su mensajito de confirmacion
          //this.regform.reset();
      })
  }
}
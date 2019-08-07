import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { IPlanillaCanDeactivate } from './iplanilla-candeactivate';
declare var swal: any;

@Injectable()
export class CrearPlanillaDeactivateGuard implements CanDeactivate<IPlanillaCanDeactivate> {

  	canDeactivate(component:IPlanillaCanDeactivate){
	    if(!component.puedeDesactivar()){
		    return new Promise<boolean>(resolve => {
		        swal({
		            title: '¿Estás seguro?',
		            text: 'Se perderán los cambios que no han sido guardados!',
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
		        }).then(function (isOk: boolean) {
		            resolve(isOk);
		        }, function (dismiss) {
		            resolve(false);
		        })
		    });
		}else {
        	return new Promise( resolve => resolve(true));
  		}
  	}
  	
}
import { AbstractControl } from '@angular/forms';

export class EmailValidator {
	
	static verificarFormatoEmail(c:AbstractControl){
		let regExpEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if(regExpEmail.test(c.value))return null;
		return {formatoIncorrecto:true};
	}

}
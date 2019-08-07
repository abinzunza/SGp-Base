import { AbstractControl } from '@angular/forms';

export class RutValidator {
	
	static verificarRut(c:AbstractControl){
		if(c.value==null)return null;
		let regExpRut = /^[0-9]{1,8}\-{1}[0-9kK]{1}$/;
		if(!regExpRut.test(c.value))return {formatoIncorrecto:true};
		let sum = 0, numero = c.value;
		for(let i=(numero.length-3),mul=0;i>=0;i--,mul++){
			sum+=numero.charAt(i)*((mul)%6+2);
		}
        let digitoCalculado  = 11 - (sum % 11), digitoIngresado = numero.charAt(numero.length-1);
      	if((digitoCalculado == 11 && digitoIngresado==0) || (digitoCalculado == 10 && (digitoIngresado=='k' || digitoIngresado=='K')) ||
		(digitoCalculado==digitoIngresado)){
        	return null;
      	}
		return {rutIncorrecto:true};
	}

}
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from './servicios/user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthguardGuard implements CanActivate {

	constructor(private user: UserService, private router: Router) {}

	canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
		
		this.router.navigate(['/']);
		console.log('no puedes autentificar');
		return this.user.getUserLoggedIn();
	}
}
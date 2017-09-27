import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { IPlanillaCanDeactivate } from './iplanilla-candeactivate';

@Injectable()
export class CrearPlanillaDeactivateGuard implements CanDeactivate<IPlanillaCanDeactivate> {

  canDeactivate(component:IPlanillaCanDeactivate){
    return component.puedeDesactivar();
  }
  
}
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  //numberSource guarda el valor y variableGlobal se encarga del flujo de datos mediante observable.
  //los diferentes componentes que quieran recibir los cambios deben subscriberse a esta variable
  private numberSource = new BehaviorSubject(99);
  variableGlobal = this.numberSource.asObservable();
  constructor() {
  }

  changeNumber(value) {
    this.numberSource.next(value);
  }
  setVariableGlobal(n: number) {
    //this.variableGlobal = n;
  }
}

/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  //### creamos 6 observables, uno para cada dato recibido del GPS ###

  //latitudSource guarda el valor y latitud se encarga del flujo de datos mediante observable.
  //los diferentes componentes que quieran recibir los cambios deben subscriberse a esta variable
  private latitudSource = new BehaviorSubject('esperando datos');
  latitud = this.latitudSource.asObservable();

  //idem x 6
  private longitudSource = new BehaviorSubject('esperando datos');
  longitud = this.longitudSource.asObservable();

  private precisionSource = new BehaviorSubject('esperando datos');
  precision = this.precisionSource.asObservable();

  private altitudSource = new BehaviorSubject('esperando datos');
  altitud = this.altitudSource.asObservable();

  // la precision de altitud, la ignoro
  // private precisionAltSource = new BehaviorSubject('esperando datos');
  // precisionAlt = this.precisionAltSource.asObservable();

  private rumboSource = new BehaviorSubject('esperando datos');
  rumbo = this.rumboSource.asObservable();

  private velocidadSource = new BehaviorSubject('esperando datos');
  velocidad = this.velocidadSource.asObservable();

  constructor() {
  }

  changePrecision(value) {
    this.precisionSource.next(value);
  }
  changeLatitud(value) {
    this.latitudSource.next(value);
  }
  changeLongitud(value) {
    this.longitudSource.next(value);
  }
  changeAltitud(value) {
    this.altitudSource.next(value);
  }
  changeRumbo(value) {
    this.rumboSource.next(value);
  }
  changeVelocidad(value) {
    this.velocidadSource.next(value);
  }

}

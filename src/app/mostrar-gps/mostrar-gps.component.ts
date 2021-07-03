import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-mostrar-gps',
  templateUrl: './mostrar-gps.component.html',
  styleUrls: ['./mostrar-gps.component.scss'],
})
export class MostrarGPSComponent implements OnInit {

  // variable local subscrita a la variable global del servicio
  miPrecision1: any;
  miLatitud1: any;
  miLongitud1: any;
  miAltitud1: any;
  miPrecisionAlt1: any;
  miRumbo1: any;
  miVelocidad1: any;


  constructor(private datosService: DatosService) {
    // en el servicio me subscribo al observable que recibe el cambio de valor en la variable n que asigno
    // a la propiedad local  que será la que muestro en el template
    this.datosService.latitud.subscribe(n => {
      this.miLatitud1 = n;
    });
    this.datosService.longitud.subscribe(n => {
      this.miLongitud1 = n;
    });
    this.datosService.precision.subscribe(n => {
      this.miPrecision1 = n;
    });
    this.datosService.altitud.subscribe(n => {
      this.miAltitud1 = n;
    });

    // ignoro este dato
    // this.datosService.precisionAlt.subscribe(n => {
    //   this.miPrecisionAlt1 = n;
    // });

    this.datosService.rumbo.subscribe(n => {
      this.miRumbo1 = n;
    });
    this.datosService.velocidad.subscribe(n => {
      this.miVelocidad1 = n;
    });
  }

  ngOnInit() { }

}

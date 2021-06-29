import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-gps',
  templateUrl: './mostrar-gps.component.html',
  styleUrls: ['./mostrar-gps.component.scss'],
})
export class MostrarGPSComponent implements OnInit {


  miPrecision1: any;
  miLatitud1: any;
  miLongitud1: any;
  miAltitud1: any;
  miPrecicionAlt1: any;
  miRumbo1: any;
  miVelocidad1: any;

  constructor() { }

  ngOnInit() {}

}

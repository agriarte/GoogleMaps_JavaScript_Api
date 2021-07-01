import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-mostrar-gps',
  templateUrl: './mostrar-gps.component.html',
  styleUrls: ['./mostrar-gps.component.scss'],
})
export class MostrarGPSComponent implements OnInit {

  //input a la escucha de una variable del padre
  @Input() variableDelHijo = 'nada de momento';
  //output mediante evento de emisión
  @Output() cambioVariableDelHijo = new EventEmitter<string>();


  miPrecision1: any;
  miLatitud1: any;
  miLongitud1: any;
  miAltitud1: any;
  miPrecicionAlt1: any;
  miRumbo1: any;
  miVelocidad1: any;

  numeroComun: number; // variable local subscrita a la variable global del servicio

  constructor(private datosService: DatosService) {
    // en el servicio me subscribo al observable que recibe el cambio de valor en la variable n que asigno a la variable
    // local numeroComun que será la que muestro en el template
    this.datosService.variableGlobal.subscribe( n => {
      this.numeroComun = n;
    });
  }

  ngOnInit() {}

  doCambiarPadre() {
    //cambiar la variable en el hijo y emitirla al padre
    this.variableDelHijo = 'esta cadena la cambio en el hijo';
    this.cambioVariableDelHijo.emit ( this.variableDelHijo);
  }

}

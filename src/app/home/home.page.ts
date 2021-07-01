import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  texto = 'test de binding de variable'; // solo local, interpolacion por {{}}
  variableViajera = 'esta cadena la envío entre componentes'; // para pruebas de input output entre componentes padres-hijos

  num1: number; // variables de form
  texto1: string; // form

  numeroComun: number; // variable local subscrita a la variable global del servicio

  //ejemplo form copiado de:
  //https://dev.to/gugadev/angular-reactive-forms--fundamentos-41o2
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private datosService: DatosService) {
    this.num1 = 0;
    this.texto1 = 'nada';

    // en el servicio me subscribo al observable que recibe el cambio de valor en la variable n que asigno a la variable
    // local numeroComun que será la que muestro en el template
    this.datosService.variableGlobal.subscribe( n => {
      this.numeroComun = n;
    });
  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      campoNumero: new FormControl(''),
      campoTexto: new FormControl('')
    });
  }

  // al clickar boton de form
  doAlgo() {
    //Los atributos de clase se actualizan inmediatamente en la vista
    this.texto1 = this.myForm.get('campoTexto').value;
    this.num1 = this.myForm.get('campoNumero').value;
  }

  doIncrementa() {
    this.num1++;
  }
  doDecrementa() {
    this.num1--;
  }

  //cambia el valor de una variable que es global por uso de Services
  doCambiaDatosServices() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    const numRandom = Math.floor(Math.random() * (10 + 1)) + 0;
    this.datosService.changeNumber(numRandom);
  }
}

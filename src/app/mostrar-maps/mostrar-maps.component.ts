
//desde docu oficial Capacitor buscar para instalar Geolocation.
//npm install @capacitor/geolocation
//Mucha atención. Existen 2 plugins Geolocation, el Nativo y el de Capacitor. Usar uno o otro tiene
//diferencias y saldrán errores en el código. Este ejemplo usa el de Capacitor

//Para Googlemaps también hay varias opciones. Este ejemplo usa GoogleMaps JavaScript Api. Se tiene que habilitar desde
// https://console.cloud.google.com en Biblioteca de Api.
//En index.html encima de </head> agregar
//<script src='https://maps.googleapis.com/maps/api/js?libraries=places&key=MI_KEY_AQUI'></script>


import { OnInit } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
//Atencion al import de ToastController, tiene que ser este: from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { DatosService } from '../services/datos.service';

//si no reconoce google declararla previamente
declare const google;

@Component({
  selector: 'app-mostrar-maps',
  templateUrl: './mostrar-maps.component.html',
  styleUrls: ['./mostrar-maps.component.scss'],
})

export class MostrarMapsComponent implements OnInit {

  //parecido a getElementbyId. En la vista HTML se refiere a #map no al id.
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;


  posicion: string;//para interpolar en la vista

  numeroComun: number; // variable local subscrita a la variable global del servicio

  //como Geolocation es estático no hace falta declararlo en el constructor
  //ejemplos docu oficial, en cambio, lo hace.
  constructor(public toastController: ToastController, public datosService: DatosService) { }
  ngOnInit(): void {
    this.getLocation();
  }

  //con promesas es mas seguro. Hasta que no se reciben datos no ejecuta el método
  getLocation() {
    Geolocation.getCurrentPosition().then((coordenadas) => {
      this.posicion = 'Latitud: ' + coordenadas.coords.latitude + ' Longitud: ' + coordenadas.coords.longitude;
      this.presentToast(this.posicion);
      //llamada al googlemap
      this.loadMap(coordenadas);
    });
  }

  async presentToast(txt: string) {
    const toast = await this.toastController.create({
      message: txt,
      duration: 2000
    });
    toast.present();
  }

  loadMap(coordinates) {
    const latLng = new google.maps.LatLng(
      coordinates.coords.latitude,
      coordinates.coords.longitude
    );
    const mapOptions = {
      center: latLng,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker(this.map);
  }

  addMarker(map) {
    const marker = new google.maps.Marker({
      map,
      animation: google.maps.Animation.DROP,
      position: map.getCenter(),
    });
  }
}

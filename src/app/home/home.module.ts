import { MostrarMapsComponent } from './../mostrar-maps/mostrar-maps.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { MostrarGPSComponent } from '../mostrar-gps/mostrar-gps.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,MostrarGPSComponent,MostrarMapsComponent]
})
export class HomePageModule {}

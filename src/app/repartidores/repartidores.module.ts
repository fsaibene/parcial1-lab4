import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartidoresRoutingModule } from './repartidores-routing.module';
import { AltaComponent } from './alta/alta.component';


@NgModule({
  declarations: [
    AltaComponent
  ],
  imports: [
    CommonModule,
    RepartidoresRoutingModule
  ]
})
export class RepartidoresModule { }

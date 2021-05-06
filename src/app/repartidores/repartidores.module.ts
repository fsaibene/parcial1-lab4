import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartidoresRoutingModule } from './repartidores-routing.module';
import { AltaComponent } from './alta/alta.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AltaComponent,
    ErrorComponent,

  ],
  imports: [
    CommonModule,
    RepartidoresRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService]
})
export class RepartidoresModule { }

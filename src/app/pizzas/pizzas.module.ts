import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzasRoutingModule } from './pizzas-routing.module';
import { ListaPizzasComponent } from './components/lista-pizzas/lista-pizzas.component';
import { DetallePizzaComponent } from './components/detalle-pizza/detalle-pizza.component';
import { DashboardPizzaComponent } from './components/dashboard-pizza/dashboard-pizza.component';
import { AltaPizzaComponent } from './components/alta-pizza/alta-pizza.component';
import { BorraPizzaComponent } from './components/borra-pizza/borra-pizza.component';
import { ModificaPizzaComponent } from './components/modifica-pizza/modifica-pizza.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaPizzasComponent,
    DetallePizzaComponent,
    DashboardPizzaComponent,
    AltaPizzaComponent,
    BorraPizzaComponent,
    ModificaPizzaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PizzasRoutingModule
  ],
  providers: [AuthGuardService]

})
export class PizzasModule { }

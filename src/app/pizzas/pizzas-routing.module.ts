import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { DashboardPizzaComponent } from './components/dashboard-pizza/dashboard-pizza.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardPizzaComponent, canActivate: [AuthGuardService] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzasRoutingModule { }

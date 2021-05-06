import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { AltaComponent } from './alta/alta.component';

const routes: Routes = [
    { path: 'alta', component: AltaComponent, canActivate: [AuthGuardService] },
    { path: '', redirectTo: 'alta', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidoresRoutingModule { }

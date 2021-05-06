import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [

    { path: 'bienvenido', component: WelcomeComponent },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'repartidores',
        loadChildren: () => import('./repartidores/repartidores.module').then(m => m.RepartidoresModule),
        canActivate: [AuthGuardService]
    },
    {
        path: 'pizzas',
        loadChildren: () => import('./pizzas/pizzas.module').then(m => m.PizzasModule),
        canActivate: [AuthGuardService]
    },
    { path: '', pathMatch: 'full', redirectTo: 'bienvenido' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

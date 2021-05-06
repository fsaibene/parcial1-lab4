import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [

    { path: 'bienvenido', component: WelcomeComponent },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'partidores',
        loadChildren: () => import('./repartidores/repartidores.module').then(m => m.RepartidoresModule)
    },
    { path: '', pathMatch: 'full', redirectTo: 'bienvenido' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

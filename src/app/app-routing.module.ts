import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { AltaComponent } from './components/materias/alta/alta.component';
import { TodasMateriasComponent } from './components/todas-materias/todas-materias.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdminGuard } from './services/admin.guard';
// import { AdminGuard } from './services/admin.guard';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [

    { path: 'bienvenido', component: WelcomeComponent },
    { path: 'alta-materias', component: AltaComponent, canActivate: [AdminGuard] },
    { path: 'todas-materias', component: TodasMateriasComponent, canActivate: [AdminGuard] },
    { path: 'inscripcion-materias', component: InscripcionComponent, canActivate: [AdminGuard] },
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

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MenuComponent } from './components/menu/menu.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { firebaseConfig } from 'src/firebase/firebase-config';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';
import { ErrorComponent } from './components/error/error.component';
import { MailDirective } from './directives/mail.directive';
import { AltaComponent } from './components/materias/alta/alta.component';
import { AltaAdminComponent } from './components/alta-admin/alta-admin.component';
import { ListaProfesoresComponent } from './components/lista-profesores/lista-profesores.component';
import { ListaMateriasComponent } from './components/lista-materias/lista-materias.component';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { TodasMateriasComponent } from './components/todas-materias/todas-materias.component';
import { InscripcionComponent } from './components/inscripcion/inscripcion.component';
import { ComboAlumnosComponent } from './components/combo-alumnos/combo-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MenuComponent,
    MailDirective,
    AltaComponent,
    AltaAdminComponent,
    ListaProfesoresComponent,
    ListaMateriasComponent,
    FormErrorComponent,
    TodasMateriasComponent,
    InscripcionComponent,
    ComboAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

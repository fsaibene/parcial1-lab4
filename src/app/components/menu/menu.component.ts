import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    public tipoUsuario: string
    constructor(router: Router, public authService: AuthService) { }

    ngOnInit(): void {

        this.authService.userLoginData.subscribe(val =>  {
            if(val) {
                this.tipoUsuario = val.tipo.toLowerCase();
            } else {
                this.tipoUsuario = null;
            }
        })
    }

    public isAdminLoggedIn() {
        return this.authService.loggedUserIsAdmin;
    }
    
    public isLoggedIn() {
        return this.authService.loggedUser;
    }
    public logout() {
        this.authService.signOut();
    }
}

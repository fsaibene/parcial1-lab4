import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { FirebaseStorageService, MEDIA_STORAGE_PATH } from 'src/app/login/firebase-storage.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    public tipoUsuario: string;
    public photoUrl: string;
    constructor(router: Router, private cd: ChangeDetectorRef, public authService: AuthService, private storageService: FirebaseStorageService) { }

    ngOnInit(): void {

        this.authService.userLoginData.subscribe(val =>  {
            if(val) {
                this.tipoUsuario = val.tipo.toLowerCase();
                this.storageService.referenciaCloudStorage(val.photoURL).getDownloadURL().pipe(take(1)).subscribe(res => {
                    this.photoUrl = res;
                    this.cd.detectChanges();
                })

            } else {
                this.tipoUsuario = null;
                this.photoUrl = null;
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
    public getPhotoPath() {
        if(this.authService.userLoginData.value){
            return this.authService.userLoginData.value.photoURL;
        }
    }
}

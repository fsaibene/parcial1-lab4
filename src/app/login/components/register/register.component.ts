import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { FirebaseStorageService, MEDIA_STORAGE_PATH } from '../../firebase-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    public creando: boolean = true;
    public fg: FormGroup;
    public needValidate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public needValidate$: Observable<boolean> = this.needValidate.asObservable();

    public foto1Data: FormData = new FormData();

    constructor(private fb: FormBuilder,
        private authservice: AuthService,
        private router: Router,
        private usuarioesService: UserService,
        private firebaseStorage: FirebaseStorageService){
    }

    ngOnInit(): void {
        this.fg =  this.fb.group({
            'photoURL': [''],
            'firstName': ['', [Validators.required, Validators.maxLength(100)]],
            'lastName': ['', [Validators.required, Validators.maxLength(100)]],
            'password': ['', [Validators.required, Validators.maxLength(50)]],
            'tipo': ['', [Validators.required]],
            'email': ['', [Validators.required, Validators.email]],
        });   
    }    

    public saveusuario(usuario): void {
        this.usuarioesService.create2(usuario);
    }
    
    public onSubmit(form): void {
        this.needValidate.next(true);
        if(form.valid) {
            let usuario = {} as User;
            usuario.photoURL = this.fg.controls["photoURL"].value;
            usuario.firstName = this.fg.controls["firstName"].value;
            usuario.lastName = this.fg.controls["lastName"].value;
            usuario.email = this.fg.controls["email"].value;
            usuario.tipo = this.fg.controls["tipo"].value;
            let password = this.fg.controls["password"].value;

            this.authservice.signUp(usuario.email, password).then(res => {
                if(res.user) {
                    this.uploadPhoto(this.foto1Data, usuario);
                    this.saveusuario(usuario);
                    this.creando = false;
                    this.router.navigate(["login"]);
                }
            })
            .catch(error => {
                console.log(error)
            });
        }
    }

    public createNewMovie(): void {
        this.creando = true;
        this.fg.reset();
    }

    public uploadPhoto(data: FormData, usuario: User) {
        let archivo = data.get('archivo') as File;
        if (archivo) {
            let email = this.fg.controls["email"].value;
            let extension = archivo.name.split(".").pop();
            let name = MEDIA_STORAGE_PATH  + email + "." + extension;
            usuario.photoURL = name;
            this.firebaseStorage.referenciaCloudStorage(name);
            this.firebaseStorage.tareaCloudStorage(name, archivo);
        }
    }

    public cambioArchivo(event: any) {

        if (event.target.files.length > 0) {
            for (let i = 0; i < event.target.files.length; i++) {
                this.foto1Data.delete("archivo");
                this.foto1Data.append("archivo", event.target.files[i], event.target.files[i].name)
            }
        }
    }

}
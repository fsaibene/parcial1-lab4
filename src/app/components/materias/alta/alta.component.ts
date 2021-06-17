import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Materia, User } from 'src/app/classes/user';
import { MateriaService } from 'src/app/services/materia.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
    public creando: boolean = true;
    public fg: FormGroup;
    public needValidate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public needValidate$: Observable<boolean> = this.needValidate.asObservable();
    public profesores: Array<User> = new Array<User>();
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private materiaService: MateriaService) { }
  ngOnInit(): void {
    this.fg =  this.fb.group({
        'anio': [''],
        'nombre': ['', [Validators.required, Validators.maxLength(100)]],
        'cuatrimestre': ['', [Validators.required, Validators.maxLength(100)]],
        'profesor': ['', [Validators.required, Validators.maxLength(50)]],
        'cupo': ['', [Validators.required]],
    });   
}    
public onSelectProf($event) {
    this.fg.controls["profesor"].setValue($event);
}
public onSubmit(form): void {
    this.needValidate.next(true);
    if(form.valid) {
        let usuario = {} as Materia;
        usuario.nombre = this.fg.controls["nombre"].value;
        usuario.anio = this.fg.controls["anio"].value;
        usuario.cuatrimestre = this.fg.controls["cuatrimestre"].value;
        usuario.cupo = this.fg.controls["cupo"].value;
        usuario.profesor = this.fg.controls["profesor"].value;
        usuario.deleted = false;
        this.materiaService.create2(usuario).then(res => {
            console.log("materia creada");
            this.router.navigate(["todas-materias"])
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


}

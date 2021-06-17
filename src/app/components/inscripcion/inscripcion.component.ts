import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Inscripcion, Materia, User } from 'src/app/classes/user';
import { MateriaService } from 'src/app/services/materia.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

    public fg: FormGroup;
    public needValidate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public needValidate$: Observable<boolean> = this.needValidate.asObservable();
    public alumnos: Array<User> = new Array<User>();
    public materia: Materia;
    public alumno: User;
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService, private materiaService: MateriaService) { }
    ngOnInit(): void {
    }    
    public onSelectMateria($event) {
        this.materia = $event;

    }
    public onSelectAlumno($event) {
        this.alumno = $event;
    }
    public onSubmit(): void {
        if(this.alumno && this.materia){
            let inscripcion = {} as Inscripcion;
            inscripcion.user = this.alumno;
            
            this.materiaService.createInscripcion(this.materia, inscripcion).then(res => {
                console.log("materia creada");
                this.router.navigate(["todas-materias"])
            })
        }
    }


}

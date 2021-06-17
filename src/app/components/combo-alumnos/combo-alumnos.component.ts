import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-combo-alumnos',
  templateUrl: './combo-alumnos.component.html',
  styleUrls: ['./combo-alumnos.component.css']
})
export class ComboAlumnosComponent implements OnInit {

    public alumnos: Array<User> = new Array<User>();
    public alumno: string;
    @Output() profSelected: EventEmitter<any> = new EventEmitter<any>(null)
    constructor(private users: UserService) {

    }

    public onChange(changes: any): void {
        this.profSelected.emit(this.alumnos.find(a => a.email == this.alumno));
    }

    ngOnDestroy(): void {
        this.alumnos.length = 0;
    }

    ngOnInit(): void {
        this.users.getAll().ref.where("tipo", "==", "alumno")
        .get().then(res => {
            res.docs.forEach(doc => {
                let profe = doc.data();
                profe.uid = doc.id;
                this.alumnos.push(profe); 
            })
        })
    }

}

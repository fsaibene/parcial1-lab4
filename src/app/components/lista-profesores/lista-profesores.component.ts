import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styleUrls: ['./lista-profesores.component.css']
})
export class ListaProfesoresComponent implements OnInit, OnDestroy {
    public profesores: Array<User> = new Array<User>();
    public profesor: string;
    @Output() profSelected: EventEmitter<any> = new EventEmitter<any>(null)
    constructor(private users: UserService) {

    }

    public onChange(changes: any): void {
        this.profSelected.emit(this.profesor);
    }

    ngOnDestroy(): void {
        this.profesores.length = 0;
    }

    ngOnInit(): void {
        this.users.getAll().ref.where("tipo", "==", "Profesor")
        .get().then(res => {
            res.docs.forEach(doc => {
                let profe = doc.data();
                profe.uid = doc.id;
                this.profesores.push(profe); 
            })
        })
    }
}

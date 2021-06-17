import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Materia } from 'src/app/classes/user';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-combo-materias',
  templateUrl: './combo-materias.component.html',
  styleUrls: ['./combo-materias.component.css']
})
export class ComboMateriasComponent implements OnInit {

    public materias: Array<Materia> = new Array<Materia>();
    public materia: string;
    @Output() materiaSelected: EventEmitter<any> = new EventEmitter<any>(null)
    constructor(private users: MateriaService) {

    }

    public onChange(changes: any): void {
        this.materiaSelected.emit(this.materias.find(a => a.nombre == this.materia));
    }

    ngOnDestroy(): void {
        this.materias.length = 0;
    }

    ngOnInit(): void {
        this.users.getAll().ref//.where("tipo", "==", "Alumno")
        .get().then(res => {
            res.docs.forEach(doc => {
                let profe = doc.data();
                profe.uid = doc.id;
                this.materias.push(profe); 
            })
        })
    }

}

import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/classes/user';
import { MateriaService } from 'src/app/services/materia.service';

@Component({
  selector: 'app-todas-materias',
  templateUrl: './todas-materias.component.html',
  styleUrls: ['./todas-materias.component.css']
})
export class TodasMateriasComponent implements OnInit {
    public materias: Array<Materia> = new Array<Materia>();
    constructor(private materiaService: MateriaService) { }

    ngOnInit(): void {
        this.materiaService.getAll().ref.get().then(res => {
            res.docs.forEach(d => {
                this.materias.push(d.data());
            })
        })
    }

}

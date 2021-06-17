import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Materia } from 'src/app/classes/user';

@Component({
  selector: 'app-lista-materias',
  templateUrl: './lista-materias.component.html',
  styleUrls: ['./lista-materias.component.css']
})
export class ListaMateriasComponent implements OnInit {
    @Output() selecMateria: EventEmitter<any> = new EventEmitter<any>();
    @Input() materias: Array<Materia> = new Array<Materia>();
    constructor() { }
    ngOnInit(): void {
    }
    
    public materiaSeleccionada(materia: Materia): void {
        this.selecMateria.emit(materia);
    }

}

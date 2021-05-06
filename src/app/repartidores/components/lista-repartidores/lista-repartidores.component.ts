import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Repartidor } from '../../model/repartidor';

@Component({
  selector: 'app-lista-repartidores',
  templateUrl: './lista-repartidores.component.html',
  styleUrls: ['./lista-repartidores.component.css']
})
export class ListaRepartidoresComponent implements OnInit {
    @Input() repartidores$: Observable<Repartidor[]>;
    @Output() repartidorEvent: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }
    ngOnInit(): void {
    }
    
    public repartidorSeleccionado(repartidor: Repartidor): void {
        this.repartidorEvent.emit(repartidor);
    }

}

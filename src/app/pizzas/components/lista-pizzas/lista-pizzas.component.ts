import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../../model/pizza';

@Component({
  selector: 'app-lista-pizzas',
  templateUrl: './lista-pizzas.component.html',
  styleUrls: ['./lista-pizzas.component.css']
})
export class ListaPizzasComponent {
    @Input() pizzas$: Observable<Pizza[]>;
    @Output() pizzaSelectedEvent: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }
    
    public pizzaSelected(movie: Pizza): void {
        this.pizzaSelectedEvent.emit(movie);
    }

}

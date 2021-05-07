import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../../model/pizza';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-borra-pizza',
  templateUrl: './borra-pizza.component.html',
  styleUrls: ['./borra-pizza.component.css']
})
export class BorraPizzaComponent implements OnInit {
@Input() pizza: Pizza;
  constructor(private ps: PizzaService) { }

  ngOnInit(): void {
  }
  public borrar(): void {
    if(this.pizza){
        this.ps.delete(this.pizza);
    }
}
}

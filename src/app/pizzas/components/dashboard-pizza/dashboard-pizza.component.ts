import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pizza } from '../../model/pizza';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-dashboard-pizza',
  templateUrl: './dashboard-pizza.component.html',
  styleUrls: ['./dashboard-pizza.component.css']
})
export class DashboardPizzaComponent implements OnInit {
public pizza: Pizza;
public pizzas$: Observable<Pizza[]>;

  constructor(public pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzas$ = this.pizzaService.getAll().valueChanges().pipe(map(values => values.filter(p => !p.deleted)));
  }
  public loadSelectedPizza(pizza) {
      this.pizza = pizza;
  }
}

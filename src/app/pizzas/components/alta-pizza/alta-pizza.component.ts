import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from '../../model/pizza';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent implements OnInit {
    @Output() eventCreateMovie: EventEmitter<any> = new EventEmitter<any>();
    public creandoPelicula: boolean = true;
    public fg: FormGroup;
    public needValidate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public needValidate$: Observable<boolean> = this.needValidate.asObservable();
    constructor(private fb: FormBuilder, private pizzaService: PizzaService){

    }

    ngOnInit(): void {
        this.fg =  this.fb.group({
            'nombre': ['', [Validators.required]],
            'ingredientes': ['', [Validators.required, Validators.maxLength(100)]],
            'lista': ['', [Validators.required]],
            'peso': ['', [Validators.required, Validators.max(15000)]],
            'precio': ['', [Validators.required, Validators.max(15000)]],
        });   
     }

    public saveMovie(pelicula): void {
        this.pizzaService.create(pelicula);
    }
    
    public onSubmit(form): void {
        this.needValidate.next(true);
        if(form.valid) {
            let pizza = new Pizza();
            pizza.nombre = this.fg.controls["nombre"].value;
            pizza.ingredientes = this.fg.controls["ingredientes"].value;
            pizza.lista= this.fg.controls["lista"].value;
            pizza.peso = this.fg.controls["peso"].value;
            pizza.precio = this.fg.controls["precio"].value;
            this.saveMovie(pizza);
            this.creandoPelicula = false;
        }
    }
    
    public createNewMovie(): void {
        this.creandoPelicula = true;
        this.fg.reset();
    }

}

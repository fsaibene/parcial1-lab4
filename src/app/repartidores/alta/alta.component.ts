import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Repartidor } from '../model/repartidor';
import { RepartidoresService } from '../services/repartidores.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {

    public creando: boolean = true;
    public fg: FormGroup;
    public needValidate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public needValidate$: Observable<boolean> = this.needValidate.asObservable();
    constructor(private fb: FormBuilder, private repartidoresService: RepartidoresService){
    }

    ngOnInit(): void {
        this.fg =  this.fb.group({
            'dni': ['', [Validators.required]],
            'nombre': ['', [Validators.required, Validators.maxLength(100)]],
            'edad': ['', [Validators.required,Validators.min(18),  Validators.max(100)]],
            'capacidadTransporte': ['', [Validators.required, Validators.max(30)]],
            'pais': ['', [Validators.required, Validators.max(100)]],
            'unidadPropia': ['false'],
        });   
    }    

    public saveRepartidor(repartidor): void {
        this.repartidoresService.create(repartidor);
    }

    public seleccionarPais(event) {
        this.fg.controls["pais"].setValue(event);
        // this.pais = event;
        console.log(event)
    }
    
    public onSubmit(form): void {
        this.needValidate.next(true);
        if(form.valid) {
        let repartidor = new Repartidor();
        repartidor.dni = this.fg.controls["dni"].value;
        repartidor.nombre = this.fg.controls["nombre"].value;
        repartidor.edad = this.fg.controls["edad"].value;
        repartidor.capacidadTransporte = this.fg.controls["capacidadTransporte"].value;
        repartidor.pais = this.fg.controls["pais"].value;
        repartidor.unidadPropia = this.fg.controls["unidadPropia"].value;
        this.saveRepartidor(repartidor);
        this.creando = false;
        }
    }

    public createNewMovie(): void {
    this.creando = true;
    this.fg.reset();
    }

}

import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from '../../model/repartidor';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.css']
})
export class DetalleRepartidorComponent implements OnInit {
    @Input() repartidor: Repartidor;

    constructor() { }

    ngOnInit(): void {
    }

}

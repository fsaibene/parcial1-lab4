import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repartidor } from '../../model/repartidor';
import { RepartidoresService } from '../../services/repartidores.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    public repartidorSeleccionado: Repartidor;
    public repartidores$: Observable<Repartidor[]>;

  constructor(private rs: RepartidoresService) { }

  ngOnInit(): void {
    this.repartidores$ = this.rs.getAll().valueChanges().pipe(map(values => values.filter(p => !p.deleted)));
  }
  public seleccionarRepartidor(repartidor: Repartidor) {
      this.repartidorSeleccionado = repartidor;
  }
}

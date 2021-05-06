import { AfterViewChecked, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { take } from 'rxjs/operators';
import { CountryServiceService } from '../../country-service.service';
import { Repartidor } from '../../model/repartidor';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit, OnChanges {
    @Input() repartidor: Repartidor;
    public url: string;
  constructor(private cs: CountryServiceService) { }
    ngOnChanges(changes: SimpleChanges): void {
        this.cs.getCountry(this.repartidor.pais).pipe(take(1)).subscribe(value => {
            this.url = value[0]["flag"]
        });    }
  ngOnInit(): void {

  }

}

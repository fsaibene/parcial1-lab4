import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CountryServiceService } from '../../country-service.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
    public paises: Array<any>;
    public busqueda: string;
    public country: string;
    @Output() seleccionpais: EventEmitter<string> =  new EventEmitter<string>();
    constructor(private cs: CountryServiceService, private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.init()
    }
    private init(){
        this.cs.getAllCountries().subscribe(res => {
            this.paises = <Array<object>>res ;
        });
    }
    public selectCountry(nombrePais: string) {
        this.country = nombrePais;
        this.seleccionpais.emit(nombrePais);
    }

    public buscarPais(){
        if(this.busqueda){
            this.paises = this.paises.filter(p => {
                let name =  p.name.toUpperCase();
                console.log(p)
                return name.includes(this.busqueda.toUpperCase())
            })
        } else {
            this.init();
        }
    }

}

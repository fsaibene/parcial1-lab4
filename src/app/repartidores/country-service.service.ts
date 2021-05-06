import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

    private paisActual: string;
    constructor(private http: HttpClient) { 
        this.paisActual = "Argentina";
    }

    public getActualCountry(): string {
        return this.paisActual;
    }

    public setActualCountry(country: string): void {
        this.paisActual = country;
    }

    public getAllCountries(): Observable<object> {
        return this.http.get("https://restcountries.eu/rest/v2/all");
    }
    
    public getCountry(countryName: string): Observable<object> {
        return this.http.get("https://restcountries.eu/rest/v2/name/" + countryName);
    }
}

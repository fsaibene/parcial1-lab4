import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

    constructor(private http: HttpClient) { 
    }
    public getDataFromGitHub(userName: string): Observable<object> {
        return this.http.get("https://api.github.com/users/" + userName);
    }
}

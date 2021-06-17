import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public password: string = "";
  public email: string = "";

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit(): void {

  }
  public login(): void {
    this.auth.login(this.email, this.password);
  }
  public fillData(data) {
      if(data == "admin"){
          this.email = "admin@admin.com";
          this.password = "123456";
      } else if(data == "profesor") {
        this.email = "profesor@profesor.com";
        this.password = "123456";
      } else {
        this.email = "alumno@alumno.com";
        this.password = "123456";
      }
  }
}

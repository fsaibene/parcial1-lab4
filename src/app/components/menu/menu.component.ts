import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    constructor(router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }
  public logout() {
      this.authService.signOut();
  }
}

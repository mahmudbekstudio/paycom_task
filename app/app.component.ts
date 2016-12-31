import { Component } from '@angular/core';

import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>
  <a routerLink="/dashboard" routerLinkActive="active">dashboard</a>
  <a routerLink="/login" routerLinkActive="active">Login</a>
  <a href="#" (click)="logout($event)">Logout</a>
  `,
})
export class AppComponent  {
  constructor(private authentication: AuthenticationService) {}
  logout(e: Event): void {
    e.preventDefault();
    this.authentication.logout();
  }
}

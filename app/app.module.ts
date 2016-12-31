import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { LoginModule } from './module/login/login.module';
import { DashboardModule } from './module/dashboard/dashboard.module';

import { AppComponent }  from './app.component';
import { routes } from './app.routes';
import { ConfigurationService } from './services/configuration.service';
import { AuthenticationService, AuthenticationLogin } from './services/authentication.service';
import { UserService } from './services/user.service';

@NgModule({
  providers: [
    ConfigurationService,
    AuthenticationService,
    AuthenticationLogin,
    UserService
  ],
  imports:      [
    BrowserModule,
    RouterModule.forRoot(routes),
    LoginModule,
    DashboardModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

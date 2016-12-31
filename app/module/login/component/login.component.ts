import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../service/login.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
    moduleId: module.id,
    selector: 'login-component',
    templateUrl: '../view/login.view.html',
    styleUrls: ['../css/login.style.css'],
})
export class LoginComponent {
    public form = {
        phone: '',
        pass: ''
    };

    public error = {
        phone: false,
        pass: false
    };

    public phoneExist = false;
    public phonePrefix = '998';
    public phoneMaxLength = 9;
    public loading = false;

    constructor(
        private loginService: LoginService,
        private authentication: AuthenticationService,
        private router: Router
    ) {}

    signIn(): void {
        this.error.pass = false;
        let result = this.loginService.check(this.phonePrefix + this.form.phone, this.form.pass);

        if(!result) {
            this.error.pass = true;
        } else {
            this.authentication.setAuth(true, result);
            this.router.navigate(['dashboard']);
        }
    }

    phoneKeyup(): void {
        if(this.form.phone.length == this.phoneMaxLength) {
            this.loading = true;
            let result = this.loginService.userService.findBy('login', this.phonePrefix + this.form.phone);

            if(result.length) {
                this.phoneExist = true;
            } else {
                this.error.phone = true;
            }

            this.loading = false;
        } else {
            this.error.phone = false;
            this.error.pass = false;
            this.phoneExist = false;
        }
    }
}
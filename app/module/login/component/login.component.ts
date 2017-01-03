import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../service/login.service';
import { AuthenticationService } from '../../../services/authentication.service';

declare let jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'login-component',
    templateUrl: '../view/login.view.html',
    styleUrls: ['../css/login.style.css'],
})
export class LoginComponent implements OnInit{
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

    ngOnInit() {
        jQuery('.phone-mask').mask('(00) 000-00-00');
    }

    cleanVal(val: string): string {
        return val.replace(/[^0-9\.]+/g, '');
    }

    signIn(): void {
        this.error.pass = false;
        let result = this.loginService.check(this.phonePrefix + this.cleanVal(this.form.phone), this.form.pass);

        if(!result) {
            this.error.pass = true;
        } else {
            this.authentication.setAuth(true, result);
            this.router.navigate(['dashboard']);
        }
    }

    passKeyup(e: any) {
        if(this.form.pass !== '' && e.keyCode === 13) {
            this.signIn();
        }
    }

    phoneKeyup(passInput: any): void {
        let phone = this.cleanVal(this.form.phone);
        if(phone.length == this.phoneMaxLength) {
            this.loading = true;
            let result = this.loginService.userService.findBy('login', this.phonePrefix + phone);

            if(result.length) {
                this.phoneExist = true;
                setTimeout(() => passInput.focus(), 100);
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
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { UserModel } from '../model/user.model';

@Injectable()
export class AuthenticationService implements CanActivate {
    private isAuth: boolean = false;
    private authedTime: number = 0;
    private authedExpire: number = 24 * 60 * 60 * 1000;// one day

    private authedProfile: UserModel = null;

    constructor(private router: Router) {
        this.initStorage();
    }

    get auth(): boolean {
        if(this.isAuth && this.authedTime < (this.getNowTime() - this.authedExpire)) {
            this.setAuth(false, null);
        }

        return this.isAuth;
    }

    get profile(): UserModel {
        return this.authedProfile;
    }

    public setAuth(val: boolean, profile: UserModel) {
        this.authedTime = val ? this.getNowTime() : 0;
        this.isAuth = val;
        this.authedProfile = profile;
        this.updateStorage();
    }

    public logout(): void {
        this.setAuth(false, null);
        this.router.navigate(['login']);
    }

    private initStorage(): void {
        if(this.getStorage() !== null) {
            let profile = this.getStorage();
            this.setAuth(true, profile);
        } else {
            this.updateStorage();
        }
    }

    private updateStorage(): void {
        localStorage.setItem('auth', JSON.stringify(this.authedProfile));
    }

    private getStorage(): UserModel {
        return JSON.parse(localStorage.getItem('auth'));
    }

    getNowTime(): number {
        return (new Date).getTime();
    }

    canActivate() {
        if(this.auth) {
            return true;
        } else {
            this.router.navigate(['login']);
            return true;
        }
    }
}

@Injectable()
export class AuthenticationLogin implements CanActivate {

    constructor(private authenticate: AuthenticationService, private router: Router) {}

    canActivate() {
        if(this.authenticate.auth) {
            this.router.navigate(['dashboard']);
            return true;
        } else {
            return true;
        }
    }
}
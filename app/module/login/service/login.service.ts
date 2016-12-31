import { Injectable } from '@angular/core';

import { UserService } from '../../../services/user.service';

@Injectable()
export class LoginService {

    constructor(public userService: UserService) {}

    public check(login: string, pass: string): boolean {
        let item = this.userService.findBy('login', login);
        item = item[0];

        if(item.password === pass) {
            return item;
        }

        return false;
    }

}
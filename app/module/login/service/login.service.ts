import { Injectable } from '@angular/core';

import { UserService } from '../../../services/user.service';

@Injectable()
export class LoginService {

    constructor(public userService: UserService) {}

    public check(login: string, pass: string): any {
        let items = this.userService.findBy('login', login);

        if(items.length) {
            let userItem = items[0];

            if(userItem.password === pass) {
                return userItem;
            }
        }

        return false;
    }

}
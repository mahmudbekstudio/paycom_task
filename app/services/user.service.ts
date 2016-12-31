import { Injectable } from '@angular/core';

import { UserModel } from '../model/user.model';

import { users } from '../data';

@Injectable()
export class UserService {
    public getAll(): UserModel[] {
        return users;
    }

    public findBy(key: string, val: string): UserModel[] {
        let results: UserModel[] = [];

        for(let item of users) {
            if(item[key] && item[key] === val) {
                results.push(item);
            }
        }

        return results;
    }

    public add(item: UserModel): boolean {
        users.push(item);
        return true;
    }

    public deleteBy(key: string, val: string): boolean {
        let resUsers = users;

        for(let i = 0; i < resUsers.length; i++) {
            if(resUsers[i][key] && resUsers[i][key] === val) {
                users.splice(i, 1);
                break;
            }
        }

        return true;
    }

    public updateBy(key: string, val: string, newItem: UserModel): boolean {
        for(let i = 0; i < users.length; i++) {
            if(users[i][key] && users[i][key] === val) {
                users[i] = newItem;
                break;
            }
        }

        return true;
    }
}
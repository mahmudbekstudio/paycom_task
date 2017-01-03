import { Injectable } from '@angular/core';

import { EmployeeModel } from '../model/employee.model';

@Injectable()
export class EmployeeService {

    private uniqueByField = 'phone';

    get employees(): EmployeeModel[] {
        let result: EmployeeModel[] = JSON.parse(localStorage.getItem('employees'));
        return result === null ? [] : result;
    }

    set employees(val: EmployeeModel[]) {
        localStorage.setItem('employees', JSON.stringify(val));
    }

    public add(val: EmployeeModel): boolean {
        let list = this.employees;
        let findUnique = this.findBy(this.uniqueByField, val[this.uniqueByField]);

        if(findUnique.length !== 0) {
            return false;
        }

        list.push(val);
        this.employees = list;

        return true;
    }

    public findBy(key: any, val: any, list: EmployeeModel[] = null): EmployeeModel[] {
        let results: EmployeeModel[] = [];
        list = list === null ? this.employees : list;

        for(let item of list) {
            if(typeof key === 'string') {
                if(item[key] && item[key] === val) {
                    results.push(item);
                }
            } else {
                for(let keyItem of key) {
                    if(item[keyItem] && item[keyItem] === val) {
                        results.push(item);
                        break;
                    }
                }
            }
        }

        return results;
    }

    public findLikeBy(key: any, val: any, list: EmployeeModel[] = null): EmployeeModel[] {
        let results: EmployeeModel[] = [];
        list = list === null ? this.employees : list;

        for(let item of list) {
            if(typeof key === 'string') {
                if(item[key] && item[key].toLowerCase().indexOf(val.toLowerCase()) !== -1) {
                    results.push(item);
                }
            } else {
                for(let keyItem of key) {
                    if(item[keyItem] && item[keyItem].toLowerCase().indexOf(val.toLowerCase()) !== -1) {
                        results.push(item);
                        break;
                    }
                }
            }
        }

        return results;
    }

    public deleteBy(val: string, key: string = null): boolean {
        let list = this.employees;
        let findKey: any = null;
        key = key === null ? this.uniqueByField : key;

        for(let i = 0; i < list.length; i++) {
            if(list[i][key] && list[i][key] === val) {
                findKey = i;
                break;
            }
        }

        if(findKey === null) {
            return false;
        }

        list.splice(findKey, 1);
        this.employees = list;

        return true;
    }

    public updateBy(newItem: EmployeeModel, val: string, key: string = null): boolean {
        let list = this.employees;
        let findKey: any = null;
        key = key === null ? this.uniqueByField : key;

        for(let i = 0; i < list.length; i++) {
            if(list[i][key] && list[i][key] === val) {
                list[i] = newItem;
                findKey = i;
                break;
            }
        }

        if(findKey === null) {
            return false;
        }

        this.employees = list;

        return true;
    }

}
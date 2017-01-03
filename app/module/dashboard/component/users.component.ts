import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../../services/employee.service';
import { EmployeeModel } from '../../../model/employee.model';

import { job_titles } from '../../../data';

declare let jQuery: any;

@Component({
    moduleId: module.id,
    selector: 'dashboard-users',
    templateUrl: '../view/dashboard-users.view.html',
    styleUrls: ['../css/dashboard-users.css'],
})
export class UsersComponent implements OnInit {

    public list:EmployeeModel[] = [];
    public searchEmployee = '';
    public jobTitle:string[] = [];
    public employeeForm: any;
    public phonePrefix = '998';

    constructor(public employeeService: EmployeeService) {
        this.list = this.employeeService.employees;
        this.jobTitle = job_titles;
        this.resetEmployeeForm();
    }

    private resetEmployeeForm(): void {
        this.employeeForm = {
            title: 'Добавить сотрудника',
            submitBtn: 'Добавить',
            error: [],
            type: 'add',
            oldPhone: '',
            employee: {
                phone: '',
                name: '',
                surname: '',
                middlename: '',
                email: '',
                job_title: ''
            }
        };
    }

    ngOnInit() {
        jQuery('.phone-mask').mask('(00) 000-00-00');
    }

    cleanVal(val: string): string {
        return val.replace(/[^0-9\.]+/g, '');
    }

    showEmployeeForm(e: any): void {
        e.preventDefault();
        this.resetEmployeeForm();
        jQuery('#addNewEmployeePopup').modal('show');
    }

    addEmployee(): boolean {
        let empl = this.employeeForm.employee;
        this.employeeForm.error = [];

        empl.phone = jQuery.trim(empl.phone);
        if(empl.phone === '') {
            this.employeeForm.error.push('Телефон пусто');
        }

        empl.name = jQuery.trim(empl.name);
        if(empl.name === '') {
            this.employeeForm.error.push('Имя пусто');
        }

        empl.surname = jQuery.trim(empl.surname);
        if(empl.surname === '') {
            this.employeeForm.error.push('Фамилия пусто');
        }

        empl.email = jQuery.trim(empl.email);
        if(empl.email === '') {
            this.employeeForm.error.push('E-mail пусто');
        }

        empl.job_title = jQuery.trim(empl.job_title);
        if(empl.job_title === '') {
            this.employeeForm.error.push('Должность пусто');
        }

        let result = this.employeeForm.error.length === 0;

        if(!result) {
            return result;
        }

        if(this.employeeForm.type === 'add') {
            return this.addEmployeeAction(result);
        } else {
            return this.editEmployeeAction(result);
        }
    }

    private editEmployeeAction(result: boolean): boolean {
        if(this.employeeForm.oldPhone === this.cleanVal(this.employeeForm.employee.phone)) {
            this.employeeForm.employee.phone = this.phonePrefix + this.cleanVal(this.employeeForm.employee.phone);
            this.employeeService.updateBy(this.employeeForm.employee, this.phonePrefix + this.employeeForm.oldPhone);
            this.resetEmployeeForm();
            this.list = this.employeeService.employees;
        } else {
            let findResult = this.employeeService.findBy('phone', this.phonePrefix + this.cleanVal(this.employeeForm.employee.phone));
            if(findResult.length) {
                result = false;
                this.employeeForm.error.push('Пользователь с этим телефоном существует');
            } else {
                this.employeeForm.employee.phone = this.phonePrefix + this.cleanVal(this.employeeForm.employee.phone);
                this.employeeService.updateBy(this.employeeForm.employee, this.phonePrefix + this.employeeForm.oldPhone);
                this.resetEmployeeForm();
                this.list = this.employeeService.employees;
            }
        }

        if(result) {
            this.keyupSearch();
        }

        return result;
    }

    private addEmployeeAction(result: boolean): boolean {
        this.employeeForm.employee.phone = this.phonePrefix + this.cleanVal(this.employeeForm.employee.phone);
        if(!this.employeeService.add(this.employeeForm.employee)) {
            result = false;
            this.employeeForm.employee.phone = this.formatPhone(this.employeeForm.employee.phone);
            this.employeeForm.error.push('Пользователь с этим телефоном существует');
        } else {
            this.resetEmployeeForm();
            this.list = this.employeeService.employees;
        }

        if(result) {
            this.keyupSearch();
        }

        return result;
    }

    editEmployee(e: any, employee: EmployeeModel): void {
        e.preventDefault();
        this.resetEmployeeForm();
        let empl = jQuery.extend({}, employee);
        empl.phone = empl.phone.substring(this.phonePrefix.length);
        this.employeeForm.title = 'Редактировать сотрудника';
        this.employeeForm.submitBtn = 'Сохранить';
        this.employeeForm.type = 'edit';
        this.employeeForm.oldPhone = empl.phone;
        empl.phone = this.formatPhone(empl.phone, false);
        this.employeeForm.employee = empl;
        jQuery('#addNewEmployeePopup').modal('show');
    }

    removeEmployee(e: any, employee: EmployeeModel): void {
        e.preventDefault();

        if(confirm('Вы действительно хотите удалить сотрудника с телефоном "' + employee.phone + '"?')) {
            this.employeeService.deleteBy(employee.phone);
            this.list = this.employeeService.employees;
            this.keyupSearch();
        }
    }

    formatPhone(phone: string, withPrefix: boolean = true): string {
        if(withPrefix) {
            phone = phone.substring(this.phonePrefix.length);
        }

        return jQuery('.phone-mask').masked(phone);
    }

    keyupSearch(): void {
        this.searchEmployee = jQuery.trim(this.searchEmployee);
        if(this.searchEmployee.length) {
            this.list = this.employeeService.findLikeBy(['phone', 'name', 'surname', 'middlename', 'email', 'job_title'], this.searchEmployee);
        } else {
            this.list = this.employeeService.employees;
        }
    }

}
export class EmployeeModel {
    constructor(
        public phone: string,
        public name: string,
        public surname: string,
        public middlename: string,
        public email: string,
        public job_title: string
    ) {}
}
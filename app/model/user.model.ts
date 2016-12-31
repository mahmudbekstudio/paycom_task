export class UserModel {
    constructor(
        public login: string,
        public password: string,
        public name: string,
        public surname: string,
        public middlename: string,
        public email: string
    ) {}
}
import { Injectable } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class ConfigurationService {
    constructor(private authentication: AuthenticationService) {}

    get auth() {
        return this.authentication.auth;
    }
}
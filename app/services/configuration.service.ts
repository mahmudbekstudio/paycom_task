import { Injectable } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class ConfigurationService {
    public dashboardMenu: string = '';

    constructor(public authentication: AuthenticationService) {}
}
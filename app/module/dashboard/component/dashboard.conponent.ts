import { Component } from '@angular/core';

import { ConfigurationService } from '../../../services/configuration.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard-component',
    templateUrl: '../view/dashboard.view.html',
    styleUrls: ['../css/dashboard.css'],
})
export class DashboardComponent {

    constructor(
        public config: ConfigurationService
    ) {}

    logout(e: Event): void {
        e.preventDefault();
        this.config.authentication.logout();
    }
}
import { Component } from '@angular/core';

import { ConfigurationService } from '../../../services/configuration.service';

@Component({
    selector: 'dashboard-component',
    template: `Dashboard Component`
})
export class DashboardComponent {
    constructor(private config: ConfigurationService) {}
}
import { Component } from '@angular/core';

import { ConfigurationService } from '../../../services/configuration.service';

import { menu } from '../menu';

@Component({
    moduleId: module.id,
    selector: 'dashboard-navigation',
    templateUrl: '../view/navigation.view.html',
    styleUrls: ['../css/navigation.css'],
})
export class NavigationComponent {
    public menuList = menu;

    constructor(public config: ConfigurationService) {
        //
    }
}
import { NgModule } from '@angular/core';

import { DashboardComponent } from './component/dashboard.conponent';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { DashboardRoutes } from './dashboard.routes';

import {
    DashboardComponent,
    NavigationComponent,
    StatisticsComponent,
    PaymentsComponent,
    ProductsComponent,
    UsersComponent
} from './component/index';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(DashboardRoutes),
    ],
    declarations: [
        DashboardComponent,
        NavigationComponent,
        StatisticsComponent,
        PaymentsComponent,
        ProductsComponent,
        UsersComponent
    ],
    exports: [
        DashboardComponent,
        RouterModule
    ]
})
export class DashboardModule {}
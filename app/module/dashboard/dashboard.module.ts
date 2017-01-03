import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DashboardRoutes } from './dashboard.routes';

import {
    DashboardComponent,
    NavigationComponent,
    StatisticsComponent,
    PaymentsComponent,
    ProductsComponent,
    UsersComponent,
    CashboxComponent,
    IndexComponent,
    NotFoundComponent
} from './component/index';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(DashboardRoutes),
        FormsModule,
    ],
    declarations: [
        DashboardComponent,
        NavigationComponent,
        StatisticsComponent,
        PaymentsComponent,
        ProductsComponent,
        UsersComponent,
        CashboxComponent,
        IndexComponent,
        NotFoundComponent
    ],
    exports: [
        DashboardComponent,
        RouterModule
    ]
})
export class DashboardModule {}
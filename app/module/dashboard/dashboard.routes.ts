import { Routes } from '@angular/router';

import {
    DashboardComponent,
    UsersComponent,
    PaymentsComponent,
    StatisticsComponent,
    ProductsComponent,
    CashboxComponent,
    IndexComponent,
    NotFoundComponent
} from './component/index';
import { AuthenticationService } from '../../services/authentication.service';

export const DashboardRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [ AuthenticationService ],
        children: [
            {
                path: '',
                component: IndexComponent
            },
            {
                path: 'statistics',
                component: StatisticsComponent
            },
            {
                path: 'payments',
                component: PaymentsComponent
            },
            {
                path: 'cashbox',
                component: CashboxComponent
            },
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: '**',
                component: NotFoundComponent
            },
        ]
    },
];
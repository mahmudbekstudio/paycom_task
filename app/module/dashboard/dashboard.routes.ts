import { Routes } from '@angular/router';

import {
    DashboardComponent,
    UsersComponent,
    PaymentsComponent,
    StatisticsComponent,
    ProductsComponent
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
                path: 'statistics',
                component: StatisticsComponent
            },
            {
                path: 'payments',
                component: PaymentsComponent
            },
            //kass
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'users',
                component: UsersComponent
            },
        ]
    },
];
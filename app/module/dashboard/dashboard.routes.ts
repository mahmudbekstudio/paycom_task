import { Routes } from '@angular/router';

import { DashboardComponent } from './component/dashboard.conponent';
import { AuthenticationService } from '../../services/authentication.service';

export const DashboardRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [ AuthenticationService ]
    }
];
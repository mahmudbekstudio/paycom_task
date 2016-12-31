import { Routes } from '@angular/router';

import { DashboardRoutes } from './module/dashboard/dashboard.routes';
import { LoginRoutes } from './module/login/login.routes';

export const routes: Routes = [].concat(
    DashboardRoutes,
    LoginRoutes
);
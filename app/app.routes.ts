import { Routes } from '@angular/router';

import { LoginRoutes } from './module/login/login.routes';
import { NotFoundComponent } from './notfound.component';

export const routes: Routes = [].concat(
    LoginRoutes,
    {path: '**', component: NotFoundComponent}
);
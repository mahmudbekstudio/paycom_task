import { Routes } from '@angular/router';

import { LoginComponent } from './component/login.component';
import { AuthenticationLogin } from '../../services/authentication.service';

export const LoginRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [ AuthenticationLogin ]
    }
];
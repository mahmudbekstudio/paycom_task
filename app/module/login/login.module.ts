import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './component/login.component';

import { LoginService } from './service/login.service';

@NgModule({
    imports: [FormsModule],
    providers: [
        LoginService
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent,
    ]
})
export class LoginModule {}
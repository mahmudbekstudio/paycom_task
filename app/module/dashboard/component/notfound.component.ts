import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dashboard-notfound',
    template: `
    <p align="center">Страница не найдена<br /><a routerLink="\">Главная</a></p>
    `,
})
export class NotFoundComponent {
}
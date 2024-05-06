import { Component } from '@angular/core';

@Component({
    templateUrl: './accessdenied.component.html',
    styles: [
        `
            :host ::ng-deep .p-button-label {
                font-weight: 400;
            }
        `,
    ],
})
export class AccessdeniedComponent { }
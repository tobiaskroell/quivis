import { Component } from '@angular/core';

@Component({
    templateUrl: './error.component.html',
    styles: [
        `
            :host ::ng-deep .p-button-label {
                font-weight: 400;
            }
        `,
    ],
})
export class ErrorComponent {}

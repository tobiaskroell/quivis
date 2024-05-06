import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/services/app.layout.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent {
    rememberMe: boolean = false;

    constructor(private layoutService: LayoutService) {}

    get dark(): boolean {
        return this.layoutService.config().colorScheme !== 'light';
    }
}

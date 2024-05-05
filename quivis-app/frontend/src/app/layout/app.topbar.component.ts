import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppConfig, LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopbarComponent {
    @ViewChild('menuButton') menuButton!: ElementRef;

    @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef;

    config!: AppConfig;

    subscription: any;

    constructor(public layoutService: LayoutService, public el: ElementRef) {
        this.subscription = this.layoutService.configUpdate$.subscribe(
            (config) => {
                this.config = config;
            }
        );
    }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }
}

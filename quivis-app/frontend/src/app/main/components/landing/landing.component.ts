import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './landing.component.html',
})
export class LandingComponent {
    sidebarVisible: boolean = false;

    constructor(public router: Router, private layoutService: LayoutService) {}

    ngOnInit() {
        this.layoutService.config.update((config) => ({
            ...config,
            menuTheme: 'dim',
            topbarTheme: 'light',
            colorScheme: 'light',
        }));
    }

    scrollToElement($element: any): void {
        setTimeout(() => {
            $element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }, 200);
    }
}

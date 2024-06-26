import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'App',
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: 'Home',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/'],
                    },
                    {
                        label: 'Medizinische Historie',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/medical-history'],
                    },
                    {
                        label: 'Medikationsplan',
                        icon: 'pi pi-fw pi-comments',
                        routerLink: ['/medication-plan'],
                    },
                    // {
                    //     label: 'Laborberichte',
                    //     icon: 'pi pi-fw pi-folder',
                    //     routerLink: ['/lab-reports'],
                    // },
                    // {
                    //     label: 'Ernährungstagebuch',
                    //     icon: 'pi pi-fw pi-sliders-v',
                    //     routerLink: ['/nutritional-diary'],
                    // },
                    {
                        label: 'Frag Claude',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/ask-claude'],
                    },
                ],
            },

            {
                label: 'Dokumentation',
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: 'Hilfe',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/help'],
                    },
                ],
            },

        ];
    }
}

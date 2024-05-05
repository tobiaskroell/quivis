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
                        label: 'Medizinische Historie',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/apps/calendar'],
                    },
                    {
                        label: 'Medikationsplan',
                        icon: 'pi pi-fw pi-comments',
                        routerLink: ['/apps/chat'],
                    },
                    {
                        label: 'Laborberichte',
                        icon: 'pi pi-fw pi-folder',
                        routerLink: ['/apps/files'],
                    },
                    {
                        label: 'Ernährungstagebuch',
                        icon: 'pi pi-fw pi-sliders-v',
                        routerLink: ['/apps/kanban'],
                    },
                    {
                        label: 'LLM-Assist',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/apps/tasklist'],
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
                        routerLink: ['/apps/calendar'],
                    },
                ],
            },

        ];
    }
}

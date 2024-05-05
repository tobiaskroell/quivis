import { Component, Input, OnInit, signal } from '@angular/core';
import { MenuService } from '../app.menu.service';
import {
    ColorScheme,
    LayoutService,
    MenuMode,
} from '../service/app.layout.service';

@Component({
    selector: 'app-config',
    templateUrl: './app.config.component.html',
})
export class AppConfigComponent implements OnInit {
    @Input() minimal: boolean = false;

    componentThemes: any[] = [];

    menuThemes: any[] = [];

    topbarThemes: any[] = [];

    scenes: any[] = [];

    scales: number[] = [12, 13, 14, 15, 16];

    selectedScene = signal<string>('');

    constructor(
        public layoutService: LayoutService,
        public menuService: MenuService
    ) {}

    get visible(): boolean {
        return this.layoutService.state.configSidebarVisible;
    }
    set visible(_val: boolean) {
        this.layoutService.state.configSidebarVisible = _val;
    }

    get scale(): number {
        return this.layoutService.config().scale;
    }
    set scale(_val: number) {
        this.layoutService.config.update((config) => ({
            ...config,
            scale: _val,
        }));
    }

    get menuMode(): MenuMode {
        return this.layoutService.config().menuMode;
    }
    set menuMode(_val: MenuMode) {
        this.layoutService.config().menuMode = _val;
        if (this.layoutService.isHorizontal()) {
            this.menuService.reset();
        }
    }

    get colorScheme(): ColorScheme {
        return this.layoutService.config().colorScheme;
    }
    set colorScheme(_val: ColorScheme) {
        if (_val !== this.layoutService.config().colorScheme) {
            this.layoutService.config.update((config) => ({
                ...config,
                menuTheme: _val,
                topbarTheme: _val,
                colorScheme: _val,
            }));
        }
    }

    get inputStyle(): string {
        return this.layoutService.config().inputStyle;
    }
    set inputStyle(_val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            inputStyle: _val,
        }));
    }



    get ripple(): boolean {
        return this.layoutService.config().ripple;
    }
    set ripple(_val: boolean) {
        this.layoutService.config.update((config) => ({
            ...config,
            ripple: _val,
        }));
    }

    get menuTheme(): string {
        return this.layoutService.config().menuTheme;
    }
    set menuTheme(_val: ColorScheme) {
        this.layoutService.config.update((config) => ({
            ...config,
            menuTheme: _val,
        }));
    }

    get topbarTheme(): string {
        return this.layoutService.config().topbarTheme;
    }
    set topbarTheme(_val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            topbarTheme: _val,
        }));
    }

    get componentTheme(): string {
        return this.layoutService.config().componentTheme;
    }
    set componentTheme(_val: string) {
        this.layoutService.config.update((config) => ({
            ...config,
            componentTheme: _val,
        }));
    }

    ngOnInit() {
        this.componentThemes = [
            { name: 'denim', color: 'rgb(47, 142, 229)' },
            { name: 'sea-green', color: 'rgb(48, 160, 89)' },
            { name: 'amethyst', color: 'rgb(131, 76, 168)' },
            { name: 'wedgewood', color: 'rgb(85, 125, 170)' },
            { name: 'tapestry', color: 'rgb(167, 72, 150)' },
            { name: 'cape-palliser', color: 'rgb(164, 107, 62)' },
            { name: 'apple', color: 'rgb(82, 162, 53)' },
            { name: 'gigas', color: 'rgb(87, 81, 169)' },
            { name: 'jungle-green', color: 'rgb(43, 159, 156)' },
            { name: 'camelot', color: 'rgb(165, 67, 87)' },
            { name: 'amber', color: 'rgb(212, 147, 65)' },
            { name: 'cyan', color: 'rgb(57, 157, 178)' },
        ];

        this.menuThemes = [
            { name: 'light', color: '#ffffff' },
            { name: 'dark', color: '#212529' },
            { name: 'dim', color: '#212529' },
        ];

        this.topbarThemes = [
            { name: 'light', color: '#FFFFFF' },
            { name: 'dark', color: '#212529' },
            { name: 'dim', color: '#1565C0' },
        ];
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }

    changeTheme(theme: string) {
        this.componentTheme = theme;
    }

    decrementScale() {
        this.scale--;
    }

    incrementScale() {
        this.scale++;
    }
}

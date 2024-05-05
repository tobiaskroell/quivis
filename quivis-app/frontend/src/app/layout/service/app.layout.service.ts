import { Injectable, effect, signal } from '@angular/core';
import { Subject } from 'rxjs';

export type MenuMode = 'static' | 'overlay' | 'horizontal';

export type ColorScheme = 'light' | 'dark' | 'dim';

export interface AppConfig {
    inputStyle: string;
    colorScheme: ColorScheme;
    componentTheme: string;
    ripple: boolean;
    menuMode: MenuMode;
    scale: number;
    menuTheme: ColorScheme;
    topbarTheme: string;
}

interface LayoutState {
    staticMenuMobileActive: boolean;
    overlayMenuActive: boolean;
    staticMenuDesktopInactive: boolean;
    configSidebarVisible: boolean;
    menuHoverActive: boolean;
    rightMenuActive: boolean;
    topbarMenuActive: boolean;
    sidebarActive: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    _config: AppConfig = {
        ripple: true,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        componentTheme: 'denim',
        scale: 14,
        menuTheme: 'dim',
        topbarTheme: 'light',
    };

    state: LayoutState = {
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false,
        rightMenuActive: false,
        topbarMenuActive: false,
        sidebarActive: false,
    };

    config = signal<AppConfig>(this._config);

    private configUpdate = new Subject<AppConfig>();

    private overlayOpen = new Subject<any>();

    private topbarMenuOpen = new Subject<any>();

    private menuProfileOpen = new Subject<any>();

    configUpdate$ = this.configUpdate.asObservable();

    overlayOpen$ = this.overlayOpen.asObservable();

    topbarMenuOpen$ = this.topbarMenuOpen.asObservable();

    menuProfileOpen$ = this.menuProfileOpen.asObservable();

    constructor() {
        effect(() => {
            const config = this.config();
            if (this.updateStyle(config)) {
                this.changeTheme();
            }

            this.changeScale(config.scale);
            this.onConfigUpdate();
        });
    }

    updateStyle(config: AppConfig) {
        return (
            config.componentTheme !== this._config.componentTheme ||
            config.colorScheme !== this._config.colorScheme
        );
    }

    onMenuToggle() {
        if (this.isOverlay()) {
            this.state.overlayMenuActive = !this.state.overlayMenuActive;

            if (this.state.overlayMenuActive) {
                this.overlayOpen.next(null);
            }
        }

        if (this.isDesktop()) {
            this.state.staticMenuDesktopInactive =
                !this.state.staticMenuDesktopInactive;
        } else {
            this.state.staticMenuMobileActive =
                !this.state.staticMenuMobileActive;

            if (this.state.staticMenuMobileActive) {
                this.overlayOpen.next(null);
            }
        }
    }

    onOverlaySubmenuOpen() {
        this.overlayOpen.next(null);
    }

    showConfigSidebar() {
        this.state.configSidebarVisible = true;
    }

    isOverlay() {
        return this.config().menuMode === 'overlay';
    }

    isDesktop() {
        return window.innerWidth > 991;
    }

    isHorizontal() {
        return this.config().menuMode === 'horizontal';
    }

    isMobile() {
        return !this.isDesktop();
    }

    onConfigUpdate() {
        this._config = { ...this.config() };
        this.configUpdate.next(this.config());
    }

    changeTheme() {
        let { colorScheme, componentTheme } = this.config();

        const themeLink = <HTMLLinkElement>(
            document.getElementById('theme-link')
        );

        const themeLinkHref = themeLink.getAttribute('href')!;
        const newHref = themeLinkHref
            .split('/')
            .map((el) =>
                el == this._config.componentTheme
                    ? (el = componentTheme)
                    : el == `theme-${this._config.colorScheme}`
                    ? (el = `theme-${colorScheme}`)
                    : el
            )
            .join('/');

        this.replaceThemeLink(newHref);
    }

    replaceThemeLink(href: string) {
        const id = 'theme-link';
        let themeLink = <HTMLLinkElement>document.getElementById(id);
        const cloneLinkElement = <HTMLLinkElement>themeLink.cloneNode(true);

        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');

        themeLink.parentNode!.insertBefore(
            cloneLinkElement,
            themeLink.nextSibling
        );
        cloneLinkElement.addEventListener('load', () => {
            themeLink.remove();
            cloneLinkElement.setAttribute('id', id);
        });
    }

    changeScale(value: number) {
        document.documentElement.style.fontSize = `${value}px`;
    }
}

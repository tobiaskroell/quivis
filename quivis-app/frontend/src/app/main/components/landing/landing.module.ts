import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        ButtonModule,
        RippleModule,
        InputTextModule,
        AppConfigModule,
        StyleClassModule,
        SidebarModule,
    ],
    declarations: [LandingComponent],
})
export class LandingModule {}

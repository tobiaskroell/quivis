import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
@NgModule({
    imports: [
        CommonModule,
        ErrorRoutingModule,
        ButtonModule,
        RippleModule,
        AppConfigModule
    ],
    declarations: [ErrorComponent]
})
export class ErrorModule { }

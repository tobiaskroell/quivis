import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help.component';
import { HelpRoutingModule } from './help-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { RippleModule } from 'primeng/ripple';

@NgModule({
    imports: [
        CommonModule,
        HelpRoutingModule,
        AccordionModule,
        RippleModule
    ],
    declarations: [HelpComponent]
})
export class HelpModule { }
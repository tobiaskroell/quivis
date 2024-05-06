import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { MenuModule } from 'primeng/menu';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ButtonModule,
        ProgressBarModule,
        TableModule,
        ChartModule,
        DropdownModule,
        InputTextareaModule,
        InputTextModule,
        FormsModule,
        TagModule,
        RatingModule,
        MenuModule,
    ],
    declarations: [DashboardComponent],
})
export class DashboardModule {}

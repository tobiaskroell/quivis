import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabReportsRoutingModule } from './lab-reports-routing.module';
import { LabReportsComponent } from './lab-reports.component';

@NgModule({
	imports: [
		CommonModule,
		LabReportsRoutingModule
	],
	declarations: [LabReportsComponent]
})
export class LabReportsModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LabReportsComponent } from './lab-reports.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: LabReportsComponent }
	])],
	exports: [RouterModule]
})
export class LabReportsRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MedicationPlanComponent } from './medication-plan.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: MedicationPlanComponent }
	])],
	exports: [RouterModule]
})
export class MedicationPlanRoutingModule { }

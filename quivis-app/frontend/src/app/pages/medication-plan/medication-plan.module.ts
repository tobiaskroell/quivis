import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicationPlanRoutingModule } from './medication-plan-routing.module';
import { MedicationPlanComponent } from './medication-plan.component';

@NgModule({
	imports: [
		CommonModule,
		MedicationPlanRoutingModule
	],
	declarations: [MedicationPlanComponent]
})
export class MedicationPlanModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalHistoryRoutingModule } from './medical-history-routing.module';
import { MedicalHistoryComponent } from './medical-history.component';

@NgModule({
	imports: [
		CommonModule,
		MedicalHistoryRoutingModule
	],
	declarations: [MedicalHistoryComponent]
})
export class MedicalHistoryModule { }

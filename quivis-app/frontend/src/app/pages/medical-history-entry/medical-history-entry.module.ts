import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalHistoryEntryRoutingModule } from './medical-history-entry-routing.module';
import { MedicalHistoryEntryComponent } from './medical-history-entry.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
	imports: [
		CommonModule,
		MedicalHistoryEntryRoutingModule,
		ButtonModule
	],
	declarations: [MedicalHistoryEntryComponent]
})
export class MedicalHistoryEntryModule { }

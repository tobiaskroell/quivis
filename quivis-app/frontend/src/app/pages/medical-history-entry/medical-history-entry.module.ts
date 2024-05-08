import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MedicalHistoryEntryComponent } from './medical-history-entry.component';
import { MedicalHistoryEntryRoutingModule } from './medical-history-entry-routing.module';
import { InputNumberModule } from 'primeng/inputnumber';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		InputNumberModule,
		ButtonModule,
		RippleModule,
		TabViewModule,
		MedicalHistoryEntryRoutingModule
	],
	declarations: [MedicalHistoryEntryComponent]
})
export class MedicalHistoryEntryModule { }

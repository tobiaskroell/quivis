import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalHistoryAddRoutingModule } from './medical-history-add-routing.module';
import { MedicalHistoryAddComponent } from './medical-history-add.component';

import { ButtonModule } from 'primeng/button';


@NgModule({
	imports: [
		CommonModule,
		MedicalHistoryAddRoutingModule,
		ButtonModule
	],
	declarations: [MedicalHistoryAddComponent]
})
export class MedicalHistoryAddModule { }


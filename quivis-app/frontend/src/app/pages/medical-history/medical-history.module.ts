import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalHistoryRoutingModule } from './medical-history-routing.module';
import { MedicalHistoryComponent } from './medical-history.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
	imports: [
		CommonModule,
		MedicalHistoryRoutingModule,
		TimelineModule,
		CardModule,
		ButtonModule
	],
	declarations: [MedicalHistoryComponent]
})
export class MedicalHistoryModule { }

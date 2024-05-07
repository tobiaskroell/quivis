import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MedicalHistoryAddRoutingModule } from './medical-history-add-routing.module';
import { MedicalHistoryAddComponent } from './medical-history-add.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { RippleModule } from 'primeng/ripple';
import { InputSwitchModule } from 'primeng/inputswitch';
import { EditorModule } from 'primeng/editor';

@NgModule({
	imports: [
		CommonModule,
		MedicalHistoryAddRoutingModule,
		ButtonModule,
		InputTextModule,
		ChipModule,
		DropdownModule,
		FormsModule,
		FileUploadModule,
		ButtonModule,
		RippleModule,
		InputSwitchModule,
		EditorModule
	],
	declarations: [MedicalHistoryAddComponent]
})
export class MedicalHistoryAddModule { }


import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MedicalHistoryAddComponent } from './medical-history-add.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: MedicalHistoryAddComponent }
	])],
	exports: [RouterModule]
})
export class MedicalHistoryAddRoutingModule { }

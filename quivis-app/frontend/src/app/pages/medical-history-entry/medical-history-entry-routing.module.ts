import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MedicalHistoryEntryComponent } from './medical-history-entry.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: MedicalHistoryEntryComponent }
	])],
	exports: [RouterModule]
})
export class MedicalHistoryEntryRoutingModule { }

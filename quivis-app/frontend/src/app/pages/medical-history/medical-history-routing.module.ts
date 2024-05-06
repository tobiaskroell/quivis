import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MedicalHistoryComponent } from './medical-history.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: MedicalHistoryComponent }
	])],
	exports: [RouterModule]
})
export class MedicalHistoryRoutingModule { }

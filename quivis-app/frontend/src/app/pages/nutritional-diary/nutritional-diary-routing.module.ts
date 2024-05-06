import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NutritionalDiaryComponent } from './nutritional-diary.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: NutritionalDiaryComponent }
	])],
	exports: [RouterModule]
})
export class NutritionalDiaryRoutingModule { }

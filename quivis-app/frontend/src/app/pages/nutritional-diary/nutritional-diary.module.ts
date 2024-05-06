import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionalDiaryRoutingModule } from './nutritional-diary-routing.module';
import { NutritionalDiaryComponent } from './nutritional-diary.component';

@NgModule({
	imports: [
		CommonModule,
		NutritionalDiaryRoutingModule
	],
	declarations: [NutritionalDiaryComponent]
})
export class NutritionalDiaryModule { }

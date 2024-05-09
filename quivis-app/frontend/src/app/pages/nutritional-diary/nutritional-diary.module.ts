import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NutritionalDiaryRoutingModule } from './nutritional-diary-routing.module';
import { NutritionalDiaryComponent } from './nutritional-diary.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
	imports: [
		CommonModule,
		NutritionalDiaryRoutingModule, 
		ButtonModule
	],
	declarations: [NutritionalDiaryComponent]
})
export class NutritionalDiaryModule { }

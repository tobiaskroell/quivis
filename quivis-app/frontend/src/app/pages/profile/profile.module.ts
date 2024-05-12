import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule} from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@NgModule({
	imports: [
		CommonModule,
		ProfileRoutingModule, 
		ButtonModule,
		ReactiveFormsModule,
		MessageModule,
		InputTextModule,
		FormsModule,
		ToastModule

	],
	declarations: [ProfileComponent]
})
export class ProfileModule { }

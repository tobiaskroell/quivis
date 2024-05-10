import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AskClaudeComponent } from './ask-claude.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AskClaudeComponent }
	])],
	exports: [RouterModule]
})
export class AskClaudeRoutingModule { }

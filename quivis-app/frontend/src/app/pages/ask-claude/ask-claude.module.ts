import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AskClaudeRoutingModule } from './ask-claude-routing.module';
import { AskClaudeComponent } from './ask-claude.component';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { MessageModule } from 'primeng/message';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AskClaudeRoutingModule,
        ButtonModule,
        InputTextareaModule,
        ProgressSpinnerModule,
        DialogModule,
        MessageModule
    ],
    declarations: [AskClaudeComponent],
})
export class AskClaudeModule {}

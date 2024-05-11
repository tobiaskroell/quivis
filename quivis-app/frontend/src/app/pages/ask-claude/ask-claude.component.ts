import { Component } from '@angular/core';
import { ClaudeService } from 'src/app/services/claude.service';

@Component({
  selector: 'app-ask-claude',
  templateUrl: './ask-claude.component.html',
  providers: [ClaudeService]
})


export class AskClaudeComponent {
  answer: string = '';
  textAreaClaudeResponse: string = '';
  textAreaUserInput: string = '';
  maxLength = 500;
  autoResize = true;


  claudeResponse = {
    text: '',
    model: '',
    usage: ''
  }

  constructor(private claudeService: ClaudeService) { }

  async promptClaude() {
    this.claudeResponse = await this.claudeService.getAnswer(this.textAreaUserInput);
    this.textAreaClaudeResponse = this.claudeResponse.text;
  }

}
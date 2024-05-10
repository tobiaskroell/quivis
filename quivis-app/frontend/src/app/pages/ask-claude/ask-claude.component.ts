import { Component } from '@angular/core';
import { ClaudeService } from 'src/app/services/claude.service';

@Component({
  selector: 'app-ask-claude',
  templateUrl: './ask-claude.component.html',
  providers: [ClaudeService]
})


export class AskClaudeComponent {
  answer: string = '';
  value: string = ''; 
  value2: string = ''; 

  claudeResponse = {
    text: '',
    model: '',
    usage: ''
  }

  constructor(private claudeService: ClaudeService) {}

  async promptClaude() {
    this.claudeResponse = await this.claudeService.getAnswer('I ate a salad for lunch today');
  }
  
}
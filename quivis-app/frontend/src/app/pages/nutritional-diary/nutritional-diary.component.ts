import { Component } from '@angular/core';
import { ClaudeService } from 'src/app/services/claude.service';
@Component({
  selector: 'app-nutritional-diary',
  templateUrl: './nutritional-diary.component.html',
  providers: [ClaudeService]
})


export class NutritionalDiaryComponent {
  answer: string = '';
   
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
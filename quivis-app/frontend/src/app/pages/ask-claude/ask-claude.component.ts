import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ClaudeService } from 'src/app/services/claude.service';

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

@Component({
    selector: 'app-ask-claude',
    templateUrl: './ask-claude.component.html',
    styleUrls: ['./ask-claude.component.scss'],
    providers: [ClaudeService],
})
export class AskClaudeComponent implements OnInit {
    chatHistory: ChatMessage[] = [];
    userInput: string = '';
    isLoading: boolean = false;
    displayDialog: boolean = false;
    apiKey: string = '';
    showMedicalWarning: boolean = true;
    showInfoMessage: boolean = true;

    @ViewChild('chatContainer') private chatContainer!: ElementRef;

    constructor(private claudeService: ClaudeService) {}

    ngOnInit() {
        // Check if API key exists, if not, show dialog
        if (!this.claudeService.getApiKey()) {
            this.showDialog();
        }
    }

    showDialog() {
        this.displayDialog = true;
    }

    saveApiKey() {
      if (this.apiKey) {
        this.claudeService.setApiKey(this.apiKey)
          .then(() => {
            this.displayDialog = false;
            // Show success message
          })
          .catch(error => {
            console.error('Error saving API key:', error);
            // Show error message
          });
      }
    }

    async promptClaude() {
        if (this.userInput.trim() === '') return;

        this.isLoading = true;
        this.chatHistory.push({ role: 'user', content: this.userInput });
        const userMessage = this.userInput;
        this.userInput = '';

        try {
            const response = await this.claudeService.getAnswer(
                this.chatHistory
            );
            this.chatHistory.push({
                role: 'assistant',
                content: response.text,
            });
        } catch (error) {
            console.error('Error in AskClaudeComponent:', error);
            if (error instanceof Error) {
                this.chatHistory.push({
                    role: 'assistant',
                    content: `Error: ${error.message}`,
                });
            } else {
                this.chatHistory.push({
                    role: 'assistant',
                    content: 'An unknown error occurred. Please try again.',
                });
            }
        }

        this.isLoading = false;
        this.scrollToBottom();
    }

    private scrollToBottom(): void {
        setTimeout(() => {
            if (this.chatContainer) {
                this.chatContainer.nativeElement.scrollTop =
                    this.chatContainer.nativeElement.scrollHeight;
            }
        });
    }
}

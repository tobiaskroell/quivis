import { Injectable } from '@angular/core';
import Anthropic from '@anthropic-ai/sdk';

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

@Injectable({
    providedIn: 'root',
})
export class ClaudeService {
    private anthropic: Anthropic | null = null;

    constructor() {
        this.initAnthropicClient();
    }

    private initAnthropicClient() {
        const apiKey = this.getApiKey();
        if (apiKey) {
            this.anthropic = new Anthropic({ apiKey });
        }
    }

    setApiKey(apiKey: string) {
        localStorage.setItem('claudeApiKey', apiKey);
        this.initAnthropicClient();
    }

    getApiKey(): string | null {
        return localStorage.getItem('claudeApiKey');
    }

    async getAnswer(messages: ChatMessage[]): Promise<any> {
        if (!this.anthropic) {
            throw new Error(
                'Anthropic client not initialized. Please set API key.'
            );
        }

        const claude3Haiku = 'claude-3-haiku-20240307';

        try {
            const msg = await this.anthropic.messages.create({
                model: claude3Haiku,
                max_tokens: 1024,
                messages: messages,
            });

            const text = msg.content[0].text;
            const model = msg.model;
            const usage = msg.usage;

            return {
                text,
                model,
                usage,
            };
        } catch (error) {
            console.error('Error in ClaudeService:', error);
            throw error; // Re-throw the error so it can be caught in the component
        }
    }
}

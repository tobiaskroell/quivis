import { Injectable } from '@angular/core';

import Anthropic from '@anthropic-ai/sdk';

interface ClaudeResponse {
  completion: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClaudeService {

  async getAnswer(prompt: string): Promise<any> {
    const claude3Haiku = 'claude-3-haiku-20240307';
    const claude3Sonnet = 'claude-3-sonnet-20240229';
    const claude3Opus = 'claude-3-opus-20240229';

    const anthropic = new Anthropic({
      apiKey: '', // defaults to process.env["ANTHROPIC_API_KEY"]
    });

    // https://docs.anthropic.com/claude/docs/models-overview
    const msg = await anthropic.messages.create({
      model: claude3Haiku,
      max_tokens: 1024,
      messages: [{ role: "user", content: prompt }],
    });
    console.log('Claude Response: ', msg);

    const text = msg.content[0].text;
    const model = msg.model;
    const usage = msg.usage;

    const response = {
      text,
      model,
      usage
    }

    return response;
  }

  

}
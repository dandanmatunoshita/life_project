// src/app/services/ai.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private apiKey = 'AIzaSyDI1ryhnEaoI-VLsxlgwRYTBwYEZd9xi3U';
  private apiUrl = 'https://dialogflow.googleapis.com/v2/projects/YOUR_PROJECT_ID/agent/sessions/YOUR_SESSION_ID:detectIntent';

  constructor() { }

  async sendMessage(query: string): Promise<string> {
    const response = await axios.post(
      this.apiUrl,
      {
        queryInput: {
          text: {
            text: query,
            languageCode: 'pt-BR'
          }
        }
      },
      {
        headers: {
          Authorization: `Bearer ${this.apiKey}`
        }
      }
    );

    return response.data.queryResult.fulfillmentText;
  }
}

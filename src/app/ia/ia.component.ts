// src/app/ia/ia.component.ts
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ia',
  templateUrl: './ia.component.html',
  styleUrls: ['./ia.component.css']
})
export class IaComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav; // Referência ao sidenav
  userMessage: string = '';
  responseMessage: string = '';

  private apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDI1ryhnEaoI-VLsxlgwRYTBwYEZd9xi3U'; // Substitua YOUR_API_KEY pela sua chave de API

  constructor(private http: HttpClient) {}

  sendMessage() {
    const body = {
      contents: [
        {
          parts: [
            {
              text: this.userMessage
            }
          ]
        }
      ]
    };

    this.http.post(this.apiUrl, body)
      .subscribe(
        (response: any) => {
          this.responseMessage = response.choices[0].text; // Ajuste conforme a resposta da API
        },
        error => {
          console.error('Error:', error);
          this.responseMessage = 'Erro ao enviar a mensagem.';
        }
      );
  }
}

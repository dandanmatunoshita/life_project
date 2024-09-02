import { Component } from '@angular/core';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent {
  messageText: string = '';
  messages: { text: string, type: 'sent' | 'received' }[] = [];

  sendMessage() {
    if (this.messageText.trim()) {
      this.messages.push({ text: this.messageText, type: 'sent' });
      // Simula uma resposta automática
      setTimeout(() => {
        this.messages.push({ text: 'Resposta automática', type: 'received' });
      }, 1000);
      this.messageText = '';
    }
  }
}

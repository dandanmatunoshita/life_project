import { Component } from '@angular/core';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.scss']
})
export class MensagensComponent {
  messages: { text: string, type: 'sent' | 'received' }[] = [];
  messageText: string = '';

  // Função para enviar a mensagem
  sendMessage() {
    if (this.messageText.trim()) {
      this.messages.push({ text: this.messageText, type: 'sent' });
      this.messageText = ''; // Limpa o campo de texto
      this.receiveMessage(); // Simulação de uma resposta automática
    }
  }

  // Simulação de uma resposta do outro lado
  receiveMessage() {
    setTimeout(() => {
      this.messages.push({ text: 'Resposta automática', type: 'received' });
    }, 1000); // Simula um atraso de 1 segundo para a resposta
  }
}

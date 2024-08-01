import { Component } from '@angular/core';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.component.html',
  styleUrls: ['./suporte.component.css']
})
export class SuporteComponent {
  message: string = '';
  messages: string[] = []; // Adiciona a propriedade messages

  sendMessage() {
    if (this.message.trim()) {
      this.messages.push(this.message.trim());
      this.message = ''; // Limpa o campo de texto após o envio
    }
  }

  deleteMessage() {
    if (this.messages.length > 0) {
      this.messages.pop(); // Remove a última mensagem
    }
  }
}

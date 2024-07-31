import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {
  mensagens: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadMensagens();
  }

  loadMensagens(): void {
    this.http.get<any[]>('URL_DA_SUA_API/mensagens').subscribe(data => {
      this.mensagens = data;
    });
  }

  enviarMensagem(mensagem: string): void {
    this.http.post('URL_DA_SUA_API/mensagens', { mensagem }).subscribe(() => {
      this.loadMensagens(); // Recarregar as mensagens após enviar
    });
  }
}

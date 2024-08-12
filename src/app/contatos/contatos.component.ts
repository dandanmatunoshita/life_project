import { Component } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {
  selectedFilter: string = '';
  contacts = [
    { name: 'Contato 1', type: 'facebook' },
    { name: 'Contato 2', type: 'instagram' },
    { name: 'Contato 3', type: 'whatsapp' },
    // Adicione mais contatos conforme necessário
  ];

  
  filteredContacts = this.contacts;

  onFilterChange(filter: string) {
    this.selectedFilter = filter;
    this.filteredContacts = this.contacts.filter(contact => 
      filter ? contact.type === filter : true
      
    );
  }
}



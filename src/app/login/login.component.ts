import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private dialog: MatDialog) {}

  onSubmit() {
    if (this.email === 'user@life.com' && this.password === 'senha123') {
      this.router.navigate(['/home']); // Redireciona para a página inicial
    } else {
      this.openErrorDialog(); // Abre o modal de erro
    }
  }

  openErrorDialog() {
    this.dialog.open(ErrorDialogComponent, {
      width: '250px',
      data: { message: 'Credenciais inválidas.' }
    });
  }
}

// src/app/login/login.component.ts
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

  // Credenciais de exemplo
  private readonly correctEmail: string = 'user@life.com';
  private readonly correctPassword: string = 'senha123';

  constructor(private router: Router, private dialog: MatDialog) {}

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Lógica para login, como validação e autenticação
    if (this.email === this.correctEmail && this.password === this.correctPassword) {
      this.router.navigate(['/home']);
    } else {
      this.dialog.open(ErrorDialogComponent, {
        width: '300px',
        data: { message: 'Credenciais inválidas. Por favor, tente novamente.' }
      });
    }
  }

  onReset() {
    this.email = '';
    this.password = '';
  }
}

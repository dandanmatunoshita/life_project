// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';  // Importando o módulo de roteamento

// Angular Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';  // Importando o módulo mat-card
import { MatDialogModule } from '@angular/material/dialog'; // Importando o módulo mat-dialog

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SuporteComponent } from './suporte/suporte.component';
import { IaComponent } from './ia/ia.component';
import { FaqComponent } from './faq/faq.component';
import { UniversidadeComponent } from './universidade/universidade.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';  // Importando o ErrorDialogComponent

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuporteComponent,
    IaComponent,
    FaqComponent,
    UniversidadeComponent,
    PerfilComponent,
    LoginComponent,
    ErrorDialogComponent // Declarando o ErrorDialogComponent aqui
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,      // Adicionando o módulo de roteamento
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,  // Adicionando o módulo mat-card
    MatDialogModule // Adicionando o módulo mat-dialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

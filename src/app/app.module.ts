import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Angular Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog'; // Importando MatDialogModule

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SuporteComponent } from './suporte/suporte.component';
import { IaComponent } from './ia/ia.component';
import { FaqComponent } from './faq/faq.component';
import { UniversidadeComponent } from './universidade/universidade.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LoginComponent } from './login/login.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component'; // Importando ErrorDialogComponent

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
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule // Adicionando MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // Remover a propriedade entryComponents
})
export class AppModule { }

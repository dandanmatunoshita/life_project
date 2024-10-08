import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UniversidadeComponent } from './universidade/universidade.component';
import { FaqComponent } from './faq/faq.component';
import { SuporteComponent } from './suporte/suporte.component';
import { IaComponent } from './ia/ia.component';
import { ContatosComponent } from './contatos/contatos.component';
import { MensagensComponent } from './mensagens/mensagens.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'suporte', component: SuporteComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'ia', component: IaComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'universidade', component: UniversidadeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mensagens', component: MensagensComponent },
  { path: 'login', component: LoginComponent },
  // Outras rotas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

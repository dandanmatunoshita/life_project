import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { ContatosComponent } from './contatos/contatos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IaComponent } from './ia/ia.component';
import { FaqComponent } from './faq/faq.component';
import { UniversidadeComponent } from './universidade/universidade.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mensagens', component: MensagensComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ia', component: IaComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'universidade', component: UniversidadeComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

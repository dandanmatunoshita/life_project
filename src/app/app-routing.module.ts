// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Ajuste os caminhos conforme necessário
import { SuporteComponent } from './suporte/suporte.component';
import { IaComponent } from './ia/ia.component';
import { FaqComponent } from './faq/faq.component';
import { UniversidadeComponent } from './universidade/universidade.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'suporte', component: SuporteComponent },
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

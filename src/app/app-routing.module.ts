import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UniversidadeComponent } from './universidade/universidade.component';
import { FaqComponent } from './faq/faq.component';
import { SuporteComponent } from './suporte/suporte.component';
import { IaComponent } from './ia/ia.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'suporte', component: SuporteComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'ia', component: IaComponent },
  { path: 'universidade', component: UniversidadeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // Outras rotas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

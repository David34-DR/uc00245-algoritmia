import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Aula02Component } from './pages/Aula02/Aula02';
import { Aula03Component } from './pages/Aula03/Aula03';


export const routes: Routes = [
  { path: '', redirectTo: 'aula01', pathMatch: 'full' },
  { path: 'aula01', component: Home },   // tua página inicial
  { path: 'ex1', component: Aula02Component }, // página de exercícios
  { path: 'Aula03', component: Aula03Component },
  { path: '**', component: Home },       // fallback se alguém escreve rota errada
];

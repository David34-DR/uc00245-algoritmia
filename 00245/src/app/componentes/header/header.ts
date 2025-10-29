import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule], // assegura que o CommonModule está disponível
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}

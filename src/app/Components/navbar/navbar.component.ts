import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SecondNavbarComponent } from '../second-navbar/second-navbar.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink,SecondNavbarComponent,HomeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isListVisible = false;

  toggleList() {
    this.isListVisible = !this.isListVisible;
  }
 

}

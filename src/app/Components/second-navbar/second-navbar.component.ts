import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-second-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './second-navbar.component.html',
  styleUrl: './second-navbar.component.scss'
})
export class SecondNavbarComponent {

  isListVisible = false;

  toggleList() {
    this.isListVisible = !this.isListVisible;
  }
}

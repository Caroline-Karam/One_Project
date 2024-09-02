import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { SecondNavbarComponent } from './Components/second-navbar/second-navbar.component';

declare var $: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    SecondNavbarComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'One_Project';

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    $('app-second-navbar').hide();
  }

  toggleNavbar(): void {
    $('app-navbar').hide();
    $('app-home').hide();
    $('app-second-navbar').slideDown();
  }
}

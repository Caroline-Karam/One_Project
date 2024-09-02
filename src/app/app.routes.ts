import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ServicesComponent } from './Components/services/services.component';
import { BlogComponent } from './Components/blog/blog.component';
import { BookMeetingComponent } from './Components/book-meeting/book-meeting.component';
import { OurWorkComponent } from './Components/our-work/our-work.component';
import { SecondNavbarComponent } from './Components/second-navbar/second-navbar.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

export const routes: Routes = [

  { path: '' , redirectTo:"home" , pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'secNav', component: SecondNavbarComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'bookMeeting', component: BookMeetingComponent },
  { path: 'ourWork', component: OurWorkComponent },
  { path: '**', component: NotFoundComponent}
];

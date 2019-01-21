import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { AboutPageComponent } from './ui/about-page/about-page.component';
import { TestimonialsPageComponent } from './ui/testimonials-page/testimonials-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'testimonials', component: TestimonialsPageComponent },
  // For when i implement editing testimonial show state
  // { path: 'uploads',  component: UploadPageComponent,  canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'signup', component: SignUpComponent },
];

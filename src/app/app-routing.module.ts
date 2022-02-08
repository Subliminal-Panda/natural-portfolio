import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { CommissionsComponent } from './components/commissions/commissions.component';
import { PublicationsListComponent } from './components/publications-list/publications-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'publications', component: PublicationsListComponent },
  { path: 'home', component: PublicationsListComponent },
  { path: '', component: PublicationsListComponent},
  { path: 'commissions', component: CommissionsComponent},
  { path: 'events', component: EventsListComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'auth', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

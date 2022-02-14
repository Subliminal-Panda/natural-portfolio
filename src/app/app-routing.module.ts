import { DeleteItemComponent } from './components/modals/delete-item/delete-item.component';
import { EditItemComponent } from './components/modals/edit-item/edit-item.component';
import { AddItemComponent } from './components/modals/add-item/add-item.component';
import { LoginComponent } from './components/login/login.component';
import { PageComponent } from './components/page/page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', component: LoginComponent},
  { path: 'add/:page', component: AddItemComponent},
  { path: 'edit/:page', component: EditItemComponent},
  { path: 'delete/:page', component: DeleteItemComponent},
  { path: ':page', component: PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

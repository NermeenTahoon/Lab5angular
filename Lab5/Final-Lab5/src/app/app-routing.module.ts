import { ErrorComponent } from './component/error/error.component';
import { UsersComponent } from './component/users/users.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserDetailComponent } from './component/user-detail/user-detail.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'users',component:UsersComponent},
  {path: 'users/new',component:UserFormComponent},
  {path: 'users/:id',component:UserFormComponent},
  {path: 'userDetails/:id', component: UserDetailComponent },
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

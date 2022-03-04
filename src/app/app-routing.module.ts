import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcarComponent } from './addcar/addcar.component';
import { AdminComponent } from './admin/admin.component';
import { GetComponent } from './get/get.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchComponent } from './search/search.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:"",redirectTo:'home',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'addcar', component: AddcarComponent },
  { path: 'get', component: GetComponent },
  {path:'admin',component:AdminComponent},
  {path:'search',component:SearchComponent},
  {path:'superadmin',component:SuperadminComponent},
  {path:'seeall',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

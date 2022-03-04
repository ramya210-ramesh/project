import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GetComponent } from './get/get.component';
import { AdminInterceptor } from './admin.interceptor';
import { AddcarComponent } from './addcar/addcar.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { SuperadminComponent } from './superadmin/superadmin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    GetComponent,
    AddcarComponent,
    UserComponent,
    SearchComponent,
    SuperadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [
    // {
    // provide:HTTP_INTERCEPTORS,
    // useClass:AdminInterceptor,
    // multi:true
  // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



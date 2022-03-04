import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarserviceService } from '../Service/carservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private service:CarserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  loginform=new FormGroup({
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })
  get username(){
    return this.loginform.get("username")
  }
  get password (){
    return this.loginform.get("password")
  }
  token:any
  login(){
    console.log(this.loginform.value);
    this.service.login(this.loginform.value).subscribe((val:any)=>{
      console.log(val);
      this.token=val
      this.token=this.token.token
      console.log(this.token);
      
      localStorage.setItem("token",this.token)
     if (this.token!=null) {
      this.router.navigate(["/admin"])
     }
    })

}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarserviceService } from './Service/carservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  
  title = 'carinformation';
  cr:any
  text:any
  filtered:any
  constructor(private data:CarserviceService,private service:CarserviceService,private router:Router){

  }
  myCars:any
  ngOnInit(): void {
      console.log(this.text);
  }
  // filterDetails:any
  // UserCars(){
  //   this.service.userCar().subscribe((cars:any)=>{
  //     console.log(this.text.toUpperCase());
  //     this.myCars=cars
  //   this.filterDetails = cars.filter((v:any)=>{
  //     //  console.log('>>',v.companyName.toUpperCase() === this.text.toUpperCase());
      
  //       if (v.carName.toUpperCase() === this.text.toUpperCase()){
  //           console.log('car name',v.carName.toUpperCase() === this.text.toUpperCase());
  //         return v
  //       } else if(v.carCompany.toUpperCase() === this.text.toUpperCase()){
  //         return v
  //       }else if(v.carFuelType.toUpperCase() === this.text.toUpperCase()){
  //         return v
  //       }
  //     })
  //     console.log(this.filterDetails)
      
  //    })
  // }
        
 
clear(){
  localStorage.clear()
  this.router.navigate(["/home"])
}
}

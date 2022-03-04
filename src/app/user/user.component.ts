import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarserviceService } from '../Service/carservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  cr:any
  text:any
  filtered:any
  myCars: any;
  constructor(private data:CarserviceService,private router:Router){

  }

  ngOnInit(): void {
  }
  filterDetails:any
  UserCars(){
    this.data.seeall().subscribe((cars:any)=>{
      console.log(this.text.toUpperCase());
      this.myCars=cars
    this.filterDetails = cars.filter((v:any)=>{
      //  console.log('>>',v.companyName.toUpperCase() === this.text.toUpperCase());
      
        if (v.carName.toUpperCase() === this.text.toUpperCase()){
            console.log('car name',v.carName.toUpperCase() === this.text.toUpperCase());
          return v
        } else if(v.carCompany.toUpperCase() === this.text.toUpperCase()){
          return v
        }else if(v.carFuelType.toUpperCase() === this.text.toUpperCase()){
          return v
        }
      })
      console.log(this.filterDetails)
      
     })
  }
        

}

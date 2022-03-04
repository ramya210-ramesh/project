import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarserviceService } from '../Service/carservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  result:any;
  constructor(private details:CarserviceService) { }

  ngOnInit(): void {
    this.details.seeall().subscribe(car=>{
      console.log(car);
      this.result=car
    })
  }

  deleteProduct(carId:any){
    this.details.deleteData(carId).subscribe((res)=>{
        console.log(res);
        
      })
  }
    
}

import { Component, OnInit } from '@angular/core';
import { CarserviceService } from '../Service/carservice.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
allDetails:any;
  constructor(private details:CarserviceService) { }

  ngOnInit(): void {
    this.details.seeall().subscribe(car=>{
      console.log(car);
      this.allDetails=car
    })
  }

  deleteProduct(carId:any){
    this.details.deleteData(carId).subscribe((res)=>{
        console.log(res);
        
      })
  }

}

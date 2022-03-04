import { Component, OnInit } from '@angular/core';
import { CarserviceService } from '../Service/carservice.service';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {
  result: any;

  constructor(private details:CarserviceService) { }

  
  ngOnInit(): void {
    this.details.seeall().subscribe(car=>{
      console.log(car);
      this.result=car
    })
  }

}

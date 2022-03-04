import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CarserviceService } from '../Service/carservice.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  constructor(private data:CarserviceService) { }

  ngOnInit(): void {
  }
  
  addProduct(form:NgForm){
    console.log(form.value);
    this.data.addData(form.value).subscribe((res:any)=>{
      console.log(res);
      
    })
    
  }

}
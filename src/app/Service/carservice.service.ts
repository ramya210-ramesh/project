import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  userCar() {
    throw new Error('Method not implemented.');
  }
  
 

  constructor(private http:HttpClient) { }

  login(Data:any){
    return this.http.post("http://localhost:8098/adminlogin",Data);
  }
  register(Data:any){
    return this.http.post("http://localhost:8098/adminreg",Data);
  }
  

  addData(Data:any){
    return this.http.post("http://localhost:8098/addCar",Data);
  }

  getToken(){
    return localStorage.getItem('token')
  }

  seeall(){
    // return this.http.get("http://localhost:8098/seeall")
    return this.http.get("http://localhost:8098/details");
  }

  deleteData(carId:any){
    return this.http.delete(`https://localhost:8098/deleteCar/${carId}`)
  }

  
}

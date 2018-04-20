import { Injectable } from '@angular/core';
import { Component, Input } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
//import service from './dataservice'

@Injectable()
export class MydataService {
  responseData;
   result:Array<Object>; 
  constructor(private http : Http) { 

  }
  
//C:\Users\TCS\serviceexample\src\dataService

//https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow
  fetchDate() : object[]{
    this.http.get('assets/students.json').map(
      (result)=> result.json()
    ).subscribe(
      result => this.result = result
    )
    return this.result;
  }

   fetchDate2(){
    this.http.get('http://validate.jsontest.com/?json={%22key%22:%22value%22}').map(
      (respose)=> respose.json()
    ).subscribe(
      (data) =>
     console.log(data)
    )
  }

obj = {
  id:"1",
  name:"nameasdasd",
  rollNo:"2342"
}
  success(){
    console.log("sucess" + this.result);
    return "success";
  }

}

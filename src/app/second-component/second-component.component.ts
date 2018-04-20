import { Component, OnInit } from '@angular/core';
import { MydataService } from './../mydata.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

 constructor(private newService: MydataService) {

  }

  ngOnInit() {
console.log(this.newService.success());
console.log(this.newService.obj.name);
  }

}

import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { MydataService } from './mydata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  response;
  testt = "asdasd";
  constructor(private newService: MydataService) { }

  ngOnInit() {
    console.log("calling service");
    this.response = this.newService.fetchDate();
    
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import {MydataService} from './mydata.service';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';


@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    ThirdComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

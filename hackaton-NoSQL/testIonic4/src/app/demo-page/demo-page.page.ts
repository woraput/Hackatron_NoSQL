import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.page.html',
  styleUrls: ['./demo-page.page.scss'],
})
export class DemoPagePage implements OnInit {

  constructor(public http:HttpClient ) { }
  
    ngOnInit() {
      this.ngOnInit.get("http://rest-service.guides.spring.io/greeting")
    }
  
}

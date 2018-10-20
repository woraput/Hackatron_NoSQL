import { HttpClient } from '@angular/common/http';
import { DemoPagePage } from './../demo-page/demo-page.page';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {



  constructor(public navCtrl: NavController ,public http:HttpClient) {

    
  }
      goDemo(){
        this.navCtrl.navigateForward("demoPage")
      }

}

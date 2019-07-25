import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  // users1: user[] = [];
  phone: string;
  password: string;
  err: string = '';
  // flag: boolean = true;

  scheduled = [];

  url1 : URL = new URL('http://localhost:8100/assets/tree.png');
  url2 : string = '../../assets/tree.png';

  constructor(private nav: NavController) {
   }


  ngOnInit() {
    // this.users1 = JSON.parse(localStorage.getItem('users'));
  }

  goClick(){
    // this.nav.navigateForward('click1');
  }

 
  goCamera() {
    this.nav.navigateForward('photo');
  }

  goBarcode() {
    this.nav.navigateForward('barcode');
  }


  login() {
      this.nav.navigateForward('tabs');

    // this.flag = true;
    // await this.check1();
    // if(this.flag){
    //   this.err = '手機號碼或密碼錯誤';
    // this.phone = '';
    // this.password = '';
    // input1.setFocus();
    // }

  }
  register() {
    this.nav.navigateForward('register');
  }

}

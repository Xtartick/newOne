import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Store } from '../store';
import { Comment } from '../comment'
import { Message } from '../Messags';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  
  select1: string = '';
  stores: Store[] = [
    { id: 0, name: '全部' },
    { id: 11, name: '椒麻雞大王' },
    { id: 12, name: '財哥燒臘' },
    { id: 13, name: '藍與白' },
    { id: 21, name: '超大杯' },
    { id: 22, name: 'COCO都可' },
    { id: 23, name: '清心' }
  ];
  i : number = 4;
  messages : Message[] = [
    new Message(1,'_xttk_','測試文件－－－＞'),
    new Message(2,'_x00k_','測試文件－－－＞'),
    new Message(3,'xt_','測試文件－－－＞'),
  ];

  constructor(private navCrl : NavController,private navCtrl : NavController) {
    this.storeName = localStorage.getItem('store');
  }
  
  comment(){
    this.messages.push(new Message(this.i,'test people '+this.i,'test11'));
    this.i++;
  }
  
  
  storeName : string = 'string_storeName_label';
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  


  ngOnInit() {
  }

  back(){
    this.navCtrl.back();
  }

}

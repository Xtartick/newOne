import { Component } from '@angular/core';
import { Store } from '../store';
import { NavController } from '@ionic/angular';
import { StorePage } from '../store/store.page';
import { StorePageModule } from '../store/store.module';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  stores3: Store[] = [
    { id: 1, name: '飲料' },
    { id: 2, name: '食物' }
  ];

  stores: Store[] = [
    { id: 1, name: '椒麻雞大王' },
    { id: 2, name: '財哥燒臘' },
    { id: 3, name: '藍與白' }
  ];

  stores2: Store[] = [
    { id: 1, name: '超大杯' },
    { id: 2, name: 'COCO都可' },
    { id: 3, name: '清心' }
  ];

  select1: string = ''; //food or drink
  select2: string = ''; //food store 1 2 3
  select3: string = ''; //drink store 1 2 3
  _disable: boolean = false;
  public storeInfo: string[] = [];

  constructor() {
  }

  onSelect1() {
    this.setClear();
    this._disable = false;
  }
  getDealerName(event) {
    this._disable = false;
    console.log(this.select1);

    console.log(event.target.value);
    if (!(this.select2 === '')) {
      this.stores.forEach(e => { if (e.id === event.target.value) { console.log(e.name); } });
      this._disable = true;
    }
    if (!(this.select3 === '')) {
      this.stores2.forEach(e => { if (e.id === event.target.value) { console.log(e.name); } });
      this._disable = true;
    }
  }

  setClear() {
    this.select2 = '';
    this.select3 = '';
  }

  goStore() {
    if(this.select3 === ''){
      let i :number = +this.select2-1;
      console.log(this.stores[i].name);
      localStorage.setItem('store',this.stores[i].name);
    }
    if(this.select2 === ''){
      let i :number = +this.select3-1;
      console.log(this.stores2[i].name);
      localStorage.setItem('store',this.stores2[i].name);
    }
  }


}

import { Component } from '@angular/core';
import { Comment } from '../comment';
import { Store } from '../store';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{

  stores: Store[] = [
    { id: 0, name: '全部' },
    { id: 11, name: '椒麻雞大王' },
    { id: 12, name: '財哥燒臘' },
    { id: 13, name: '藍與白' },
    { id: 21, name: '超大杯' },
    { id: 22, name: 'COCO都可' },
    { id: 23, name: '清心' }
  ];

  select1 = this.stores[0].id;

  users: Comment[] = [
    new Comment(11, '椒麻雞大王', 'Jack', 'nice. but it can be goood, im think so that .i will come back here next weekend!'),
    new Comment(23, '清心', 'Micky', 'dont do that! that is so bad ! i will find you and kill you!'),
    new Comment(12, '財哥燒臘', 'Nike', 'TOO SPICY!'),
    new Comment(11, '椒麻雞大王', 'Marvin', 'bad'),
    new Comment(23, '清心', 'Micky', 'dont do that! that is so bad ! i will find you and kill you!'),
    new Comment(11, '椒麻雞大王', 'Cald', 'not bad'),
    new Comment(22, 'COCO都可', 'xo_xo', 'bubble tea is soo goooood!'),
    new Comment(11, '椒麻雞大王', 'Marvin', 'bad'),
    new Comment(23, '清心', 'Micky', 'dont do that! that is so bad ! i will find you and kill you!'),
    new Comment(11, '椒麻雞大王', 'Marvin', 'bad'),
    new Comment(13, '藍與白', 'xttk_', 'there are many meals and im so hungry to eat that!! so goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso goooooddddso gooooodddd'),
    new Comment(11, '椒麻雞大王', 'Marvin', 'bad'),
    new Comment(21, '超大杯', 'Micky', 'DAMN!!! drink so big!'),
    new Comment(23, '清心', 'Micky', 'dont do that! that is so bad ! i will find you and kill you!')
  ];

  users2: Comment[] = [];

  constructor(private navCrl : NavController) {
    this.users.forEach(e=>this.users2.push(e));
    
    new Promise(resolve=>{
      setTimeout(()=> resolve(Promise.resolve(this.users)),2000);
    })
  }

    test(value){
      this.stores.forEach(e=>{if(e.id === value){localStorage.setItem('store',e.name)}});
      this.navCrl.navigateForward('store');
    }
  

  searchIt() {
    
    console.log(this.select1);
    if (+this.select1 === 0) {
      this.users = this.users2;
    } else {
      let searchC: Comment[] = [];
      this.users2.forEach(e => { if (e.id === +this.select1) { console.log('e.id === ' + e.id + ' ,select1 === ' + this.select1 + ' .'); searchC.push(e) } });
      this.users = searchC;
    }
  }

}

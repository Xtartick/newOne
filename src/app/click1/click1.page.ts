import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { NavController, IonFab, IonFabButton } from '@ionic/angular';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-click1',
  templateUrl: './click1.page.html',
  styleUrls: ['./click1.page.scss'],
})
export class Click1Page implements OnInit {
  @ViewChildren(IonFab) fabs !: QueryList<IonFab>;
  input1: number = 50;
  protected interval: any;

  constructor(private nav: NavController) { 

  }

  ngOnInit() {
  }

  back() {
    this.nav.back();
  }

  onPressEvent() {
    this.stopInterval();
  }

  itvAdd() {
    this.interval = setInterval(e => {
      if (this.input1 < 999)
        this.input1++;
      if (this.input1 === 999) {
        this.stopInterval();
        console.log("The value is 999 >>> stop press");
      }
    }, 100);
  }

  itvMinus() {
    this.interval = setInterval((e )=> {
      if (this.input1 > 0)
        this.input1--;
      if (this.input1 === 0) {
        this.stopInterval();
        console.log("The value is 0 >>> stop press");
      }      
    },100 );
  }
  stopInterval() {
    clearInterval(this.interval);
  }

}

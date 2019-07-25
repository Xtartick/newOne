import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  num: number = 0;
  start: number = 0;
  end: number = 100;
  ans: number = -1;
  result: string = '';
  put: string = '';
  constructor() {
    this.ans = parseInt(Math.random() * 100 + '');
    console.log(this.ans);
  }

  result_btn() {
    if ((+this.put) > this.ans) {

        this.end = +this.put;

      this.result = "比" + this.put + "小 , " + "比" + this.start + "大 。"
    }
    if ((+this.put) === this.ans) {
      this.num = +this.put;
      this.result = "B I N G O !";
    }
    if ((+this.put) < this.ans) {

        this.start = +this.put;

      this.result = "比" + this.put + "大 , " + "比" + this.end + "小 。"
    }
    this.put = '';
  }

}

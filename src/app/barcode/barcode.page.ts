import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {
  options : BarcodeScannerOptions;
  encodeText : string = '';
  encodedData : any = {};
  scannedData : any = {};
  show : boolean = false;
  show1 : boolean = false;


  constructor(public barcode: BarcodeScanner,public scanner:BarcodeScanner,private nav : NavController) { }

  ngOnInit() {
  }

  Encode() {
    this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.encodeText).then(e => {
      this.encodedData = e;
    }, (err) => {
      alert(JSON.stringify(err));
    })
  }

  back(){
    this.nav.back();
  }

  Scan() {
    this.options = {
      prompt: 'Scan you barcode'
    };
    this.barcode.scan(this.options).then(e => {
      if(e.text.includes('http')){
        this.show = true;
      }else{
        this.show = false;
      }
      this.scannedData=e;
      this.show1 = true;
    }, (err) => {
      alert(JSON.stringify(err));
    })
  }

}

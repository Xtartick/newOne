import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { exists } from 'fs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  navigationExtras: NavigationExtras = {
    state: {
        bool: true
    }
};

  constructor(private nav : NavController) {}
  
  goBack(){
    this.nav.navigateBack('').then(()=>{
      
    })
  }
}

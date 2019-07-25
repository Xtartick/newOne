import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { File } from '@ionic-native/file/ngx';
import { IonicStorageModule } from '@ionic/storage';

import { Camera } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { Injectable } from "@angular/core";

/**
 * @hidden
 * This class overrides the default Angular gesture config.
 */
@Injectable()
export class CustomHammerConfig extends HammerGestureConfig {
  buildHammer(element: HTMLElement) {
    const mc = new (<any>window).Hammer(element);

    for (const eventName in this.overrides) {
      if (eventName) {
        mc.get(eventName).set(this.overrides[eventName]);
      }
    }

    return mc;
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig},
    Camera,
    BarcodeScanner,
    LocalNotifications,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

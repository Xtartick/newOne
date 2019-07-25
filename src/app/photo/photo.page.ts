import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {
  myPhoto : any;


  constructor(private camera : Camera,private nav : NavController) { }

  ngOnInit() {
  }

  back(){
    this.nav.back();
  }

  check() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true,
      allowEdit: false
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     console.log(imageData);
      this.myPhoto = 'data:image/jpeg;base64,' + imageData;
      // this.bigImg = this.myPhoto;
      // this.bigSize = this.getImageSize(this.bigImg);
    }, (err) => {
      console.log(err);
     // Handle error
    });
  }

}

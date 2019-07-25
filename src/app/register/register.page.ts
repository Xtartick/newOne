import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, ValidatorFn } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { user } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  errDescribe = '';
  profileForm: FormGroup;
  users : user[] = [];
  users_id : number = 0;

  constructor(private nav: NavController, private formBuilder: FormBuilder) { }

  back(){
    this.nav.back();
  }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('users'));

    this.profileForm = this.formBuilder.group({
      phone: new FormControl('',
        [Validators.required,
        Validators.pattern('09[0-9]{8}')]
      ),
      password: new FormControl('',
        [Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z]).{6,16}$'),
        Validators.minLength(6),
        Validators.maxLength(16)]
      ),
      password2: new FormControl('',
        [Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z]).{6,16}$'),
        Validators.minLength(6),
        Validators.maxLength(16)]
      ),
      username: new FormControl('',
        [Validators.required,
        Validators.pattern('[A-Za-z0-9_]+'),
        Validators.minLength(3),
        Validators.maxLength(6)]
      ),
      mail: new FormControl('',
        [Validators.required,
        Validators.pattern('^[A-Za-z0-9_]{1,63}@[A-Za-z0-9_]{1,63}')]
      )
    },{
      validator: this.test()
    });

  }


  test(): ValidatorFn {
    return null;
  }


  checkErrorDetail(): void {
    switch (true) {
      case this.profileForm.get('phone').invalid:
        //! console.log(this.profileForm.get('telephone').errors)
        this.checkClear();
        if (this.checkDirty('phone')) {
          this.checkErrorType('phone');
        }
        break;
      case this.profileForm.get('password').invalid:
        //! console.log(this.profileForm.get('password').errors)
        this.checkClear();
        if (this.checkDirty('password')) {
          this.checkErrorType('password');
        }
        break;
      case (this.profileForm.get('password2').invalid || !(this.profileForm.get('password2').value === this.profileForm.get('password').value)):
        //! console.log(this.profileForm.get('checkPassword').errors || !(this.profileForm.get('checkPassword').value === this.profileForm.get('password').errors))
        this.checkClear();
        if (this.checkDirty('password2')) {
          this.errDescribe = 'Do not match password !!';
        }
        break;
      case this.profileForm.get('username').invalid:
        //! console.log(this.profileForm.get('accountName').errors)
        this.checkClear();
        if (this.checkDirty('username')) {
          this.checkErrorType('username');
        }
        break;
      case this.profileForm.get('mail').invalid:
        //! console.log(this.profileForm.get('Mymail').errors)
        this.checkClear();
        if (this.checkDirty('mail')) {
          this.checkErrorType('mail');
        }
        break;
      default:
        //! console.log(`default out.`)
        this.checkClear();
    }
  }


  checkDirty(name: string): boolean {
    return this.profileForm.get(name).dirty;
  }

  capitalize = (word: string) => word.substring(0, 1).toUpperCase() + word.substring(1);

  checkErrorType(name: string): void {
    if (this.profileForm.get(name).hasError('required')) {
      this.errDescribe = 'Please type in ur' + name + '!';
    } else if (this.profileForm.get(name).hasError('pattern')) {
      this.errDescribe = this.capitalize(name) + ' in wrong format !';
    } else if (this.profileForm.get(name).hasError('minlength')) {
      this.errDescribe = this.capitalize(name) + ' must be longer than ' + this.profileForm.get(name).getError('minlength').requiredLength + ' character !';
    } else if (this.profileForm.get(name).hasError('maxlength')) {
      this.errDescribe = this.capitalize(name) + ' must be shorter than ' + this.profileForm.get(name).getError('maxlength').requiredLength + ' character !';
    }
  }

  checkClear(): void {
    this.errDescribe = '';
  }


  goTab() {
    this.users_id = this.users.length +1;
    let user1 = new user(this.users_id,this.profileForm.get('phone').value,
    this.profileForm.get('password').value,
    this.profileForm.get('username').value,
    this.profileForm.get('mail').value);
    this.users.push(user1);

    console.log(this.users);

    localStorage.setItem('users',JSON.stringify(this.users));
    this.nav.navigateForward('');
  }

}

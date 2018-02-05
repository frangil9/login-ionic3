import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  profiles: any[];
  user: any;
  perfilSet: any[];
  perfil: any;
  profileIdSelected : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpProvider, public alertCtrl: AlertController) {
    this.user = {};
    this.perfilSet = [];
    this.perfil = {};
    this.profiles = [
      {
        "profileId": 1,
        "type": "user"
      },
      {
          "profileId": 2,
          "type": "admin"
      }
  ]
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Message!',
      subTitle: 'User inserted successfully!',
      buttons: ['OK']
    });
    alert.present();
  }

  onSubmit(){
    this.perfil.profileId = parseInt(this.profileIdSelected);
    this.perfilSet.push(this.perfil);
    this.user.perfilSet = this.perfilSet;
    console.log(this.user);
    this.saveUser(this.user);
    
  }

  saveUser(user){
    this.http.signup(user).subscribe(
      result => {
        this.showAlert();
        console.log(result);
    },
    error => {
        console.log(<any>error);
    }
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}

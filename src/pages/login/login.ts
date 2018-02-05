import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage } from '../tabs/tabs';
import { UserPage } from '../user/user';
import { HttpProvider } from '../../providers/http/http';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public usuario = {};
  public error = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpProvider, public alertCtrl: AlertController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Alert!',
      subTitle: 'invalid credentials!',
      buttons: ['OK']
    });
    alert.present();
  }
  
  goViewUser(){
    this.navCtrl.push(UserPage);
  }

  login(){
    console.log(this.usuario);
    this.http.login(this.usuario).subscribe(
      result => {
        this.goViewUser();
        console.log(result);
    },
    error => {
        console.log(<any>error);
        this.showAlert();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

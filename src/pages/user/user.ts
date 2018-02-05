import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  usuarios : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http: HttpProvider) {
  }

  cargarUsuarios(){
    this.http.loadUsers().subscribe(
      (res) => { 
        this.usuarios = res['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }

  ionViewDidLoad() {
    this.cargarUsuarios();
    console.log('ionViewDidLoad UserPage');
  }

}

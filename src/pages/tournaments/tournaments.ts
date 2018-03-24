import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamsPage } from '../teams/teams'
import{ EliteApiServiceProvider } from '../../providers/elite-api-service/elite-api-service'
import * as _ from 'lodash';
/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private eliteApi: EliteApiServiceProvider, private loadingCntrl: LoadingController) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TournamentsPage');
    let loader = this.loadingCntrl.create({
      content:'Getting Tournaments...'
    });
    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {this.tournaments = data;
        loader.dismiss();
      });
    });
  }

  itemTapped($event, tournament){
    this.navCtrl.push( TeamsPage, tournament );
  }


}

import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import {  TournamentsPage } from '../tournaments/tournaments';
import { TeamHomePage } from '../team-home/team-home'
import { EliteApiServiceProvider } from '../../providers/elite-api-service/elite-api-service';
import { UserSettings } from '../../providers/user-settings.service'


/**
 * Generated class for the MyTeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  favorites = [];
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private eliteApi: EliteApiServiceProvider,
      private loadingController: LoadingController,
      private userSettings: UserSettings) {
  }

  goToTournaments(){
    this.navCtrl.push(TournamentsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

  ionViewDidEnter() {
    this.favorites = this.userSettings.getAllFavorites();
    console.log("Favorites", this.userSettings.getAllFavorites());
  }

  favoriteTapped($event, favorite){
    let loader = this.loadingController.create({
        content: 'Getting data...',
        dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
        .subscribe(t => this.navCtrl.push(TeamHomePage, favorite.team));
}



}

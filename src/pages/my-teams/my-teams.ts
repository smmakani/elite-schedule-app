import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import {  TournamentsPage } from '../tournaments/tournaments';
import { TeamHomePage } from '../team-home/team-home'
import { EliteApiServiceProvider } from '../../providers/elite-api-service/elite-api-service';

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

  favorites = [
    {
        team: { id: 6182, name: 'HC Elite 7th', coach: 'Michelotti' },
        tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
        tournamentName: 'March Madness Tournament'
    },
    {
        team: { id: 805, name: 'HC Elite', coach: 'Michelotti' },
        tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
        tournamentName: 'Holiday Hoops Challenge'
    }
];
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private eliteApi: EliteApiServiceProvider,
      private loadingController: LoadingController) {
  }

  gotoTournaments(){
    this.navCtrl.push(TournamentsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
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

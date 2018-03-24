import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home'
import{ EliteApiServiceProvider } from '../../providers/elite-api-service/elite-api-service'
/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {
  teams = [];
  // teams = [
  //   { id: 1, name: "HC Elite"},
  //   { id: 2, name: "Team Takeover"},
  //   { id: 3, name: "DC Thunder"}
  // ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
            private eliteApi: EliteApiServiceProvider) {
  }

  ionViewDidLoad() {

    let selectedTourney = this.navParams.data;
    console.log('ionViewDidLoad ', this.navParams.data);
    this.eliteApi.getTournamentData(selectedTourney.id)
      .subscribe(data => {this.teams = data.teams;
      });
  }

  itemTapped($event, team) {
    this.navCtrl.push( TeamHomePage, team );
  }

}

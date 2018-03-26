import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home'
import{ EliteApiServiceProvider } from '../../providers/elite-api-service/elite-api-service'
import * as _ from 'lodash';
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
  private allTeams: any;
  private allTeamDivisions: any;
  teams = [];
  // teams = [
  //   { id: 1, name: "HC Elite"},
  //   { id: 2, name: "Team Takeover"},
  //   { id: 3, name: "DC Thunder"}
  // ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private eliteApi: EliteApiServiceProvider,
              private loadingController: LoadingController) {
  }

  ionViewDidLoad() {

    let selectedTourney = this.navParams.data;
    let loader = this.loadingController.create({
      content: 'Getting data...' });

      loader.present().then(() => {
        this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
          this.allTeams = data.teams;
          this.allTeamDivisions =
              _.chain(data.teams)
              .groupBy('division')
              .toPairs()
              .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
              .value();

          this.teams = this.allTeamDivisions;
          console.log('division teams', this.teams);
          loader.dismiss();
        });
      });

  }

  itemTapped($event, team) {
    this.navCtrl.push( TeamHomePage, team );
  }

}

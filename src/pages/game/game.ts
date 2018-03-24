import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EliteApiServiceProvider } from '../../providers/elite-api-service/elite-api-service'
import { TeamHomePage } from '../team-home/team-home'

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  game:any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApiServiceProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    this.game = this.navParams.data;
  }

  teamTapped(teamId){
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.navCtrl.push(TeamHomePage, team);
  }

}

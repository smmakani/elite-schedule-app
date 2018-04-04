import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as _ from 'lodash';
import { EliteApiServiceProvider } from '../../providers/elite-api-service/elite-api-service';

/**
 * Generated class for the StandingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {
  allStandings: any[];
  standings: any[];
  team:any = {};
  divisionFilter = 'division';
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
             private eliteApi: EliteApiServiceProvider) {
  }

  ionViewDidLoad() {
    this.team = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    this.standings = tourneyData.standings;

    // this.allStandings =
    //   _.chain(this.standings)
    //    .groupBy('division')
    //    .toPairs()
    //    .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
    //    .value();
    console.log('standings:', this.standings);
    //console.log('division Standings', this.allStandings);
    this.allStandings = tourneyData.standings;

    console.log('division Standings', this.allStandings);
    this.filterDivision();
  }

  filterDivision(){
    if(this.divisionFilter === 'all'){
      this.standings = this.allStandings;
    } else {
      this.standings = _.filter(this.allStandings, s => s.division === this.team.division);
    }
  }

  getHeader(record, recordIndex, records){
    if (recordIndex === 0 || record.division !== records[recordIndex-1].division) {
      return record.division;
    }
    return null;
  }

}

import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { EliteApiServiceProvider } from '../../providers/elite-api-service/elite-api-service';
declare var window: any;

@Component({
    selector: 'map',
    templateUrl: 'map.html'
})
export class MapPage {

    map: any = {};

    constructor(public navParams: NavParams, public eliteApi: EliteApiServiceProvider) {

    }

    ionViewDidLoad() {
        let games = this.navParams.data;
        let tourneyData = this.eliteApi.getCurrentTourney();
        let location = tourneyData.locations[games.locationId];

        this.map = {
            lat: location.latitude,
            lng: location.longitude,
            zoom: 12,
            markerLabel: games.location,
            marker: '../../assets/imgs/google-marker.png'
        };
    }

    getDirections() {
        window.location = `geo:${this.map.lat},${this.map.lng};u=35;`;
    }
}

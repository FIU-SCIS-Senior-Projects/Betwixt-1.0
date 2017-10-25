import { Component } from "@angular/core/";
import { NavParams, ViewController, NavController } from "ionic-angular";
import { HomePage } from "../home/home";
import { PreferenceOptions } from "../preferences/preference-options";

@Component({
  selector: "page-location",
  templateUrl: "location.html"
})
export class LocationPage {
  locations;
  group_uid;
  public preferences: PreferenceOptions;

  constructor(
    public viewCtrl: ViewController,
    params: NavParams,
    public navCtrl: NavController
  ) {
    this.locations = params.get("locations");
    this.group_uid = params.get("group_uid");
    this.preferences = params.get("preferences");

    this.sortByPreference();
  }

  selectLocation(latitude, longitude, title) {
    console.log("selected location!", latitude, longitude);
    console.log("group_uid", this.group_uid);
    this.dismiss();
    this.navCtrl.push(HomePage, {
      selectedLocation: { latitude, longitude, title },
      group_uid: this.group_uid
    });
  }

  sortByPreference() {
    if (!this.locations)
      this.locations.sort(this.preferenceCompare(this.preferences));
  }

  //Comparison function passed into sort.
  preferenceCompare(preferences) {
    return (a, b) => {
      //Amount of preferences a and b match.
      let aCount = 0;
      let bCount = 0;
      console.log(preferences);

      if (preferences.hasWifi) {
        if (a.no_wifi == "0") aCount++;
        if (b.no_wifi == "0") bCount++;
      }
      if (preferences.localDeals) {
        if (a.local_deal_flag == "1") aCount++;
        if (b.local_deal_flag == "1") bCount++;
      }

      //If a matches more preferences, put it first.
      if (aCount > bCount) return -1;
      //if b matches more preferences, put it first.
      if (bCount > aCount) return 1;
      else
        //Have the same preference count so do nothing.
        return 0;
    };
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

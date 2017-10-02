import { Component } from "@angular/core/";
import { NavParams, ViewController } from "ionic-angular";

@Component({
  selector: "page-space",
  templateUrl: "space.html"
})
export class SpacePage {
  spaceLink: string;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    let uid = params.get("uid");

    if (uid != "") this.spaceLink = `betwixt://betwixt.com/?group_uid=${uid}`;
    else
      this.spaceLink =
        "Oops! Bad things happened on the server. It's not your fault. Try closing the page and opening it again.";
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

import { Component, OnInit } from "@angular/core";
import { LightSwitchServiceService } from "../light-switch-service.service";

@Component({
  selector: "app-light",
  templateUrl: "./light.component.html",
  styleUrls: ["./light.component.css"]
})
export class LightComponent implements OnInit {
  public clickLight;

  constructor(public _lightswitchservice: LightSwitchServiceService) {
    //this.clickLight = this._lightswitchservice;
  }
  public test() {}
  ngOnInit() {}
}

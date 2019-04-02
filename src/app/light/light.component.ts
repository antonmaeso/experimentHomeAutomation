import { Component, OnInit } from "@angular/core";
import { LightSwitchServiceService } from "../light-switch-service.service";

@Component({
  selector: "app-light",
  templateUrl: "./light.component.html",
  styleUrls: ["./light.component.css"]
})
export class LightComponent implements OnInit {
  public lightswitch: LightSwitchServiceService;

  constructor(private _lightswitchservice: LightSwitchServiceService) {
    this.lightswitch = _lightswitchservice;
  }
  ngOnInit() {}
}

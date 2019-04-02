import { Component, OnInit } from "@angular/core";
import { LightSwitchServiceService } from "../light-switch-service.service";

@Component({
  selector: "app-ground-floor",
  templateUrl: "./ground-floor.component.html",
  styleUrls: ["./ground-floor.component.css"]
})
export class GroundFloorComponent implements OnInit {
  public lightSwitch = "";

  constructor(private _lightswitchservice: LightSwitchServiceService) {}

  ngOnInit() {
    this._lightswitchservice.lightClick();
  }
}

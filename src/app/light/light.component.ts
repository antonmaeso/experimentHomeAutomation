import { Component, OnInit, Input } from "@angular/core";
import { LightSwitchServiceService } from "../light-switch-service.service";

@Component({
  selector: "app-light",
  templateUrl: "./light.component.html",
  styleUrls: ["./light.component.css"]
})
export class LightComponent implements OnInit {
  @Input() public token;
  @Input() public pin;

  constructor(private _lightswitchservice: LightSwitchServiceService) {}

  public clickLight() {
    this._lightswitchservice.clickLight(this.token, this.pin);
  }

  ngOnInit() {}
}

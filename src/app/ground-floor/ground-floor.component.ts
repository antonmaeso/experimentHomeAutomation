import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ground-floor",
  templateUrl: "./ground-floor.component.html",
  styleUrls: ["./ground-floor.component.css"]
})
export class GroundFloorComponent implements OnInit {
  //constructor(private _lightswitchservice: LightSwitchServiceService) {}
  constructor() {}
  
  ngOnInit() {
    //this._lightswitchservice.lightClick();
  }
}

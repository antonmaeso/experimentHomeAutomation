import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ground-floor",
  templateUrl: "./ground-floor.component.html",
  styleUrls: ["./ground-floor.component.css"]
})
export class GroundFloorComponent implements OnInit {
  // public token = "dc19d934914147a5a9219111028ab032";
  // public pin = "V3";

  public automatedWidgets = {
    downstairsLigths: {
      token: "dc19d934914147a5a9219111028ab032",
      pin: "V3"
    }
  };

  constructor() {}

  ngOnInit() {
  }
}

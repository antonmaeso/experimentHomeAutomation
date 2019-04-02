import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GroundFloorComponent } from "./ground-floor/ground-floor.component";
import { FirstFloorComponent } from "./first-floor/first-floor.component";

const routes: Routes = [
  { path: "groundfloor", component: GroundFloorComponent },
  { path: "firstfloor", component: FirstFloorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [GroundFloorComponent, FirstFloorComponent]

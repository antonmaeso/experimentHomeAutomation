import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeScreenComponent } from "./home-screen/home-screen.component";
import { HomeLayoutComponent } from "./home-layout/home-layout.component";
import { LightSwitchServiceService } from "./light-switch-service.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeScreenComponent,
    HomeLayoutComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [LightSwitchServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}

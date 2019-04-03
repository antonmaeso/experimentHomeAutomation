import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LightSwitchServiceService {
  constructor(private httpClient: HttpClient) {}

  public clickLight(token, pin) {
    this.httpClient
      .get("http://192.168.1.73:8080/" + token + "/update/" + pin + "?value=1")
      .subscribe(res => {
        console.log(res);
      });
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class LightSwitchServiceService {
  constructor(private httpClient: HttpClient) {}

  public lightClick() {
    this.httpClient
      .get(
        "http://192.168.1.73:8080/dc19d934914147a5a9219111028ab032/update/V3?value=1"
      )
      .subscribe(res => {
        console.log(res);
      });
  }
}

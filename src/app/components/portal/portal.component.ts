import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-portal",
  templateUrl: "./portal.component.html",
  styleUrls: ["./portal.component.scss"],
})
export class PortalComponent implements OnDestroy, OnInit {
  constructor() {}

  ngOnInit() {
    console.error("on init");
  }

  ngOnDestroy() {
    console.error("on destroy");
  }
}

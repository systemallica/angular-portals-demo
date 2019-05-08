import { Component, AfterViewInit } from "@angular/core";
import { ComponentPortal } from "@angular/cdk/portal";
import { PortalComponent } from "./components/portal/portal.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  public selectedPortalA: ComponentPortal<PortalComponent>;
  public selectedPortalB: ComponentPortal<PortalComponent>;
  private portal: ComponentPortal<PortalComponent>;

  constructor() {}

  ngAfterViewInit() {
    this.portal = new ComponentPortal(PortalComponent);
  }

  public handleAClick(): void {
    this.selectedPortalB = undefined;
    this.selectedPortalA = this.portal;
  }

  public handleBClick(): void {
    this.selectedPortalA = undefined;
    this.selectedPortalB = this.portal;
  }
}

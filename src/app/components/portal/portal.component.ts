import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { Portal } from "../../state/portal.model";
import { PortalQuery } from "../../state/portal.query";
import { PortalService } from "../../state/portal.service";

@Component({
  selector: "app-portal",
  templateUrl: "./portal.component.html",
  styleUrls: ["./portal.component.scss"],
})
export class PortalComponent implements OnDestroy, OnInit {
  public text: string;

  public subscription: Subscription;

  constructor(
    private portalService: PortalService,
    private portalQuery: PortalQuery
  ) {}

  ngOnInit() {
    // Restore Portal state
    this.subscription = this.portalQuery
      .selectEntity(1)
      .subscribe((value: Portal) => {
        if (value) {
          this.text = value.input;
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // Save Portal state
    this.portalService.savePortal(1, { input: this.text });
  }
}

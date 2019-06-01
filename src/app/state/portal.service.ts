import { Injectable } from "@angular/core";

import { Portal } from "./portal.model";
import { PortalStore } from "./portal.store";

@Injectable({ providedIn: "root" })
export class PortalService {
  constructor(private booksStore: PortalStore) {}

  savePortal(id: number, portal: Portal): void {
    this.booksStore.upsert(id, portal);
  }
}

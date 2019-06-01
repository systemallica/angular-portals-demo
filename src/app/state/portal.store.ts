import { EntityState, EntityStore, StoreConfig } from "@datorama/akita";
import { Injectable } from "@angular/core";

import { Portal } from "./portal.model";

export interface PortalState extends EntityState<Portal> {}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "portal" })
export class PortalStore extends EntityStore<PortalState, Portal> {
  constructor() {
    super();
  }
}

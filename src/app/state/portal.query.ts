import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";

import { Portal } from "./portal.model";
import { PortalStore, PortalState } from "./portal.store";

@Injectable({ providedIn: "root" })
export class PortalQuery extends QueryEntity<PortalState, Portal> {
  constructor(protected store: PortalStore) {
    super(store);
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PortalModule } from "@angular/cdk/portal";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { PortalComponent } from "./components/portal/portal.component";

@NgModule({
  declarations: [AppComponent, PortalComponent],
  entryComponents: [PortalComponent],
  imports: [BrowserModule, BrowserAnimationsModule, PortalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { AkitaNgDevtools } from "@datorama/akita-ngdevtools";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { PortalModule } from "@angular/cdk/portal";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

import { AppComponent } from "./app.component";
import { PortalComponent } from "./components/portal/portal.component";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent, PortalComponent],
  entryComponents: [PortalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    PortalModule,
    environment.production ? [] : [AkitaNgDevtools.forRoot()],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

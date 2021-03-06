import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { from } from "rxjs/observable/from";

@NgModule({
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  declarations: [AppComponent],
})
export class AppModule {}

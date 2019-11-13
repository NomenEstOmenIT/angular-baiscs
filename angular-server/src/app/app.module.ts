import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Provider } from "@angular/core";

import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth.interceptor";

const INTERCEPTOR_PROVDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [INTERCEPTOR_PROVDER],
  bootstrap: [AppComponent]
})
export class AppModule {}

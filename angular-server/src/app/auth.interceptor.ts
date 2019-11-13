import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpEventType
} from "@angular/common/http";
import { Observable } from "rxjs";

import { tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("intercept req", req);

    const cloned = req.clone({
      headers: req.headers.append("Auth", "SOME RANDOM TOKEN")
    });
    return next.handle(cloned).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log("interceptor response event", event);
        }
      })
    );
  }
}

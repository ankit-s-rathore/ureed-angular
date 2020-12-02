import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // TODO: This token is hardcoded just for the purposes of testing
    // This should be replaced with the token after the authentication which is not ready yet
    const token =
      // eslint-disable-next-line max-len
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNTUxLCJlbWFpbCI6InNhbGFoZGRpbi5yLjE5ODBAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzYWxoYWRkaW4iLCJleHAiOjE2OTEyMTU1NzgsImlzX3JlbWVtYmVyX21lIjpmYWxzZSwiZGlyZWN0X2VtcGxveWVyX2ZpcnN0X2xvZ2luIjpmYWxzZSwiZmlyc3RfbmFtZSI6IlNhbGhhZGRpbiBzIiwibGFzdF9uYW1lIjoiUi4iLCJmdWxsX25hbWUiOiJTYWxoYWRkaW4gcyBSLiIsImNyZWF0ZWRfb24iOiIyMDIwLTExLTA5IDA2OjA2OjE4LjkyMjkwNCIsIm9yaWdfaWF0IjoxNjA0OTAxOTc4LCJ1c2VyX3R5cGUiOiJlbSIsImVtcGxveWVyX2lkIjoxODEsImJhbGFuY2UiOjQwNi41NCwicGljdHVyZSI6Imh0dHBzOi8vbWVkaWEtZGV2LXVyZWVkLnMzLmFtYXpvbmF3cy5jb20vY2FjaGUvNTMvZTMvNTNlMzk2Y2M1OTc5NzI5MjQyMTY3MGZlM2E3MjA3NWMuanBnIiwic3RhdHVzIjoiQUMiLCJkaXNwbGF5X25hbWUiOiJMZWVuIE0uIiwiZmF2b3JpdGVfZnJlZWxhbmNlcnMiOlsxMDU5NCw2MjQzLDEyNTkxLDE2MDkxLDIwOTcwLDE0OSwyNzMwNSwxOTk0MCw2Mzk5LDI3MiwzNTUyN10sInBob25lX251bWJlciI6Ijc5NjM5MjIyOCIsImF0aWJpVXNlclR5cGUiOlsiVEkiXX0.RxxbMretPq74MXcPrmScYuKj2UnApsvkARr4Yjb3JH4';

    const tokenReq = req.clone({
      setHeaders: { authorization: `Bearer ${token}` },
    });

    return next.handle(tokenReq);
  }
}

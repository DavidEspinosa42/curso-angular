import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError, delay } from 'rxjs/operators';
import { Dolar } from './dolar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  constructor(private http: HttpClient) { }

  public getDolar(): Observable<Dolar> {
      return this.http.get(environment.getDolarAPI)
        .pipe(
          delay(3000),
          map((response: Dolar) => response),
          catchError((error) => throwError(error))
        );
  }

}

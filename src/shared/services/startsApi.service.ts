import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { StartDetails } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StartsApiService {
  url = 'https://api.spacexdata.com/v4/launches';

  constructor(private http: HttpClient) {}

  getStarsList(): Observable<StartDetails[]> {
    return this.http.get<StartDetails[]>(this.url);
  }

  getStartDetails(uuid: string): Observable<StartDetails> {
    return this.http.get<StartDetails>(`${this.url}/${uuid}`);
  }
}

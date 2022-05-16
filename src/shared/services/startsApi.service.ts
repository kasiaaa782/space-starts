import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Launchpad, Rocket, StartDetails } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StartsApiService {
  urlLaunches = 'https://api.spacexdata.com/v4/launches';

  urlRockets = 'https://api.spacexdata.com/v4/rockets';

  urlLaunchpad = 'https://api.spacexdata.com/v4/launchpads';

  constructor(private http: HttpClient) {}

  getStarsList(): Observable<StartDetails[]> {
    return this.http.get<StartDetails[]>(this.urlLaunches);
  }

  getStartDetails(uuid: string): Observable<StartDetails> {
    return this.http.get<StartDetails>(`${this.urlLaunches}/${uuid}`);
  }

  getRocketDetails(uuid: string): Observable<Rocket> {
    return this.http.get<Rocket>(`${this.urlRockets}/${uuid}`);
  }

  getLaunchpadDetails(uuid: string): Observable<Launchpad> {
    return this.http.get<Launchpad>(`${this.urlLaunchpad}/${uuid}`);
  }
}

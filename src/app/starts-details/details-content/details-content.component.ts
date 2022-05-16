import { Component, Input, OnInit } from '@angular/core';

import { DASH_FORMAT_DATE } from 'src/shared/constants/format-date';
import {
  Launchpad,
  Rocket,
  StartDetails
} from 'src/shared/interfaces/interfaces';
import { StartsApiService } from 'src/shared/services/startsApi.service';

@Component({
  selector: 'app-details-content',
  templateUrl: './details-content.component.html',
  styleUrls: ['./details-content.component.scss']
})
export class DetailsContentComponent implements OnInit {
  @Input() startDetails: StartDetails;

  DASH_FORMAT_DATE = DASH_FORMAT_DATE;

  rocketName: string;

  launchpad: Launchpad;

  constructor(private startsApiService: StartsApiService) {}

  ngOnInit(): void {
    this.getRocketName();
    this.getLaunchpadDetails();
  }

  getRocketName(): void {
    this.startsApiService.getRocketDetails(this.startDetails.rocket).subscribe({
      next: (item: Rocket) => {
        this.rocketName = item.name;
      }
    });
  }

  getLaunchpadDetails(): void {
    this.startsApiService
      .getLaunchpadDetails(this.startDetails.launchpad)
      .subscribe({
        next: (item: Launchpad) => {
          this.launchpad = item;
        }
      });
  }
}

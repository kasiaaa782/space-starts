import { Component, OnInit } from '@angular/core';

import { StartDetails } from 'src/shared/interfaces/interfaces';
import { StartsApiService } from 'src/shared/services/startsApi.service';

@Component({
  selector: 'app-starts-explore',
  templateUrl: './starts-explore.component.html',
  styleUrls: ['./starts-explore.component.scss']
})
export class StartsExploreComponent implements OnInit {
  constructor(private startsApiService: StartsApiService) {}

  startsList: StartDetails[] = [];

  ngOnInit(): void {
    this.startsApiService.getStarsList().subscribe((data) => {
      console.log(data);
      this.startsList = data;
    });
  }
}

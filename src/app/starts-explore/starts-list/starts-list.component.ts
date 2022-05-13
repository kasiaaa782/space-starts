import { Component, OnInit } from '@angular/core';
import { StartDetails } from 'src/shared/interfaces/interfaces';

import { StartsApiService } from 'src/shared/services/startsApi.service';

@Component({
  selector: 'app-starts-list',
  templateUrl: './starts-list.component.html',
  styleUrls: ['./starts-list.component.scss']
})
export class StartsListComponent implements OnInit {
  constructor(private startsApiService: StartsApiService) {}

  startsList: StartDetails[];

  ngOnInit(): void {
    this.startsApiService.getStarsList().subscribe((data) => {
      this.startsList = data;

      console.log('TODO paginate, sort list');
    });
  }
}

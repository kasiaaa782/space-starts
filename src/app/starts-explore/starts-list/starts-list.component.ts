import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StartDetails } from 'src/shared/interfaces/interfaces';
import { StartsApiService } from 'src/shared/services/startsApi.service';

@Component({
  selector: 'app-starts-list',
  templateUrl: './starts-list.component.html',
  styleUrls: ['./starts-list.component.scss']
})
export class StartsListComponent implements OnInit {
  startsList: StartDetails[];

  constructor(
    private startsApiService: StartsApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.startsApiService.getStarsList().subscribe((data) => {
      this.startsList = data;

      console.log('TODO paginate, sort list');
    });
  }

  navigateToDetails(item: StartDetails): void {
    this.router.navigate([`/starts-explore/details/${item.id}`], {
      queryParams: {
        item
      }
    });
  }
}

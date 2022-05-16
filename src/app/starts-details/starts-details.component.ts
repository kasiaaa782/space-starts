import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StartDetails } from 'src/shared/interfaces/interfaces';
import { StartsApiService } from 'src/shared/services/startsApi.service';

@Component({
  selector: 'app-starts-details',
  templateUrl: './starts-details.component.html',
  styleUrls: ['./starts-details.component.scss']
})
export class StartsDetailsComponent implements OnInit {
  startDetails: StartDetails;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private startsApiService: StartsApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.startsApiService.getStartDetails(params['uuid']).subscribe({
        next: (data: StartDetails) => {
          this.startDetails = data;
        },
        error: (error) => {
          console.error('wrong uuid', error),
            this.router.navigate([`/starts-explore`]);
        }
      });
    });
  }
}

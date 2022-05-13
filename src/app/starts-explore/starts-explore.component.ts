import { Component } from '@angular/core';

import { StartsFiltersRequest } from 'src/shared/interfaces/interfaces';

@Component({
  selector: 'app-starts-explore',
  templateUrl: './starts-explore.component.html',
  styleUrls: ['./starts-explore.component.scss']
})
export class StartsExploreComponent {
  applyFilters(request: StartsFiltersRequest): void {
    console.log('TODO filtration');
  }
}

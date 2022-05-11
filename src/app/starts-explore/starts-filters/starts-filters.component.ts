import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { StartsFiltersRequest } from 'src/shared/interfaces/interfaces';

@Component({
  selector: 'app-starts-filters',
  templateUrl: './starts-filters.component.html',
  styleUrls: ['./starts-filters.component.scss']
})
export class StartsFiltersComponent {
  @Output() applyFiltersClicked = new EventEmitter();

  startSearchForm = new FormGroup({
    startName: new FormControl(''),
    startDate: new FormControl(''),
    isSuccessfulFlight: new FormControl(false)
  });

  request: StartsFiltersRequest = {
    startName: '',
    startDate: '',
    isSuccessfulFlight: false
  };

  applyFilters(): void {
    let controls = this.startSearchForm.controls;
    this.request = {
      startName: controls['startName'].value,
      startDate: controls['startDate'].value,
      isSuccessfulFlight: controls['isSuccessfulFlight'].value
    };
    this.applyFiltersClicked.emit(this.request);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-starts-filters',
  templateUrl: './starts-filters.component.html',
  styleUrls: ['./starts-filters.component.scss']
})
export class StartsFiltersComponent implements OnInit {
  startSearchForm = new FormGroup({
    startName: new FormControl(''),
    startDate: new FormControl(''),
    isSuccessfulFlight: new FormControl('')
  });

  constructor() {}

  ngOnInit(): void {}

  applyFilters(): void {
    console.log(this.startSearchForm);
  }
}

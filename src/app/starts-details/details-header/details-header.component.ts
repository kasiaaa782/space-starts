import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-header',
  templateUrl: './details-header.component.html',
  styleUrls: ['./details-header.component.scss']
})
export class DetailsHeaderComponent {
  @Input() flightNumber: number;

  constructor(private router: Router) {}

  navigateToMainList(): void {
    this.router.navigate([`/starts-explore`]);
  }
}

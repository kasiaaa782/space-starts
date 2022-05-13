import { Component, Input, OnInit } from '@angular/core';
import { StartDetails } from 'src/shared/interfaces/interfaces';

@Component({
  selector: 'app-start-box',
  templateUrl: './start-box.component.html',
  styleUrls: ['./start-box.component.scss']
})
export class StartBoxComponent implements OnInit {
  @Input() startDetails: StartDetails;

  ngOnInit(): void {
    console.log(this.startDetails);
  }

  navigateToDetails() {}
}

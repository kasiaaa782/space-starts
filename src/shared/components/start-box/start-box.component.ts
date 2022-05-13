import { Component, Input, Output, EventEmitter } from '@angular/core';

import { StartDetails } from 'src/shared/interfaces/interfaces';

@Component({
  selector: 'app-start-box',
  templateUrl: './start-box.component.html',
  styleUrls: ['./start-box.component.scss']
})
export class StartBoxComponent {
  @Input() startDetails: StartDetails;

  @Output() navigateToDetailsClicked = new EventEmitter();
}

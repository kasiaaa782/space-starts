import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DASH_FORMAT_DATE } from 'src/shared/constants/format-date';
import { StartDetails } from 'src/shared/interfaces/interfaces';

@Component({
  selector: 'app-start-box',
  templateUrl: './start-box.component.html',
  styleUrls: ['./start-box.component.scss']
})
export class StartBoxComponent {
  @Input() startDetails: StartDetails;

  @Output() navigateToDetailsClicked = new EventEmitter();

  DASH_FORMAT_DATE = DASH_FORMAT_DATE;
}

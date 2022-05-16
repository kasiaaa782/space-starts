import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { StartBoxComponent } from './start-box/start-box.component';
import { DetailsBoxComponent } from './details-box/details-box.component';

@NgModule({
  declarations: [StartBoxComponent, DetailsBoxComponent],
  imports: [CommonModule],
  providers: [DatePipe],
  exports: [StartBoxComponent, DetailsBoxComponent]
})
export class SharedComponentsModule {}

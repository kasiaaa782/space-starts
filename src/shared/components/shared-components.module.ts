import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { StartBoxComponent } from './start-box/start-box.component';

@NgModule({
  declarations: [StartBoxComponent],
  imports: [CommonModule],
  providers: [DatePipe],
  exports: [StartBoxComponent]
})
export class SharedComponentsModule {}

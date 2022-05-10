import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedComponentsModule } from 'src/shared/commons/components/shared-components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartsExploreComponent } from './starts-explore/starts-explore.component';
import { StartsFiltersComponent } from './starts-explore/starts-filters/starts-filters.component';

@NgModule({
  declarations: [AppComponent, StartsExploreComponent, StartsFiltersComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

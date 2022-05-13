import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { SharedComponentsModule } from 'src/shared/components/shared-components.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartsExploreComponent } from './starts-explore/starts-explore.component';
import { StartsFiltersComponent } from './starts-explore/starts-filters/starts-filters.component';
import { StartsListComponent } from './starts-explore/starts-list/starts-list.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    StartsExploreComponent,
    StartsFiltersComponent,
    StartsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    SharedComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

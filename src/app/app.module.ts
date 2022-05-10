import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartsExploreComponent } from './starts-explore/starts-explore.component';
import { StartsFiltersComponent } from './starts-explore/starts-filters/starts-filters.component';

@NgModule({
  declarations: [AppComponent, StartsExploreComponent, StartsFiltersComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

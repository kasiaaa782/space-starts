import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartsDetailsComponent } from './starts-details/starts-details.component';
import { StartsExploreComponent } from './starts-explore/starts-explore.component';

const routes: Routes = [
  { path: '', redirectTo: '/starts-explore', pathMatch: 'full' },
  { path: 'starts-explore', component: StartsExploreComponent },
  { path: 'starts-explore/details/:uuid', component: StartsDetailsComponent },
  { path: '**', redirectTo: '/starts-explore' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

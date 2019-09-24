import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnePageComponent } from './components/one-page/one-page.component';
import { TwoPageComponent } from './components/two-page/two-page.component';
const routes: Routes = [
  { path: '', redirectTo: '/OnePage', pathMatch: 'full'},
  { path: 'OnePage', component: OnePageComponent },
  { path: 'TwoPage', component: TwoPageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }

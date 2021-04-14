import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ReasonsComponent } from './reasons/reasons.component';

const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'reasons', component: ReasonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

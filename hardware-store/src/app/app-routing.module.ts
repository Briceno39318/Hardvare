import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HardwareHomeComponent } from './pages/hardware-home/hardware-home.component';
import { HardwareAdministrationComponent } from './pages/hardware-administration/hardware-administration.component';

const routes: Routes = [
  { path: 'hardwares', component: HardwareHomeComponent },
  { path: 'administration', component: HardwareAdministrationComponent },
  { path: '',   redirectTo: '/hardwares', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

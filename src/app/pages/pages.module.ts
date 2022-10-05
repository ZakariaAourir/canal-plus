import { NgModule } from '@angular/core';
import { NbInputModule, NbMenuModule, NbRadioModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbInputModule,
    NbRadioModule
  ],
  declarations: [
    PagesComponent
  ],
})
export class PagesModule {
}

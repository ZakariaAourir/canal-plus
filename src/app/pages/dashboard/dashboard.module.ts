import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [],
})
export class DashboardModule { }

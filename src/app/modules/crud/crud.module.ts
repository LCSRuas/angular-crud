import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonActionComponent } from './components/person-action/person-action.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    PersonListComponent,
    PersonActionComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot()
  ]
})
export class CrudModule { }

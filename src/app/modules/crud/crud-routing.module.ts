import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonActionComponent } from './components/person-action/person-action.component';
import { PersonListComponent } from './components/person-list/person-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'person', pathMatch: 'full' },
  { path: 'person', component: PersonListComponent},
  { path: 'person/action', component: PersonActionComponent},
  { path: 'person/action/:idPerson', component: PersonActionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }

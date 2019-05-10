import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartListComponent } from './part-list/part-list.component';
import { PartCreateComponent } from './part-create/part-create.component';
import { PartViewComponent } from './part-view/part-view.component';

const routes: Routes = [{path: '', redirectTo: 'parts', pathMatch: 'full'},
{path: 'parts',
component: PartListComponent},
{path: 'create-part',
component: PartCreateComponent},
{path: 'parts/:id',
component: PartViewComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

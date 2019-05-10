import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule,MatTableModule } from  '@angular/material';
import { PartListComponent } from './part-list/part-list.component';
import { PartCreateComponent } from './part-create/part-create.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobCreateComponent } from './job-create/job-create.component';
import { PartViewComponent } from './part-view/part-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PartListComponent,
    PartCreateComponent,
    JobListComponent,
    JobCreateComponent,
    PartViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
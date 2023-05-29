import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { ShowInspectionComponent } from './subjects/show-inspection/show-inspection.component';
import { AddEditInspectionComponent } from './subjects/add-edit-inspection/add-edit-inspection.component';
import {SubjectsApiService} from './subjects-api-.service';
import {NgxPaginationModule} from "ngx-pagination";
import {InscriptionsFormComponents} from "./inscriptions-form/inscriptions-form.component";
import { FilterPipe } from './pies/filter.pipe';
import { PruebaPipe } from './pies/prueba.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    ShowInspectionComponent,
    AddEditInspectionComponent,
    InscriptionsFormComponents,
    FilterPipe,
    PruebaPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [SubjectsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

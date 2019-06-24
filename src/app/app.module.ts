import { BrowserModule } from '@angular/platform-browser';
import {Input, NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialog, MatDialogModule,
  MatDialogRef,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { BackComponent } from './back/back.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { InsideComponent } from './inside/inside.component';
import {SvgService} from './svg.service';
import { FrontViewComponent } from './front-view/front-view.component';
import { AddTextComponent } from './add-text/add-text.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BackViewComponent } from './back-view/back-view.component';
import { LeftViewComponent } from './left-view/left-view.component';
import { RightViewComponent } from './right-view/right-view.component';
import { InnerViewComponent } from './inner-view/inner-view.component';
import { ReviewComponent } from './review/review.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { AddArtworkComponent } from './add-artwork/add-artwork.component';
import {HttpClientModule} from '@angular/common/http';
import {ReviewFormService} from './review-form/review-form.service';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    ColorPickerComponent,
    BackComponent,
    LeftComponent,
    RightComponent,
    InsideComponent,
    FrontViewComponent,
    AddTextComponent,
    BackViewComponent,
    LeftViewComponent,
    RightViewComponent,
    InnerViewComponent,
    ReviewComponent,
    ReviewFormComponent,
    AddArtworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [ReviewFormComponent],
  providers: [SvgService, XMLSerializer, ReviewFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }

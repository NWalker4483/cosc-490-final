import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreedVoterComponent } from './breed-voter/breed-voter.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
 
@NgModule({
  declarations: [
    AppComponent,
    BreedVoterComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    NgxSliderModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

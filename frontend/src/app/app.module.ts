import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterComponent } from './register/register.component';
import { VoteComponent } from './vote/vote.component';
import { PollsComponent } from './polls/polls.component';
import { ChartsModule } from 'ng2-charts';
import { ProposeComponent } from './propose/propose.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    VoteComponent,
    PollsComponent,
    ProposeComponent
  ],
  imports: [
    ChartsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ChartsModule } from 'ng2-charts';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { ViewPollComponent } from './view-poll/view-poll.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreatePollComponent,
    ViewPollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'Poll'),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

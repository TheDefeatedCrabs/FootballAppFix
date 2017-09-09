import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { NewsModule } from './components/news/news.module';
import { SharedModule } from './components/shared/shared.module';
import { AuthModule } from './components/auth/auth.module';
// Angular Fire Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// Components imports
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddTipComponent } from './components/tips/add-tip/add-tip.component';
import { TipsComponent } from './components/tips/tips.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProfileComponent } from './components/profile/profile.component';

import { LiveEventsComponent } from './components/live-events/live-events.component';




// Services
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LiveEventsService } from "./services/live-events.service";


// FireBase config
export const firebaseConfig = {
    apiKey: "AIzaSyAHvI_4TeAPLEVp1VEme9feDKgh6U1kR80",
    authDomain: "footballapp-f9fad.firebaseapp.com",
    databaseURL: "https://footballapp-f9fad.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "25155396791"
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TipsComponent,
    AddTipComponent,
    CarouselComponent,
    ProfileComponent,
    LiveEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    NewsModule,
    SharedModule,
    AuthModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthService,
    AuthGuard,
    LiveEventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

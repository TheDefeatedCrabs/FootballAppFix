import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app.routes';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { NewsModule } from './components/news/news.module';
import { SharedModule } from './components/shared/shared.module';
import { AuthModule } from './components/auth/auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TipsModule } from './components/tips/tips.module';
import { FunModule } from "./components/fun/fun-modul";
// Angular Fire Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// Components imports
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LiveEventsComponent } from './components/live-events/live-events.component';
import { MatchDetailsModalComponent } from './components/live-events/match-details-modal/match-details-modal.component'
// Services
import { ClientService } from './services/client.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { MatchesService } from "./services/matches.service";
import { FootballStatesService } from "./services/football-states.service";
// Pipes
import { CurrentStateFilterPipe } from './components/live-events/shared/current-state-filter.pipe';
import { FooterComponent } from './components/footer/footer.component';



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
    CarouselComponent,
    ProfileComponent,
    LiveEventsComponent,
    MatchDetailsModalComponent,
    CurrentStateFilterPipe,
    FooterComponent,
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
    AuthModule,
    TipsModule,
    FunModule,
    NgbModule.forRoot()
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthService,
    AuthGuard,
    MatchesService,
    FootballStatesService,
  ],
  entryComponents: [MatchDetailsModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

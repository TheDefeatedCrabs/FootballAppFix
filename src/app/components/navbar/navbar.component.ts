import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import 'rxjs/add/operator/map';
import { FunComponent } from './../../fun/fun.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private fun: FunComponent
  ) { }

  ngOnInit() {
    this.authService.authUser().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onFunClick() {
    this.fun.open('help');
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessagesService.show('Излязохте успешно!', { cssClass: 'alert-success', timeout: 6000 });
  }
}

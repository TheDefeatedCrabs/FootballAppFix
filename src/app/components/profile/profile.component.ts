import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    displayName: '',
    email: '',
    status: ''
  };
  constructor(public clientService: ClientService) {}

  public paths = [
    { link: '/news/add', text: 'Добави новина', type: 'btn-primary'},
    { link: '/tips/add', text: 'Добави прогноза', type: 'btn-success' },
    { link: '/joks/add', text: 'Добави шега', type: 'btn-secondery' }
  ];


  ngOnInit() {
    this.clientService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}

import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: Array<any>;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getUsers()
    .then((users) => {
      this.users = users;
    })
  }

}
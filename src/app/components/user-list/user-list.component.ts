import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Output() userWasSelected = new EventEmitter<any>();
  
  users = [];
  @Input() selectedUser: any;

  constructor(private usersService : UsersService) { }

  ngOnInit() {
    this.usersService.getUsers()
    .then((users) => {
      this.users = users;
      console.log(users);
    })
    console.log(this.selectedUser)
  }

  onUserSelect(user: string){
    this.userWasSelected.emit(user);
    console.log(user);
  }

}
